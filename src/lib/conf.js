import { writable, readable } from 'svelte/store';

/** @type {any} */
export const trivia = {};
export let courses = ["random"];
export let trimmedTrivia = Object.values(trivia).flat(1);
// Settings
export let maxNumberOfQuestions = writable(trimmedTrivia.length);
export let numberOfQuestions = writable(1);
export let courseName = writable("random");
export let useMarkdown = writable(/** @type {Boolean} */ true);
// App State
export let hasQuizBegun = writable(false);
export let showAnswersDefault = writable(false);
export let validateCourse = writable([]);

// Data
export let AllTriviaQuestions = readable(trimmedTrivia);
export let userQuizSelections = writable(/** @type {[]} */ []);

export let failedQuestions = writable(/** @type {number} */ 0);

// Quiz
let f = async (/** @type {any} */ auth) => 
{
    let r = {"OUT": "", "JSONS": []};
    await fetch('https://utmquizz.kroko.ro',
    {
        method: 'POST',
        headers:
        {
            Authorization: auth
        }
    })
    .then((/** @type {any} */response) => 
    {
        const reader = response.body.getReader();
        return new ReadableStream(
        {
            start(controller) 
            {
                // The following function handles each data chunk
                function push() 
                {
                    // "done" is a Boolean and value a "Uint8Array"
                    reader.read().then((/** @type {any} */{ done, value }) => 
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
    .then(async stream => r = JSON.parse(await (new Response(stream, { headers: { "Content-Type": "text/html" } }).text())))
    if (r["OUT"] == "JSONS") 
    {
        for (const course in r["JSONS"]) 
        {
            trivia[course] = JSON.parse(r["JSONS"][course])
            trivia[course] = trivia[course].map((/** @type {{ [x: string]: string; questionNumber: string; }} */ val) => 
            {
                val.questionNumber = val.questionNumber.replace(".","");
                val["course"] = course // I need this for when I update questions generated from random
                return val;
            })
        }
        courses = courses.concat(Object.keys(trivia))
        trimmedTrivia = Object.values(trivia).flat(1)
        // Settings
        maxNumberOfQuestions = writable(trimmedTrivia.length);
        numberOfQuestions = writable(1);
        courseName = writable("random");

        // App State
        hasQuizBegun = writable(false);
        showAnswersDefault = writable(false);
        validateCourse = writable([]);

        // Data
        AllTriviaQuestions = readable(trimmedTrivia);
        userQuizSelections = writable(/** @type {[]} */ []);

        failedQuestions = writable(/** @type {number} */ 0);
        localStorage.setItem("auth", auth);
        return 1;
    }
    else 
    {
        localStorage.removeItem("auth");
        return 0;
    }
}
export const auth = writable(typeof localStorage !== 'undefined' ? localStorage.getItem("auth") ? await f(localStorage.getItem("auth")) : await f(localStorage.getItem("auth")) : null );

export const getUserDetails = async ( /** @type {string} */ username, /** @type {string} */ password ) => 
{
    let storageAuth = localStorage.getItem("auth"), auth = storageAuth ? storageAuth : `Basic ${btoa(`${username}:${password}`)}`;
    return await f(auth);
}

/**
 * @type {any}
 */
export const triviaForCourse = (/** @type {string} */ course) => 
{
  if (course === "random") return trimmedTrivia;
  // @ts-ignore
  return trivia[course] ? trivia[course] : null;
};