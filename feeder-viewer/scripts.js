const FEEDER_URL = 'https://feeder.prx.org/api/v1/episodes';

function render(data) {
  const items = data._embedded['prx:items'];
  return items.map(item => renderItem(item)).join('');
}

function renderItem(item) {
  if (item.title) {
    return `<div><h2>${item.title}</h2></div>`;
  } else {
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
