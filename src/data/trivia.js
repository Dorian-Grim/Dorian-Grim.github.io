const JSONS = import.meta.glob("./JSONS/*.json");
/**
 * @type any
 */
const trivia = {}
for (const jsonPATH in JSONS) 
{
  const module = await import(/* @vite-ignore */jsonPATH);
  trivia[jsonPATH.split("/")[2].split(".")[0].replaceAll(" ", "_")] = module.default
}

/**
 * @type {any[]}
 */
export const trimmedTrivia = [];

Object.entries(trivia).map(([, value]) => 
{
  value.forEach((/** @type {any} */ element) => 
  {
    trimmedTrivia.push(element)
  });
});
export const triviaForCourse = (/** @type {string} */ course) => 
{
  if (course === "random") return trimmedTrivia;
  // @ts-ignore
  return trivia[course] ? trivia[course] : null;
};
