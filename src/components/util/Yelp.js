//import React from 'react';

const apiKey = [add api key here];

export const Yelp = {
  search(term,location,sortBy){
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
      headers: {
        Authorization: `Bearer ${apiKey}`
      }
    }).then(response =>{
      return response.json();
    }).then(jsonResponse => {
      if(jsonResponse.businesses){
         //console.log(jsonResponse);
         return jsonResponse.businesses.map(business=>{
          //console.log(business);
          const gMaps = 'https://www.google.com/maps/search/?api=1';
          const gMapsUrl = (business) =>{
            const gAddress = business["location"]["address1"].split(" ").join("+");
            const gCity = business["location"]["city"];
            const gState = business["location"]["state"]
            return `${gMaps}&query=${gAddress}+${gCity}%2C${gState}`;
          };
          return {
            id: business['id'],
            imgSrc: business["image_url"],
            name: business["name"],
            address: business["location"]["address1"],
            city: business["location"]["city"],
            state: business["location"]["state"],
            zipCode: business["location"]["zip_code"],
            category: business["categories"][0]["title"],
            rating: business["rating"],
            reviewCount: business["review_count"],
            url: business['url'],
            gMapsUrl: gMapsUrl(business)
          };
        });
      //  throw new Error('Not working');
      }
    });
  }
};
