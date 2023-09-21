
// Get params
const urlParams = new URLSearchParams(window.location.search);
const dest = urlParams.get('dest');
const prefKey = 'hpt-pref';
const visitedKey = 'hpt-visited';

// Check if the user has been here before:
$(document).ready(function () {
  let userPref = [];
  let userVisited = [];

  if (localStorage.getItem(prefKey)) {
    userPref = JSON.parse(localStorage.getItem(prefKey));

    // Get visited destinations too
    if (localStorage.getItem(visitedKey))
      userVisited = JSON.parse(localStorage.getItem(visitedKey));

    // Reset if there are problems
    if (!Array.isArray(userPref) || !Array.isArray(userVisited)) {
      userVisited = [];
      preferenceForm(userPref, userVisited);
    }

    // Check if this is a valid link
    if (dest && data[dest]) {
      // Add to visited
      userVisited.push(dest);
      localStorage.setItem(visitedKey, JSON.stringify(userVisited));
      updatePage(dest, userPref, userVisited);
    }
  }
  else {
    preferenceForm(userPref, userVisited);
  }

  // If the user wants to change preference
  $('#change-pref').click(function () {
    preferenceForm(userPref, userVisited);
  });
});