
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
    let stop = createDestCard(dest, next);
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

function createMap(from, dest) {
  return `
  <iframe src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d1716.511140988909!2d-71.11797861404227!3d42.37505762885719!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x89e3774305f6eb89%3A0xa46fba92be1e842b!${from}!3m2!1d42.3744665!2d-71.1172096!4m5!1s0x89e3774400b9ec13%3A0xd71cb81da7859c24!${dest}!3m2!1d42.3759109!2d-71.1148758!5e0!3m2!1sen!2sus!4v1695239062534!5m2!1sen!2sus" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  `;
}