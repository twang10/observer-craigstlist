var Craigslist = angular.module('Craigslist', ['ngRoute']);

Craigslist.config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {
    $routeProvider
 	  .when('/multimedia/craigslist/', {
        templateUrl: '/multimedia/craigslist/home.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/multimedia/craigslist/Post/:id', {
        templateUrl: '/multimedia/craigslist/post.html',
        controller: 'PostCtrl',
        controllerAs: 'post'
      });
      $routeProvider.otherwise({
        redirectTo: '/multimedia/craigslist/'
      });
;
    $locationProvider.html5Mode(true);
}])
.controller('MainCtrl', ['$route', '$routeParams', '$location', '$http',
  function($route, $routeParams, $location, $http) {
    this.$route = $route;
    this.$location = $location;
    this.$routeParams = $routeParams;

    this.posts = [
  {
    "date": "Mar 1",
    "title": "Looking for that someone who wants engage in sexual activity but not sex.",
    "text": "Looking to keep wearing my promise ring in honesty but stop feeling horny as fuck."
  },
  {
    "date": "Mar 1",
    "title": "I Scratch Your Back You Scratch Mine",
    "text": "Actually though. Looking for someone to exchange back massages with. I'm pretty good. Would love someone to help me with my knotty back and not charge me 8 million dollars. Please don't be creepy about it. "
  },  
  {
    "date": "Mar 1",
    "title": "Seeking a Nerdy-Hot Professor ",
    "text": "I am looking to spend time with a humanities professor. We can talk about intellectual things... or not talk at all. I'm excited to explore the power dynamics of professor-student, male-female, and how sexual intrigue can complicate them. "
  },
  {
    "date": "Mar 1",
    "title": "Seeking Someone Who Wants to be Read Stories",
    "text": "I love reading stories aloud. Sometimes, when my housemates are gone, I'll open up my favorite passages in literature and read them aloud in my room. I'm seeking someone who wants to be read books in a quiet place -- I think it can be an incredibly powerful experience. "
  },
  {
    "date": "Mar 1",
    "title": "dweeby/nerdy math tutor who is unaware of his effect on women",
    "text": "Must be endearingly awkward. His smolder is unintentional but potent. He can help me with my math learning difficulties. "
  },
  {
    "date": "Mar 1",
    "title": "Seeking: gender ambiguous anal coitus experience",
    "text": "I swing low and both ways. I take and I give. Seeking my worst nightmare and darkest desire. Save me from myself. "
  },
    {
    "date": "Mar 1",
    "title": "Where are you hiding, hipster other half?",
    "text": "Do you wear black turtlenecks? Do you prefer the films of Ingmar Bergman because there aren't enough weighty silences in Godard's? Do you have one (or more) velvet underground bootlegs on vinyl, preferably originally pressed in Japan? Do you act like the Pixies are the best band from Boston, but usually you'd rather cuddle and listen to Galaxie 500? Where are you hipster other half???"
  },
  {
    "date": "Mar 1",
    "title": "Seeking Doctor O?",
    "text": "Ever wondered what else is bigger on the inside? Daydreamed about something else the Doctor has two of? If so, I'd love to meet with you (virtually) and write Doctor Who fanfiction. Classic Who, only, please."
  },
  {
    "date": "Mar 1",
    "title": "Campus Center is not a Fashion Show",
    "text": "Sick of seeing tons of swag-less students parade through the campus center in their all back ensembles or their \"dope\" parkas and wayfarers. Camo jacket and a beanie? Check! Ripped jeans and Docs? Check! Joggers and some Stan Smiths? Check! There's about 3 different uniforms at Tufts and they're all lame. Show some originality or recognize that you might just be a vulture after all "

  }
]
       

}])
.controller('PostCtrl', ['$routeParams', function($routeParams) {
  this.name = "PostCtrl";
  this.params = $routeParams;

  this.next = function(len) {
  	next = parseInt(this.params.id) + 1
  	if (len == next) return "/multimedia/craigslist/"
  	return "/multimedia/craigslist/Post/" + next
  };

  this.prev = function() {
  	prev = parseInt(this.params.id) - 1
    console.log(prev)
  	if (prev < 0) {
      return "/multimedia/craigslist/"
    } else {
        return "/multimedia/craigslist/Post/" + prev
    }
  } 
}])
