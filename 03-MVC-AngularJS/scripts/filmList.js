function FilmListController($scope, $element, $attrs) {
  var ctrl = this;

  // Sorry, my idea was to get this data from a json but decided to hardcode it 
  // to not lose time and move on to next topic/final project = )
  ctrl.list = [
    {
      name: 'V for Vendetta',
      genre: 'Dystopian political thriller',
      synopsis: 'Set against the futuristic landscape of totalitarian Britain, '+
      'V For Vendetta tells the story of a mild-mannered young woman named Evey ' +
      'who is rescued from a life-and-death situation by a masked vigilante known ' +
      'only as "V." Incomparably charismatic and ferociously skilled in the art of ' +
      'combat and deception, V ignites a revolution when he detonates two London ' +
      'landmarks and takes over the government-controlled airwaves, urging his ' +
      'fellow citizens to rise up against tyranny and oppression. As Evey uncovers ' +
      'the truth about V\'s mysterious background, she also discovers the truth about ' +
      'herself - and emerges as his unlikely ally in the culmination of his plot to ' +
      'bring freedom and justice back to a society fraught with cruelty and corruption.',
      year: 2006,
      length: 132
    },
    {
      name: 'Requiem for the American Dream',
      synopsis: 'REQUIEM FOR THE AMERICAN DREAM is the definitive ' +
      'discourse with Noam Chomsky, widely regarded as the most ' +
      'important intellectual alive, on the defining characteristic ' +
      'of our time - the deliberate concentration of wealth and power ' +
      'in the hands of a select few. Through interviews filmed over ' +
      'four years, Chomsky unpacks the principles that have brought ' +
      'us to the crossroads of historically unprecedented inequality - ' +
      'tracing a half century of policies designed to favor the most wealthy ' +
      'at the expense of the majority - while also looking back on his own ' +
      'life of activism and political participation. Profoundly personal and ' +
      'thought provoking, Chomsky provides penetrating insight into what may ' +
      'well be the lasting legacy of our time - the death of the middle class, ' + 
      'and swan song of functioning democracy.',
      genre: 'Political documentary',
      year: 2015,
      length: 73
    },
    {
      name: 'Black Fish',
      synopsis: 'Blackfish is a 2013 American documentary film ' +
      'directed by Gabriela Cowperthwaite. It concerns Tilikum, ' +
      'an orca held by SeaWorld and the controversy over captive ' +
      'killer whales. The film premiered at the 2013 Sundance Film ' +
      'Festival on January 19, 2013, and was picked up by Magnolia ' +
      'Pictures and CNN Films for wider release.',
      genre: 'Documentary',
      year: 2013,
      length: 83
    },
    {
      name: 'Mononoke Hime',
      synopsis: 'Princess Mononoke is a fantasy adventure: the story of ' +
      'an epic struggle between humanity and nature, where nature is ' +
      'represented by ancient, vengeful gods. The story\'s tangle of ' +
      'competing interests -- cursed monsters, an assortment of ambitious ' +
      'people, a selfless hero, and those vengeful gods -- is remarkable for ' +
      'including no villain.',
      genre: 'Anime/Animation/Fantasy',
      year: 1997,
      length: 133
    }
  ];

  ctrl.addFilm = function() {
    ctrl.list.unshift({
      name: 'Name your film',
      synopsis: 'Give it a story',
      genre: 'Give it emotion',
      year: 0,
      length: 0
    });
  }

  ctrl.updateFilm = function(film, prop, value) {
    film[prop] = value;
  };

  ctrl.deleteFilm = function(film) {
    var idx = ctrl.list.indexOf(film);
    if (idx >= 0) {
      ctrl.list.splice(idx, 1);
    }
  };
}

angular.module('filmsApp').component('filmList', {
  templateUrl: 'filmList.html',
  controller: FilmListController
});
