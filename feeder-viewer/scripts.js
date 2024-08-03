const FEEDER_URL = 'https://feeder.prx.org/api/v1/episodes';

function render(data) {
  const items = data._embedded['prx:items'];
  return items.map(item => renderItem(item)).join('');
}
// having issues calling the itunes image.. if I go to api/v1/podcasts endpoint, then I can see the itunes image URLs
function renderItem(item) {
  if (item.title && item.description) {
    return `<div class="episode-block">
        <h2>${item.title}</h2>
        <audio controls>
          <source src=${item._links.enclosure.href}>
        </audio>
        <p>${item.description}</p>
        <a href=${item.url} target="_blank">Listen to the full episode</a>
      </div>`;
  } if (item.title && !item.description) {
    return `<div class="episode-block">
        <h2>${item.title}</h2>
        <audio controls>
          <source src=${item._links.enclosure.href}>
        </audio>
        <a href=${item.url} target="_blank">Listen to the full episode</a>
      </div>`;
  } {
    return `<div><h2>(Untitled)</h2></div>`;
  }
}

// browser only
if (typeof window !== 'undefined') {
  window.onload = () => {
    fetch(FEEDER_URL)
      .then(res => res.json())
      .then(data => {
        const html = render(data);
        document.getElementById('main').innerHTML = html;
      });
  };
}

// tests only
if (typeof exports !== 'undefined') {
  exports.render = render;
  exports.renderItem = renderItem;
}
