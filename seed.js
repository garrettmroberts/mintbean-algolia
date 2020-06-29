const algoliasearch = require('algoliasearch');

const client = algoliasearch('FARP9RXLRO', 'd3800011b55781a6a516aac707f1f601');
const index = client.initIndex('pokedex');

fetch('https://pokeapi.co/api/v2/pokemon')
  .then(response => {
    return (response.json());
  })
  .then(pokemon => {
    console.log(pokemon)
    return index.saveObjects(pokemon, {
      autoGenerateObjectIDIfNotExist: true
    });

  });