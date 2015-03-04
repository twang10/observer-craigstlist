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

    // lol hardcoded json #laziness
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
    "title": "Would really like a cuddle...",
    "text": "Feel like I haven't had a real cuddle since I've been single. Sometimes I can sneak one in with a friend, but it's not quite the same. I want to get under the covers with someone and spend a lazy morning in that way, spooning, listening to each other breathe, feeling our toes touch. Is that too much to ask? Don't you want that too?"
  },
  {
    "date": "Mar 1",
    "title": "Seeking Male Geotechnical Engineer Soulmate - W4M",
    "text": "Are you a male geotechnical engineer under the age of 30 looking to create the ultimate geotechnical engineer power-couple relationship? Look no further than me - a 22 year old female geotechnical engineer-in-training.\n\nRelationship Requirements:\nB.S. or M.S. in Civil Engineering.\nA career path in geotechnical engineering.\nAbility and willingness to converse freely about geotechnical topics.\nA great Smile & Winning Personality."
  },
  {
    "date": "Mar 1",
    "title": "Seeking Non-Genital Sexual Experiences",
    "text": "I'm seeking a partner to help me move beyond the genitals as the site of pleasure. I'm looking for pleasure in other places, pleasure that might not end in ejaculation. I want other forms of orgasm. Or maybe no orgasm at all. Let's eroticize power, role-play, punish each other, experiment with our bodies to see the full range of our ability to inflict pleasure on each other! I'm not sure I'm ready for full S/M. But I like the idea of it and want to experiment with the ideas behind it (ie, pleasure beyond the genitals). I don't have a gender preference, though I identify as a man. I'm not sure if I'd be brave enough to try this in the real world so please, Tufts, help me fulfill this desire to be different in a place I feel comfortable."
  },
  {
    "date": "Mar 1",
    "title": "Seeking Miranda, Charlotte, and Samantha",
    "text": "Me: 22 year old trans girl living my life in the style of the Sex and the City women (dating, dancing, and dining).\nYou: in your 20's, have seen every episode of SatC, trans, brunch enthusiast with mixed views on men. Must be willing to dish with your girls over an expensive meal or while walking somewhere in the city, must have highly specific fashion sense."
  },
  {
    "date": "Mar 1",
    "title": "Seeking Someone Chill to Make Out With",
    "text": "Underrated and simple. Let's talk about something extremely anti-intellectual and maybe a few intellectual things (this is Tufts after all), kiss a lot, then bone if the vibes are right. Post-coital cuddling is non-negotiable. Also, sleeping over is preferred. Morning sex awaits. I wouldn't mind if we texted a lot throughout the next day, went on casual dates in subsequent weeks, established a long term relationship, and then had babies together either."
  }
]
       

}])
.controller('PostCtrl', ['$routeParams', function($routeParams) {
  this.name = "PostCtrl";
  this.params = $routeParams;

  this.next = function(len) {
    console.log(len);
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
