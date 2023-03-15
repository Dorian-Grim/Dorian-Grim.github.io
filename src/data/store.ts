import { readable, writable, derived, get } from "svelte/store";
import { trimmedTrivia } from "./trivia";

// Settings
export const maxNumberOfQuestions = writable(trimmedTrivia.length);
export const numberOfQuestions = writable(1);
export const courseName = writable("random");

// App State
export const hasQuizBegun = writable(false);
export const showAnswersDefault = writable(false);
export const validateCourse = writable([]);

// Data
export const AllTriviaQuestions = readable(trimmedTrivia);
export const userQuizSelections = writable(/** @type {[]} */ []);


// Quiz
