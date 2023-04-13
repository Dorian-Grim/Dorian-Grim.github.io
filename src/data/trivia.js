const JSONS = import.meta.glob("./JSONS/*.json");
/**
 * @type any
 */
export const trivia = {}
for (const jsonPATH in JSONS) 
{
  const module = await import(/* @vite-ignore */jsonPATH);
  trivia[jsonPATH.split("/")[2].split(".")[0].replaceAll(" ", "_")] = module.default
}
/**
 * @type {any[]}
 */
export let trimmedTrivia = [];
for (const course in trivia) trimmedTrivia = trimmedTrivia.concat(trivia[course]);

export const triviaForCourse = (/** @type {string} */ course) => 
{
  if (course === "random") return trimmedTrivia;
  // @ts-ignore
  return trivia[course] ? trivia[course] : null;
};
