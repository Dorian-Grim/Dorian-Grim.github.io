const JSONS = import.meta.glob("./JSONS/*.json");
/**
 * @type any
 */
export const trivia = {};
for (const path in JSONS) 
{
  // @ts-ignore
  // I can't cast it as NodeModule in a .js file, only on .ts /shrug
  await JSONS[path]().then(module => trivia[path.split("/")[2].split(".")[0].replaceAll(" ", "_")] = module.default)
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
