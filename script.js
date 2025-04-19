
//current week display
function displayCurrentDay() {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDate = new Date();
    const dayName = daysOfWeek[currentDate.getDay()];
    document.getElementById("weekday").textContent = dayName;
}

displayCurrentDay();