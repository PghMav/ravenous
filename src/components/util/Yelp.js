//import React from 'react';

const apiKey = 'DkXnlClRjXns0GdN0ksAUt9JN-FtD1HYCKnx3EoXI5HXJyZVjTEq86sUxhmtwuNXlv3LyiNJ6H0DPImaSZMhFPRIq5Ljj-8TPZQ7i4eBn1M-_94zj0FPcVeOAtkdXXYx';

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
            reviewCount: business["review_count"]
          };
        });
      //  throw new Error('Not working');
      }
    });
  }
};
