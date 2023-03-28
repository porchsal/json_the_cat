'use strict';
const request = require('request');

const breed = process.argv[2];
const url = 'https://api.thecatapi.com/v1/breeds/search?q=' + breed;
request(url ,(err, response, body) => {
  //console.log(typeof body);
  const data = JSON.parse(body);
  if (data.length === 0) {
    console.log('Breed not found');
    return;
  } else if (err) {
    console.log("error");
    return;
  }
   
  console.log(data);
  console.log(typeof data);

});
