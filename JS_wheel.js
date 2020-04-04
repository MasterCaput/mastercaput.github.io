function wheel() {
    let start = Date.now();

    let timer = setInterval(function() {
        let timePassed = Date.now() - start;

        wl.style.right = timePassed / 15 + 'px';

        if (timePassed > 25000) clearInterval(timer);

    }, 0.1);
}
window.onload = wheel();