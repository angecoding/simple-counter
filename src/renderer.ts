/**
 * This file will automatically be loaded by webpack and run in the "renderer" context.
 * To learn more about the differences between the "main" and the "renderer" context in
 * Electron, visit:
 *
 * https://electronjs.org/docs/latest/tutorial/process-model
 *
 * By default, Node.js integration in this file is disabled. When enabling Node.js integration
 * in a renderer process, please be aware of potential security implications. You can read
 * more about security risks here:
 *
 * https://electronjs.org/docs/tutorial/security
 *
 * To enable Node.js integration in this file, open up `main.js` and enable the `nodeIntegration`
 * flag:
 *
 * ```
 *  // Create the browser window.
 *  mainWindow = new BrowserWindow({
 *    width: 800,
 *    height: 600,
 *    webPreferences: {
 *      nodeIntegration: true
 *    }
 *  });
 * ```
 */

import './index.css';

console.log('👋 This message is being logged by "renderer.js", included via webpack');

// Buttons

const decreaseBtn: HTMLElement = document.getElementById("decreaseBtn");
const increaseBtn: HTMLElement = document.getElementById("increaseBtn");
const resetBtn: HTMLElement = document.getElementById("resetBtn");

// Setting up the counter

let counter: number = 0;
const counterNum: HTMLElement = document.getElementById("counterNum");


// Check if the user is pressing one of the buttons
// When the user press the increase button, we need to increase the counter

increaseBtn.addEventListener("click", (e) => {

    counter++;
    counterNum.textContent = String(counter);
    
    if (counter > 0) counterNum.style.color = "green"
    if (counter == 0) counterNum.style.color = "#fff"

})

// When the user press the decrease button, we need to decrease the counter

decreaseBtn.addEventListener("click", (e) => {

    counter--;
    counterNum.textContent = String(counter);

    if (counter < 0) counterNum.style.color = "red"
    if (counter == 0) counterNum.style.color = "#fff"

})

resetBtn.addEventListener("click", (e) => {

    counter = 0;
    counterNum.textContent = String(counter);

    if (counter == 0) counterNum.style.color = "#fff"

})