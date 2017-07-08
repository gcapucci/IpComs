$("a[href^='#']").click(function(e) {
	e.preventDefault();
	var position = $($(this).attr("href")).offset().top;
	$("body, html").animate({
		scrollTop: position -65
	}, 1000 );
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

