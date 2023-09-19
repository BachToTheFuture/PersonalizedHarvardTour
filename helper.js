
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

function createDestCard(dest) {
  return `
  <div class="col">
    <div class="card shadow-sm">
      <img class="card-img-top"
        src="${data[dest].image}">
      <div class="card-body">

        <div class="d-flex justify-content-between align-items-center">
          <p class="stop card-text">${data[dest].title}</p>
          <button type="button" class="btn btn-sm btn-outline-primary">Directions</button>
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
function createCards(dest, pref) {
  // Reset everything
  const factsheet = $("#facts");
  factsheet.empty();
  const destinations = $("#destinations");
  destinations.empty();

  for (category of pref) {
    let fact = createFactCard(category, data[dest].facts[category]);
    factsheet.append(fact);
  }
  for (next of data[dest].closest) {
    let stop = createDestCard(next);
    destinations.append(stop);
  }
}

function updatePage(dest, pref) {
  const dat = data[dest];
  $('#hero-img').attr('src', dat.image);
  $('#title').text(dat.title);
  $('#desc').text(dat.desc);

  createCards(dest, pref)
}