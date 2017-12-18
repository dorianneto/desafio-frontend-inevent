var App = {
    headerManipulation: function () {
        var header = $('#header .navbar-fixed-top'),
            scroll = $(window).scrollTop();

        if (scroll >= 100)
            header.addClass('fixed');
        else
            header.removeClass('fixed');
    }
}

$(window).scroll(function () {
    App.headerManipulation();
});

var rellax = new Rellax('.rellax');
