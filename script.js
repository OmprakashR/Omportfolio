
//current week display
function displayCurrentDay() {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDate = new Date();
    const dayName = daysOfWeek[currentDate.getDay()];
    document.getElementById("weekday").textContent = dayName;
}

displayCurrentDay();
//countapi
 fetch('https://api.countapi.xyz/update/omrahangdale.in/visits/?amount=1')
      .then(res => res.json())
      .then(data => {
        document.getElementById('visitor-count').innerText = data.value;
      })
      .catch(err => {
        console.error('Visitor counter error:', err);
        document.getElementById('visitor-count').innerText = 'Error';
      });
