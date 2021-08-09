// To Top Button Behavior
$(window).scroll(() => {
  $(".top-of-site-link").attr("data-visible", ($(window).scrollTop() > 100) ? true : false);
});

//Generate Data
$.getJSON("content.json", (sections) => {
  $.each(sections, (index, section) => {
    console.log(`Generating "${section.heading}" Section...`);
    $(".album-section").append(generateSection(section));
  });
});

// Re-usable Method Scrips
function generateCard(card) {
  return `<div class="col d-flex align-items-stretch">
    <div class="card shadow-sm">
      <a href="${card.link}" class="card-sites" target="_blank">
        <img class="site-thumbnail" src="images/${card.img}" alt="${card.img}-thumbnail">
        <div class="card-body">
          <h5 class="card-title">${card.title}</h5>
          <p class="card-text">${card.desc}</p>
        </div>
      </a>
    </div>
  </div>`;
}

function generateSection(section) {
  let cardList = ``;
  $.each(section.sites, (index, card) => {
    cardList += generateCard(card);
  });

  let heading = '';
  if (section.link) {
    heading = `<a href="${section.link}" title="${section.tooltip}">${section.heading}</a>`
  } else {
    heading = section.heading;
  }
  return `
  <div class="album py-4 bg-light">
    <h3 class="section-heading">${heading}</h3>
    <div class="container">
      <div class="row row-cols-lg-3 row-cols-md-2 row-cols-2 g-3 justify-content-md-center">
        <!-- Here Dynamic Data Should Come -->
        ${cardList}
      </div>
    </div>
  </div>`;
}
