
// Get params
const urlParams = new URLSearchParams(window.location.search);
const dest = urlParams.get('dest');
const key = 'hpt-pref';
let userPref = [];

// Check if the user has been here before:
$(document).ready(function () {
  if (localStorage.getItem(key)) {
    userPref = JSON.parse(localStorage.getItem(key));
  }
  else {
    // Update preference form
    for (cat of categories) {
      $("#entrance-form").append(createCheckbox(cat));
    }

    // Show entrance form
    $('.modal').modal('show');

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
      localStorage.setItem(key, JSON.stringify(pref));
      userPref = pref;
      updatePage(dest, userPref);
      $('.modal').modal('hide');
    });
  }

  // Check if this is a valid link
  if (dest && data[dest]) {
    updatePage(dest, userPref);
  }
});