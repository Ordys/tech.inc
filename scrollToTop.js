
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}


window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    var btnScrollToTop = document.getElementById("btnScrollToTop");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        btnScrollToTop.style.display = "block";
        btnScrollToTop.style.opacity = "1";
    } else {
        btnScrollToTop.style.opacity = "0";
        setTimeout(function() {
            btnScrollToTop.style.display = "none";
        }, 500);
    }
}