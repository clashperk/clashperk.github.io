$(function () {
    var ulLi = $('nav ul > li'),
        fa = $('nav ul > li:last-of-type a .fa');

    $('nav ul').append('<ol></ol>');

    $('nav').each(function () {
        for (var i = 0; i <= ulLi.length - 3; i++) {
            $('nav ul > ol').append("<li>" + i + "</li>");
            $('nav ul > ol > li').eq(i).html(ulLi.eq(i + 1).html());
        }
    });

    $('nav ul > li:last-of-type').on('click', function () {
        fa.toggleClass('fa-bars');
        fa.toggleClass('fa-times');
        $(this).parent().children('ol').slideToggle(500);
    });
});

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos && currentScrollPos === 0 && window.innerWidth > 700) {
        document.getElementById('topNav').style.backgroundColor = 'transparent';
        for (var node of document.getElementById('topNav').getElementsByTagName('A')) {
            node.style.color = 'white';
        }
    } else {
        document.getElementById('topNav').style.backgroundColor = 'white';
        for (var node of document.getElementById('topNav').getElementsByTagName('A')) {
            node.style.color = 'black';
        }
    }
    prevScrollpos = currentScrollPos;
}