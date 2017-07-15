$( ".boxx" ).hover(
  function() {
    $(`${"." + this.className.split(" ").join(".")} h5`).addClass( "active" );
  }, function() {
    $(`${"." + this.className.split(" ").join(".")} h5`).removeClass( "active" );
  },
);

$("a[href^='#']").click(function(e) {
	e.preventDefault();
	var position = $($(this).attr("href")).offset().top;
	$("body, html").animate({
		scrollTop: position -65
	}, 900 );
});

function closeAll() {
    document.querySelectorAll('.accordion-header').forEach(function(header) {
        $(header).removeClass('active').next().slideUp();
    })
}

$(".accordion").on("click", ".accordion-header", function() {
    if(!$(this).hasClass('active')) {
        closeAll();
        $(this).toggleClass("active").next().slideToggle();
    } else {
        closeAll();
    }

});

var waypoint = new Waypoint({
  element: document.getElementById('productos'),
  handler: function(direction) {
    $('.box').addClass('animated fadeInUp')
  },
	offset: 450
})

var waypoint = new Waypoint({
  element: document.getElementById('menuconsulta'),
  handler: function(direction) {
    $('.menuconsulta2').addClass('animated fadeInRight')
  },
	offset: 300
})

var waypoint = new Waypoint({
  element: document.getElementById('contacto'),
  handler: function(direction) {
    $('.contactate2').addClass('animated bounceIn')
  },
	offset: 350
})

var waypoint = new Waypoint({
  element: document.getElementById('menuprincipal'),
  handler: function(direction) {
    $('.titulo').addClass('animated zoomIn')
  },
	offset: 0
})

var waypoint = new Waypoint({
  element: document.getElementById('acordeon'),
  handler: function(direction) {
    $('.acordeon2').addClass('animated bounceIn')
  },
})

