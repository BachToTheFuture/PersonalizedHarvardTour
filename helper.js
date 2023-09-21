
function preferenceForm(userPref, userVisited) {
  // Update preference form
  $("#entrance-form").empty();
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

function createFactCard(type, text) {
  const test = `
  <div class="col">
    <div class="card shadow-sm">
      <div class="card-header">
        <b>${type}</b>
      </div>
      <div class="card-body">
        <p class="card-text">${text}</p>
      </div>
    </div>
  </div>
  `;
  return test;
}

function createDestCard(from, dest) {
  return `
  <div class="col">
    <div class="card shadow-sm">
      <img class="card-img-top"
        src="${data[dest].image}">
      <div class="card-body">

        <div class="d-flex justify-content-between align-items-center">
          <p class="stop card-text">${data[dest].title}</p>
          <button data-from="${from}" data-dest="${dest}" type="button" class="directions btn btn-sm btn-outline-primary">Directions</button>
        </div>
      </div>
    </div>
  </div>
  `
}

function createCheckbox(category) {
  return `<div class="form-check">
      <input class="cat-check form-check-input" type="checkbox" value="" id="${category}">
      <label class="form-check-label" for="${category}">
        ${category}
      </label>
    </div>`;
}

// Populate cards based on user preference
function createCards(dest, pref, visited) {
  // Check if pref is empty:
  if (pref.length == 0) {
    pref = categories;
  }

  // Reset everything
  const factsheet = $("#facts");
  factsheet.empty();
  const destinations = $("#destinations");
  destinations.empty();
  const alreadyVisited = $("#visited");
  alreadyVisited.empty();

  for (category of pref) {
    let fact = createFactCard(category, data[dest].facts[category]);
    factsheet.append(fact);
  }
  for (next of data[dest].closest) {
    // Only show non visited locations
    let stop = createDestCard(dest, next);
    if (visited.indexOf(next) == -1) {
      destinations.append(stop);
    }
    else {
      alreadyVisited.append(stop);
    }
  }
}

function updatePage(dest, pref, visited) {
  const dat = data[dest];
  $('#hero-img').attr('src', dat.image);
  $('#title').text(dat.title);
  $('#desc').text(dat.desc);

  createCards(dest, pref, visited);

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
}

function createMap(from, dest) {
  return `
  <iframe src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d2947.5196777009705!2d-71.11938308820916!3d42.37407468409583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!${from}!4m5!${dest}!5e0!3m2!1sen!2sus!4v1695241431596!5m2!1sen!2sus" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  `;
}