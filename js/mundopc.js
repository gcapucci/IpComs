$("a[href^='#']").click(function(e) {
	e.preventDefault();
	var position = $($(this).attr("href")).offset().top;
	$("body, html").animate({
		scrollTop: position -200
	}, 1000 );
});

function closeAll() {
    document.querySelectorAll('.accordion-header').forEach(function(header) {
        $(header).removeClass('active').next().slideUp();
    })
}

$(".accordion").on("click", ".accordion-header", function() {
    closeAll();
    $(this).toggleClass("active").next().slideToggle();
});