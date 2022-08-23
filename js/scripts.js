function hideResults() {
  document.getElementById("vinny").setAttribute("class", "hidden");
  document.getElementById("gaston").setAttribute("class", "hidden");
  document.getElementById("frollo").setAttribute("class", "hidden");
  document.getElementById("noMatch").setAttribute("class", "hidden");
}

window.onload = function() {
  document.querySelector("form").onsubmit = function(event) {
    event.preventDefault();
    hideResults();
    const month = (document.querySelector("input#month").value);
    const pet = (document.querySelector("input#pet").value);

    if (month === "April" && pet === "dogs"){
    document.getElementById("vinny").removeAttribute("class")
    }
    else if (month === "June" && pet === "cats") {
      document.getElementById("gaston").removeAttribute("class")
    }
    else if (month === "November" && pet === "cats") {
      document.getElementById("frollo").removeAttribute("class")
    }
    else {
    document.getElementById("noMatch").removeAttribute("class")
    }
  };
};