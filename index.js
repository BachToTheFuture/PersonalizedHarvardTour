
// Get params
const urlParams = new URLSearchParams(window.location.search);
const dest = urlParams.get('dest');
const key = 'hpt-pref';

// Check if the user has been here before:
$(document).ready(function () {
  let userPref = [];
  let userVisited = [];

  if (localStorage.getItem(key)) {
    let data = JSON.parse(localStorage.getItem(key));
    userPref = data.pref || [];
    userVisited = data.visited || [];
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
      localStorage.setItem(key, JSON.stringify({
        pref: userPref,
        visited: userVisited
      }));
      userPref = pref;
      updatePage(dest, userPref, userVisited);
      $('#form').modal('hide');
    });
    
    $('#close-form').click(() => {
      // Show everything if the user does not click on anything.
      userPref = categories;
    });
  }

  // Check if this is a valid link
  if (dest && data[dest]) {
    // Add to visited
    userVisited.push(dest);
    localStorage.setItem(key, JSON.stringify({
      pref: userPref,
      visited: userVisited
    }));
    updatePage(dest, userPref, userVisited);
  }

  // When directions are clicked
  $('.directions').click(function () {
    var from = $(this).data('from');
    var to = $(this).data('dest');

    if (data[from]) {
      from = data[from].gmap_id;
    }
    if (data[to]) {
      to = data[to].gmap_id;
    }
    console.log(from, to);
    const map = createMap(from, to);

    $('#map-embed').empty();
    $('#map-embed').append(map);
    $('#map').modal('show');
  });

});