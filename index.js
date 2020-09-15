function smoothScroll(target) {
    var target = document.getElementById(target);
    var targetPosition = target.getBoundingClientRect().top;
    var startPosition = window.pageYOffset;
    var startTime = null;

    function animation(currentTime){
        if(startTime === null){
            startTime = currentTime;
        }
        var timeElapsed = currentTime - startTime;
        var run = ease(timeElapsed, startPosition, targetPosition, 1000);
        window.scrollTo(0, run);
        if(timeElapsed < 1000) {
            requestAnimationFrame(animation);
        }

    }

    function ease(t,b,c,d){
        t /= d/2;
        if(t<1){
            return c/2*t*t+b;
        }
        t--;
        return -c / 2 * (t * (t - 2 ) - 1) + b;
    }
    requestAnimationFrame(animation);
}


function openWebpage(url) { 
    window.open(url, "_blank"); 
} 