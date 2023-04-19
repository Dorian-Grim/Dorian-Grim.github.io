import { trimmedTrivia, w, r } from "../auth";
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