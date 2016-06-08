function FilmDetailController() {
  var ctrl = this;

  ctrl.update = function(prop, value) {
    ctrl.onUpdate({film: ctrl.film, prop: prop, value: value});
  };
}

angular.module('filmsApp').component('filmDetail', {
  templateUrl: 'filmDetail.html',
  controller: FilmDetailController,
  bindings: {
    film: '<',
    onDelete: '&',
    onUpdate: '&'
  }
});