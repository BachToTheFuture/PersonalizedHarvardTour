
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
    console.log("PREF", userPref)

    if (localStorage.getItem(visitedKey))
      userVisited = JSON.parse(localStorage.getItem(visitedKey));

    // Check if this is a valid link
    if (dest && data[dest]) {
      // Add to visited
      userVisited.push(dest);
      localStorage.setItem(visitedKey, JSON.stringify(userVisited));
      updatePage(dest, userPref, userVisited);
    }
  }
  else {
    // Update preference form
    for (cat of categories) {
      $("#entrance-form").append(createCheckbox(cat));
    }

    // Show entrance form
    $('#form').modal('show');

    // This is when the user submits their preferences
    $('#submit-form').click(() => {
      // Collect user preferences
      let pref = [];
      $('.cat-check').each((_, cat) => {
        if ($(cat).is(':checked')) {
          pref.push(cat.id);
        }
      });
      // Store in browser
      userPref = pref;
      localStorage.setItem(prefKey, JSON.stringify(userPref));

      userVisited.push(dest);
      localStorage.setItem(visitedKey, JSON.stringify(userVisited));
      
      updatePage(dest, userPref, userVisited);
      $('#form').modal('hide');
    });

    $('#close-form').click(() => {
      // Show everything if the user does not click on anything.
      userPref = categories;
    });
  }
});