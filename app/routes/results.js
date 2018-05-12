import Route from '@ember/routing/route';
import $ from 'jquery';
import RSVP from 'rsvp';

export default Route.extend({
  model() {
    return new Promise((resolve, reject) => {

      let backup = {
        "count": 30,
        "recipes": [{
            "publisher": "Closet Cooking",
            "f2f_url": "http://food2fork.com/view/35171",
            "title": "Buffalo Chicken Grilled Cheese Sandwich",
            "source_url": "http://www.closetcooking.com/2011/08/buffalo-chicken-grilled-cheese-sandwich.html",
            "recipe_id": "35171",
            "image_url": "http://static.food2fork.com/Buffalo2BChicken2BGrilled2BCheese2BSandwich2B5002B4983f2702fe4.jpg",
            "social_rank": 100,
            "publisher_url": "http://closetcooking.com"
          },
          {
            "publisher": "All Recipes",
            "f2f_url": "http://food2fork.com/view/29159",
            "title": "Slow Cooker Chicken Tortilla Soup",
            "source_url": "http://allrecipes.com/Recipe/Slow-Cooker-Chicken-Tortilla-Soup/Detail.aspx",
            "recipe_id": "29159",
            "image_url": "http://static.food2fork.com/19321150c4.jpg",
            "social_rank": 100,
            "publisher_url": "http://allrecipes.com"
          }, {
            "publisher": "My Baking Addiction",
            "f2f_url": "http://food2fork.com/view/e7fdb2",
            "title": "Mac and Cheese with Roasted Chicken, Goat Cheese, and Rosemary",
            "source_url": "http://www.mybakingaddiction.com/mac-and-cheese-roasted-chicken-and-goat-cheese/",
            "recipe_id": "e7fdb2",
            "image_url": "http://static.food2fork.com/MacandCheese1122b.jpg",
            "social_rank": 100,
            "publisher_url": "http://www.mybakingaddiction.com"
          },
          {
            "publisher": "The Pioneer Woman",
            "f2f_url": "http://food2fork.com/view/47187",
            "title": "White Chicken Enchiladas",
            "source_url": "http://thepioneerwoman.com/cooking/2009/11/white-chicken-enchiladas/",
            "recipe_id": "47187",
            "image_url": "http://static.food2fork.com/4060528829_67db52b435ebe3.jpg",
            "social_rank": 99.99999999999997,
            "publisher_url": "http://thepioneerwoman.com"
          }
        ]
      };

      let ingredient = localStorage.getItem("myIngredients");
      $.ajax({
        // url: 'https://jsonplaceholder.typicode.com/posts',
        url: 'http://cors-proxy.htmldriven.com/?url=http://food2fork.com/api/search?key=850bee0b4ba0e19db10886b1d1199a68&q=' + ingredient +'&format=json',
        method: 'GET',
        dataType: 'json',
        contentType: 'application/json',
        data: {
          format: 'json'
        },
        // beforeSend:  function(xhr) {
        //     xhr.setRequestHeader(headerName, headerValue);
        // },
        success: function(data) {
          console.log(JSON.stringify(data));
          resolve(data); //return usr;
        },
        error: function(data) {
          alert("Error with API");
          console.log(JSON.stringify(data));
          // reject(new Error('getJSON: `' + data + '` failed with status: [' + data.status + ']'));
          resolve(backup);
        },
        type: 'GET'
      });


    }) //end Promise
  }
});
