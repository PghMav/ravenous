{
  "total": 8228,
  "businesses": [
    {
      "rating": 4,
      "price": "$",
      "phone": "+14152520800",
      "id": "E8RJkjfdcwgtyoPMjQ_Olg",
      "alias": "four-barrel-coffee-san-francisco",
      "is_closed": false,
      "categories": [
        {
          "alias": "coffee",
          "title": "Coffee & Tea"
        }
      ],
      "review_count": 1738,
      "name": "Four Barrel Coffee",
      "url": "https://www.yelp.com/biz/four-barrel-coffee-san-francisco",
      "coordinates": {
        "latitude": 37.7670169511878,
        "longitude": -122.42184275
      },
      "image_url": "http://s3-media2.fl.yelpcdn.com/bphoto/MmgtASP3l_t4tPCL1iAsCg/o.jpg",
      "location": {
        "city": "San Francisco",
        "country": "US",
        "address2": "",
        "address3": "",
        "state": "CA",
        "address1": "375 Valencia St",
        "zip_code": "94103"
      },
      "distance": 1604.23,
      "transactions": ["pickup", "delivery"]
    },
    // ...
  ],
  "region": {
    "center": {
      "latitude": 37.767413217936834,
      "longitude": -122.42820739746094
    }
  }
}



console.log( {
  id: business['id'],
  imgSrc: business["image_url"],
  name: business["name"],
  address: business["location"]["address1"],
  city: business["location"]["city"],
  state: business["location"]["state"],
  zipcode: business["location"]["zip_code"],
  category: business["categories"][0]["title"],
  rating: business["rating"],
  reviewCount: business["review_count"]
});

// SearchBar.js Backup
return {
  id: business['id'],
  imgSrc: business["image_url"],
  name: business["name"],
  address: business["location"]["address1"],
  city: business["location"]["city"],
  state: business["location"]["state"],
  zipcode: business["location"]["zip_code"],
  category: business["categories"][0]["title"],
  rating: business["rating"],
  reviewCount: business["review_count"]
};


import React from 'react';
import './SearchBar.css';


class SearchBar extends React.Component{
    constructor(props){
    super(props);
    this.state = {
      term: '',
      location: '',
      sortBy: 'best_match'
    };

    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);

    this.sortByOptions = {
      'Best Match': 'best_match',
      'Highest Rated': 'rating',
      'Most Reviewed': 'review_count'
    }
  }

getSortByClass(sortByOption){
  if(this.state["sortBy"] === sortByOption){
    return 'active';
  }else{
    return '';
  };

}

handleSortByChange(sortByOption){
  this.setState({
    sortBy : sortByOption
  });

}

handleTermChange(event){
  this.setState({
    term: event.target.value
  })
}

handleLocationChange(event){
  this.setState({
    location: event.target.value
  })

}

handleSearch(event){
  this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
  event.preventDefault();
}

renderSortByOptions() {
  return Object.keys(this.sortByOptions).map(sortByOption => {
      const sortByOptionValue = this.sortByOptions[sortByOption];
      return <li
      key={sortByOptionValue}
      className={this.getSortByClass(sortByOptionValue)}
      onClick={this.handleSortByChange.bind(this, sortByOptionValue)}> {sortByOption} </li>;
  });
}

  render(){
      return (
        <div className="SearchBar">
        <div className="SearchBar-sort-options">
          <ul>
            {this.renderSortByOptions()}
          </ul>
        </div>
        <div className="SearchBar-fields">
          <input placeholder="Search Businesses" onChange={this.handleTermChange} />
          <input placeholder="Where?" onChange={this.handleLocationChange}/>
        </div>
        <div className="SearchBar-submit"  onClick={this.handleSearch}>
          <a>Let's Go</a>
        </div>
      </div>
    );
  }
}

export default SearchBar;
