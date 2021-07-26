import { injectPie } from "./PieGraph.js";
import { injectBar } from "./BarGraph.js";
// --------------------------------------------------------
const getDayName = (index) => {
    return [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ][index];
};
// --------------------------------------------------------
function getCountdown() {
    let now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth();
    let date = now.getDate();
    let hour = now.getHours();
    let currentTime = now.getTime();
    let countdownTime;
    let targetTime;
    if (hour < 12) {
        // fasting until 12noon (12h) today
        targetTime = new Date(year, month, date, 12).getTime();
    }
    else if (hour >= 20) {
        // fasting until 12noon (12h) tomorrow
        targetTime = new Date(year, month, date + 1, 12).getTime();
    }
    else {
        // fasting resumes 8pm (20h) tonight
        targetTime = new Date(year, month, date, 20).getTime();
    }
    countdownTime = targetTime - currentTime;
    // convert to hrs and minutes
    let cdHours = Math.floor((countdownTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let cdMinutes = Math.floor((countdownTime % (1000 * 60 * 60)) / (1000 * 60));
    // pad the minutes with a zero
    let cdMinutesStr = "00";
    if (cdMinutes < 10) {
        cdMinutesStr = cdMinutes.toString().padStart(2, "0");
    }
    else {
        cdMinutesStr = cdMinutes.toString();
    }
    let timeLeft = `${cdHours}:${cdMinutesStr}`;
    return timeLeft;
}
// --------------------------------------------------------
function setCountdown(remainingTime) {
    let centerTime = document.querySelector(".center-time");
    centerTime.innerText = remainingTime;
}
// --------------------------------------------------------
function setPieGraph() {
    // sets the dial with the appropriate display
    let today = new Date();
    let hour = today.getHours();
    let firstWatch = document.querySelector(".first-watch");
    let secondWatch = document.querySelector(".second-watch");
    let thirdWatch = document.querySelector(".third-watch");
    let fourthWatch = document.querySelector(".fourth-watch");
    let fifthWatch = document.querySelector(".fifth-watch");
    let sixthWatch = document.querySelector(".sixth-watch");
    let centerDisplay = document.querySelector(".center-display");
    // set the pie & center indicators red or green
    if (hour >= 20) {
        // console.log("1st Watch", hour);
        firstWatch.style.background = "red";
        secondWatch.style.background = "red";
        thirdWatch.style.background = "red";
        fourthWatch.style.background = "red";
        fifthWatch.style.background = "lightgrey";
        sixthWatch.style.background = "lightgrey";
        centerDisplay.style.background = "red";
    }
    else if (hour >= 0 && hour <= 3) {
        // console.log("2nd Watch", hour);
        firstWatch.style.background = "grey";
        secondWatch.style.background = "red";
        thirdWatch.style.background = "red";
        fourthWatch.style.background = "red";
        fifthWatch.style.background = "lightgrey";
        sixthWatch.style.background = "lightgrey";
        centerDisplay.style.background = "red";
    }
    else if (hour >= 4 && hour <= 7) {
        // console.log("3rd Watch", hour);
        firstWatch.style.background = "grey";
        secondWatch.style.background = "grey";
        thirdWatch.style.background = "red";
        fourthWatch.style.background = "red";
        fifthWatch.style.background = "lightgrey";
        sixthWatch.style.background = "lightgrey";
        centerDisplay.style.background = "red";
    }
    else if (hour >= 8 && hour <= 11) {
        // console.log("4th Watch", hour);
        firstWatch.style.background = "grey";
        secondWatch.style.background = "grey";
        thirdWatch.style.background = "grey";
        fourthWatch.style.background = "red";
        fifthWatch.style.background = "lightgrey";
        sixthWatch.style.background = "lightgrey";
        centerDisplay.style.background = "red";
    }
    else if (hour >= 12 && hour <= 15) {
        // console.log("5th Watch", hour);
        firstWatch.style.background = "grey";
        secondWatch.style.background = "grey";
        thirdWatch.style.background = "grey";
        fourthWatch.style.background = "grey";
        fifthWatch.style.background = "green";
        sixthWatch.style.background = "green";
        centerDisplay.style.background = "green";
    }
    else if (hour >= 16 && hour < 20) {
        // console.log("6th Watch", hour);
        firstWatch.style.background = "grey";
        secondWatch.style.background = "grey";
        thirdWatch.style.background = "grey";
        fourthWatch.style.background = "grey";
        fifthWatch.style.background = "lightgrey";
        sixthWatch.style.background = "green";
        centerDisplay.style.background = "green";
    }
}
// --------------------------------------------------------
function setBarGraphs() {
    let now = new Date();
    let DOW = getDayName(now.getDay());
    //sweets
    let sweetsIndicator = document.querySelector(".sweets-indicator");
    // I can have sweets Tue - Sun
    if (DOW != "Monday" && DOW != "Tuesday") {
        sweetsIndicator.style.background = "green";
    }
    else {
        sweetsIndicator.style.background = "red";
    }
    // walkies
    let walkIndicator = document.querySelector(".walk-indicator");
    // I shoud walk Mon - Fri
    if (DOW != "Saturday" && DOW != "Sunday") {
        walkIndicator.style.background = "green";
    }
    else {
        walkIndicator.style.background = "red";
    }
    // other
    let otherIndicator = document.querySelector(".other-indicator");
    // who knows!
    if (DOW === "Saturday" || DOW === "Sunday") {
        otherIndicator.style.background = "green";
    }
    else {
        otherIndicator.style.background = "red";
    }
}
// --------------------------------------------------------
function injectMarkup() {
    // inject markup
    injectPie();
    // these are inverted in the DOM because I'm dumb
    injectBar("other-wrapper", "other-text", "other-indicator", "Coffee");
    injectBar("walk-wrapper", "walk-text", "walk-indicator", "Walk");
    injectBar("sweets-wrapper", "sweets-text", "sweets-indicator", "Sweets");
}
// --------------------------------------------------------
function main() {
    console.log("Typescript Fast App");
    injectMarkup();
    setPieGraph();
    setBarGraphs();
    setCountdown(getCountdown());
    // run once every minute
    setInterval(() => {
        setPieGraph();
        setBarGraphs();
        setCountdown(getCountdown());
    }, 60000);
}
// --------------------------------------------------------
main();
