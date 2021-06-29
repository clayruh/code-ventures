async function fetchPodcastMetadata(num = 10){

  let response = await fetch(`https://feeder.prx.org/api/v1/podcasts?per=${num}`);
  let json = await response.json();

  return json['_embedded']['prx:items'];
}

function podcastTitle(podcast){
  return podcast['title'];
}
