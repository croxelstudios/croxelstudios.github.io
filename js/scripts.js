$(function () {
    var x = 0;
    setInterval(function () {
        x -= .05;
        $('html').css('background-position', x + 'px 0');
    }, 10);
})


function navbarResponsive() {

    var navbar = document.getElementById("croxelNavbar");
    if(!navbar.classList.contains("responsive")){
        navbar.classList.add("responsive");
    }else{
        navbar.classList.remove("responsive");
    }
    document.activeElement.blur();
}


$.fn.shuffleChildren = function() {
    $.each(this.get(), function(index, el) {
        var $el = $(el);
        var $find = $el.children();

        $find.sort(function() {
            return 0.5 - Math.random();
        });

        $el.empty();
        $find.appendTo($el);
    });
};

window.onload = $("#los-notas").shuffleChildren();


function clearSelection()
{
 if (window.getSelection) {window.getSelection().removeAllRanges();}
 else if (document.selection) {document.selection.empty();}
}