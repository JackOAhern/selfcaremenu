
let data = {
  monday: {
      todos: ["Breakfast","Push-Day Workout","Post-Workout Shake","Shower & Lunch","Data Science Class","Writing Homework", "Stretch for 10 min"],
      image: "/images/mondaydog.jpg",
      dateinfo: {
        dayoweek: "monday",
        date: "11/01/2021",
        time: "9:30",
        temp: "57°",
        weather: "cloudy"
      }
  },
  tuesday: {
        todos: ["Breakfast","Shower","Writing Class","Design Class", "Pull-Day Workout", "Post-Workout Shake","Coding Homework","Stretch for 5 min"],
        image: "/images/tuesdaydog.jpg",
        dateinfo: {
            dayoweek: "tuesday",
            date: "11/02/2021",
            time: "9:30",
            temp: "48°",
            weather: "partly sunny"
        }
  },
  wednesday: {
        todos: ["Breakfast","Leg-Day Workout","Post-Workout Shake","Shower & Lunch","Data Science Class","Writing Homework", "Design Homework","Stretch for 10min"],
        image: "/images/wednesdaydog.jpg",
        dateinfo: {
            dayoweek: "wednesday",
            date: "11/03/2021",
            time: "9:30",
            temp: "52°",
            weather: "cloudy"
        }
  },
  thursday: {
        todos: ["Breakfast","Shower","Writing Class","Design Class", "Push-Day Workout", "Post-Workout Shake","Coding Homework","Stretch for 5 min"],
        image: "/images/thursdaydog.jpg",
        dateinfo: {
            dayoweek: "Thursday",
            date: "11/04/2021",
            time: "9:30",
            temp: "54°",
            weather: "cloudy"
        }
  },
  friday: {
        todos: ["Breakfast","Shower & Lunch","Data Science Class","Pull-Day Workout","Post-Workout Shake", "Dinner with Friends"],
        image: "/images/fridaydog.jpg",
        dateinfo: {
            dayoweek: "Friday",
            date: "11/05/2021",
            time: "9:30",
            temp: "62°",
            weather: "sunny"
        }
  },
  saturday: {
        todos: ["Breakfast","Skiing @ArapahoeBasin", "Shower & Dinner","Hanging with friends", "Stretch for 10min"],
        image: "/images/saturdaydog.jpg",
        dateinfo: {
            dayoweek: "Saturday",
            date: "11/06/2021",
            time: "9:30",
            temp: "65°",
            weather: "sunny"
        }
  },
  sunday: {
        todos: ["Breakfast","Rest day","NFL Redzone","Lunch","Homework", "Prepare for upcoming week"],
        image: "/images/sundaydog.jpg",
        dateinfo: {
            dayoweek: "Sunday",
            date: "11/07/2021",
            time: "9:30",
            temp: "51°",
            weather: "Rainy",
        }
  }
};

// Monday Button
document.getElementById("monday").addEventListener("click", function infoChange(event){

    document.getElementById("day-o-week").innerHTML = data.monday.dateinfo.dayoweek;
    document.getElementById("current-date").innerHTML =
      data.monday.dateinfo.date;
    document.getElementById("time").innerHTML = data.monday.dateinfo.time;
    document.getElementById("temp").innerHTML = data.monday.dateinfo.temp;
    document.getElementById("weather").innerHTML = data.monday.dateinfo.weather;
    document.getElementById("image").src = data.monday.image;
    document.getElementById("list").innerHTML = "";

      for (let i of data.monday.todos){
          let li = document.createElement("li");
          li.innerHTML = i;
          document.getElementById("list").appendChild(li);
          let buttonsChildren = document.getElementById("buttons").children;
          for (let i = 0; i < buttonsChildren.length; i++) {
              let button = buttonsChildren.item(i);
              if (button.classList.contains("active") && event.target != button){
                  button.classList.remove("active");
              }
              event.target.classList.add("active");
          }
      }
});


// Tuesday Button
document.getElementById("tuesday").addEventListener("click", function infoChange(event) {

    document.getElementById("day-o-week").innerHTML = data.tuesday.dateinfo.dayoweek;
    document.getElementById("current-date").innerHTML =
      data.tuesday.dateinfo.date;
    document.getElementById("time").innerHTML = data.tuesday.dateinfo.time;
    document.getElementById("temp").innerHTML = data.tuesday.dateinfo.temp;
    document.getElementById("weather").innerHTML = data.tuesday.dateinfo.weather;
    document.getElementById("image").src = data.tuesday.image;
    document.getElementById("list").innerHTML = "";

    for (let i of data.tuesday.todos){
        let li = document.createElement("li");
        li.innerHTML = i;
        document.getElementById("list").appendChild(li);
        let buttonsChildren = document.getElementById("buttons").children;
        for (let i = 0; i < buttonsChildren.length; i++) {
            let button = buttonsChildren.item(i);
            if (button.classList.contains("active") && event.target != button){
                button.classList.remove("active");
            }
            event.target.classList.add("active");
        }
      }
});


// Wednesday Button
document.getElementById("wednesday").addEventListener("click", function infoChange(event){

    document.getElementById("day-o-week").innerHTML = data.wednesday.dateinfo.dayoweek;
    document.getElementById("current-date").innerHTML =
      data.wednesday.dateinfo.date;
    document.getElementById("time").innerHTML = data.wednesday.dateinfo.time;
    document.getElementById("temp").innerHTML = data.wednesday.dateinfo.temp;
    document.getElementById("weather").innerHTML = data.wednesday.dateinfo.weather;
    document.getElementById("image").src = data.wednesday.image;
    document.getElementById("list").innerHTML = "";

    for (let i of data.wednesday.todos){
        let li = document.createElement("li");
        li.innerHTML = i;
        document.getElementById("list").appendChild(li);
        let buttonsChildren = document.getElementById("buttons").children;
        for (let i = 0; i < buttonsChildren.length; i++) {
            let button = buttonsChildren.item(i);
            if (button.classList.contains("active") && event.target != button){
                button.classList.remove("active");
            }
            event.target.classList.add("active");
        }
    }
});


// Thursday Button
document.getElementById("thursday").addEventListener("click", function infoChange(event){

    document.getElementById("day-o-week").innerHTML = data.thursday.dateinfo.dayoweek;
    document.getElementById("current-date").innerHTML =
      data.wednesday.dateinfo.date;
    document.getElementById("time").innerHTML = data.thursday.dateinfo.time;
    document.getElementById("temp").innerHTML = data.thursday.dateinfo.temp;
    document.getElementById("weather").innerHTML = data.thursday.dateinfo.weather;
    document.getElementById("image").src = data.thursday.image;
    document.getElementById("list").innerHTML = "";

    for (let i of data.thursday.todos){
        let li = document.createElement("li");
        li.innerHTML = i;
        document.getElementById("list").appendChild(li);
        let buttonsChildren = document.getElementById("buttons").children;
        for (let i = 0; i < buttonsChildren.length; i++) {
            let button = buttonsChildren.item(i);
            if (button.classList.contains("active") && event.target != button){
                button.classList.remove("active");
            }
            event.target.classList.add("active");
        }
    }
});


// Friday Button
document.getElementById("friday").addEventListener("click", function infoChange(event){

    document.getElementById("day-o-week").innerHTML = data.friday.dateinfo.dayoweek;
    document.getElementById("current-date").innerHTML =
      data.wednesday.dateinfo.date;
    document.getElementById("time").innerHTML = data.friday.dateinfo.time;
    document.getElementById("temp").innerHTML = data.friday.dateinfo.temp;
    document.getElementById("weather").innerHTML = data.friday.dateinfo.weather;
    document.getElementById("image").src = data.friday.image;
    document.getElementById("list").innerHTML = "";

    for (let i of data.friday.todos){
        let li = document.createElement("li");
        li.innerHTML = i;
        document.getElementById("list").appendChild(li);
        let buttonsChildren = document.getElementById("buttons").children;
        for (let i = 0; i < buttonsChildren.length; i++) {
            let button = buttonsChildren.item(i);
            if (button.classList.contains("active") && event.target != button){
                button.classList.remove("active");
            }
            event.target.classList.add("active");
        }
    }
});


// Saturday Button
document.getElementById("saturday").addEventListener("click", function infoChange(event){

    document.getElementById("day-o-week").innerHTML = data.saturday.dateinfo.dayoweek;
    document.getElementById("current-date").innerHTML =
      data.wednesday.dateinfo.date;
    document.getElementById("time").innerHTML = data.saturday.dateinfo.time;
    document.getElementById("temp").innerHTML = data.saturday.dateinfo.temp;
    document.getElementById("weather").innerHTML = data.saturday.dateinfo.weather;
    document.getElementById("image").src = data.saturday.image;
    document.getElementById("list").innerHTML = "";

    for (let i of data.saturday.todos){
        let li = document.createElement("li");
        li.innerHTML = i;
        document.getElementById("list").appendChild(li);
        let buttonsChildren = document.getElementById("buttons").children;
        for (let i = 0; i < buttonsChildren.length; i++) {
            let button = buttonsChildren.item(i);
            if (button.classList.contains("active") && event.target != button){
                button.classList.remove("active");
            }
            event.target.classList.add("active");
        }
    }
});


// Sunday Button
document.getElementById("sunday").addEventListener("click", function infoChange(event){

    document.getElementById("day-o-week").innerHTML = data.sunday.dateinfo.dayoweek;
    document.getElementById("current-date").innerHTML =
      data.wednesday.dateinfo.date;
    document.getElementById("time").innerHTML = data.sunday.dateinfo.time;
    document.getElementById("temp").innerHTML = data.sunday.dateinfo.temp;
    document.getElementById("weather").innerHTML = data.sunday.dateinfo.weather;
    document.getElementById("image").src = data.sunday.image;
    document.getElementById("list").innerHTML = "";

    for (let i of data.sunday.todos){
        let li = document.createElement("li");
        li.innerHTML = i;
        document.getElementById("list").appendChild(li);
    }
    let buttonsChildren = document.getElementById("buttons").children;
    for (let i = 0; i < buttonsChildren.length; i++) {
        let button = buttonsChildren.item(i);
        if (button.classList.contains("active") && event.target != button){
            button.classList.remove("active");
        }
        event.target.classList.add("active");
    }

});
