import assert from 'assert';
import { EventMapper } from './script.js';

// Prompts that the analytics is loaded
/**
 * This function is executed when the window is fully loaded.
 * It logs a message to the console indicating that the analytics is loaded.
 * @event window#onload
 */
window.onload = () => {
  console.log('Analytics is loaded!');
};

// DOM Elements
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');

// Event Listeners
/**
 * This function is an event listener for the start button.
 * When the start button is clicked, it triggers the EventMapper function.
 *
 * @param {Event} e - The event object, which contains information about the event.
 * @param {number} id - A constant id set to 123.
 * @returns {void}
 */

startButton.addEventListener('click', function (e) {
  const id = 'assetABC';
  EventMapper(e, id);
});

// Event Listeners (optional to use)
/**
 * This function is an event listener for the 'click' event on the stopButton.
 * When the stopButton is clicked, it clears the console and logs a message indicating that the analytics have stopped.
 *
 * @param {Event} e - The event object.
 */
stopButton.addEventListener('click', function (e) {
  //clear the console
  console.clear();
  console.log('Analytics Stopped!');
});
