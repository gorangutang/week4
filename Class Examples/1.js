// This code runs when the page loads
$(function() {

  // Write a function that yells (e.g. TACOS!!!!!)
  var yell = function(string) { return string.toUpperCase() + "!!!!!"
  }

  var theMostAwesomeFood = "tacos"

  window.alert(yell(theMostAwesomeFood))
})
