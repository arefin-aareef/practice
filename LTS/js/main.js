const year = document.getElementById("year") //variable
const thisYear = new Date().getFullYear() //variable
year.setAttribute("datetime", thisYear)
year.textContent = thisYear //displaying on page
