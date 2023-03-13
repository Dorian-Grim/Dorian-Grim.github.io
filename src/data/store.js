import {readable, writable, derived, get} from 'svelte/store';
import { generateQuiz } from '$lib/utils';
import {trivia, trimmedTrivia} from './trivia';

// Settings
export const maxNumberOfQuestions = readable(trimmedTrivia.length);
export const numberOfQuestions = writable(1);
export const courseName = writable("random");

// App State
export const hasQuizBegun = writable(false);
export const showAnswersDefault = writable(false);

// Data
export const triviaQuestions = readable(trimmedTrivia);
export const score = writable(0);
export const detailedScore = writable([]);

