const FEEDER_URL = 'https://feeder.prx.org/api/v1/episodes';

window.onload = () => {
  fetch(FEEDER_URL)
    .then(res => res.json())
    .then(data => {
      const items = data._embedded['prx:items'];

      document.getElementById('main').innerHTML = '';
      items.forEach(item => {
        const markup = `<div><h2>${item.title}</h2></div>`;
        document.getElementById('main').innerHTML += markup;
      });
    });
};
