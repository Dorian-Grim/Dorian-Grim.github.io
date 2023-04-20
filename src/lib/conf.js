import { writable, readable } from 'svelte/store';

export const trivia = {};
let f = async (/** @type {string|null} */ auth) => 
{
    let r = {"OUT": "", "JSONS": []};
    await fetch('https://utmquizz.kroko.ro',
    {
        // @ts-ignore
        headers:
        {
            method: 'GET',
            Authorization: auth
        }
    })
    .then((response) => 
    {
        // @ts-ignore
        const reader = response.body.getReader();
        return new ReadableStream(
        {
            start(controller) 
            {
                // The following function handles each data chunk
                function push() 
                {
                    // "done" is a Boolean and value a "Uint8Array"
                    reader.read().then(({ done, value }) => 
                    {
                        // If there is no more data to read
                        if (done) 
                        {
                            controller.close();
                            return;
                        }
                        // Get the data and send it to the browser via the controller
                        controller.enqueue(value);
                        push();
                    });
                }
                push();
            },
        });
    })
    .then(async (stream) => r = JSON.parse(await (new Response(stream, { headers: { "Content-Type": "text/html" } }).text())))
    if (r["OUT"] == "JSONS") 
    {
        // @ts-ignore
        for (const course in r["JSONS"]) trivia[course] = JSON.parse(r["JSONS"][course])
        // @ts-ignore
        localStorage.setItem("auth", auth);
        return 1;
    }
    else 
    {
        localStorage.removeItem("auth");
        return 0;
    }
}
export const auth = writable(typeof localStorage !== 'undefined' ? localStorage.getItem("auth") ? await f(localStorage.getItem("auth")) : null : null );

export const getUserDetails = async ( /** @type {string} */ username, /** @type {string} */ password ) => 
{
    let storageAuth = localStorage.getItem("auth"), auth = storageAuth ? storageAuth : `Basic ${btoa(`${username}:${password}`)}`;
    return await f(auth);
}

export const w = writable;
export const r = readable;

/**
 * @type {any[]}
 */
export let trimmedTrivia = [];
// @ts-ignore
for (const course in trivia) trimmedTrivia = trimmedTrivia.concat(trivia[course]);

export const triviaForCourse = (/** @type {string} */ course) => 
{
  if (course === "random") return trimmedTrivia;
  // @ts-ignore
  return trivia[course] ? trivia[course] : null;
};

// Settings
export const maxNumberOfQuestions = w(trimmedTrivia.length);
export const numberOfQuestions = w(1);
export const courseName = w("random");

// App State
export const hasQuizBegun = w(false);
export const showAnswersDefault = w(false);
export const validateCourse = w([]);

// Data
export const AllTriviaQuestions = r(trimmedTrivia);
export const userQuizSelections = w(/** @type {[]} */ []);

export const failedQuestions = w(/** @type {number} */ 0);

// Quiz