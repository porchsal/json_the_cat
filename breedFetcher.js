const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  const url = 'https://api.thecatapi.com/v1/breeds/search?q=' + breedName;
  request(url ,(err, response, body) => {
    //console.log(typeof body);
    const data = JSON.parse(body);
    if (data.length === 0) {
      callback('Breed not Found', null);
    } else if (err) {
      callback(err, null);
      //return;
    }
    callback(null, data[0].description);
  });
};

module.exports = {fetchBreedDescription};