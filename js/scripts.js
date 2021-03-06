$(document).ready(function() {

  /* WAYPOINT ANIMATE */
  $('.up').waypoint(function() {
    $(this.element).addClass('visible animated fadeInUp');
  },
  { offset: '60%' });

  $('.down').waypoint(function() {
    $(this.element).addClass('visible animated fadeInDown');
  },
  { offset: '60%' });

  $('.left').waypoint(function() {
    $(this.element).addClass('visible animated fadeInLeft');
  },
  { offset: '80%' });

  $('.right').waypoint(function() {
    $(this.element).addClass('visible animated fadeInRight');
  },
  { offset: '80%' });

});
