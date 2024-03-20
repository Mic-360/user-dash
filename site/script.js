// Purpose: To manage the analytics of the web page
//! Import the axios library on react project it'll work as it's defined
// import axios from 'axios';

let stopwatch = new Stopwatch();

/**
 * EventMapper function is used to manage the stopwatch and analytics based on the event.
 * If the event exists and the stopwatch is running, it stops the stopwatch, records the time,
 * and if the time is greater than or equal to 1, it calls the manageAnalytics function.
 * If the event does not exist, it logs an error message.
 *
 * @export
 * @param {Object} event - The event object.
 * @param {string} id - The id of the asset.
 * @throws Will throw an error if the function is called without an event.
 */
export function EventMapper(event, id) {
  if (event) {
    if (stopwatch.isRunning) {
      let time = stopwatch.stop();
      stopwatch = new Stopwatch();
      if (time >= 1) {
        manageAnalytics(time, id);
      }
    }
    stopwatch.start();
  } else {
    console.error('Function is called in a different place');
  }
}

/**
 * Manages the analytics of a product by fetching the active time from the server and updating it in the database.
 * Starts a stopwatch if the provided time is greater than 1.
 * Fetches the active time of the product from the server and adds the provided time to it.
 * Updates the active time of the product in the database.
 * Logs errors if they occur during fetching or updating data.
 *
 * @param {number} time - The time to be added to the active time of the product.
 * @param {string} id - The ID of the product.
 */
function manageAnalytics(time, id) {
  if (time > 1) {
    stopwatch.start();
    document.getElementById('elapsedTime').innerText = time + ' seconds';
    console.log('Timer starts', time);

    // Fetch data from /web-analytics/:id
    fetch(`http://localhost:3000/web-analytics/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ time }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }
}

/**
 * Stopwatch constructor function.
 */
function Stopwatch() {
  let startTime,
    endTime,
    elapsed = 0,
    isPaused = false,
    laps = [];
  this.isRunning = false;

  /**
   * Start the stopwatch.
   */
  this.start = function () {
    if (!this.isRunning) {
      if (isPaused) {
        startTime = new Date() - elapsed;
        isPaused = false;
      } else {
        startTime = new Date();
      }
      this.isRunning = true;
    }
  };

  /**
   * Stop the stopwatch and return the elapsed time.
   * @returns {number} The elapsed time in seconds.
   */
  this.stop = function () {
    if (this.isRunning) {
      if (!isPaused) {
        endTime = new Date();
        elapsed = endTime - startTime;
      }
      this.isRunning = false;
      return this.getTime();
    }
  };

  /**
   * Pause the stopwatch.
   */
  this.pause = function () {
    if (!isPaused) {
      endTime = new Date();
      elapsed = endTime - startTime;
      isPaused = true;
    }
  };

  /**
   * Get the elapsed time.
   * @returns {number} The elapsed time in seconds.
   */
  this.getTime = function () {
    let time = isPaused ? elapsed : new Date() - startTime;
    let seconds = Math.floor(((time % 3600000) % 60000) / 1000);
    return seconds;
  };

  /**
   * Reset the stopwatch.
   */
  this.reset = function () {
    startTime = null;
    endTime = null;
    elapsed = 0;
    isPaused = false;
  };

  /**
   * Display the elapsed time and lap times.
   */
  this.displayTime = function () {
    let time = this.getTime();
    document.getElementById('elapsedTime').innerText = time;

    let lapTimes = this.getLaps();
    let lapTimesElement = document.getElementById('lapTimes');
    lapTimesElement.innerText = lapTimes.join('\n');
  };

  /**
   * Record a lap time.
   * @returns {number} The lap time in seconds.
   */
  this.lap = function () {
    let lapTime = this.getTime();
    laps.push(lapTime);
    return lapTime;
  };

  /**
   * Get the recorded lap times.
   * @returns {Array} An array of lap times in seconds.
   */
  this.getLaps = function () {
    return laps;
  };
}
