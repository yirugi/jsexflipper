(function anonymous(
) {
return function apply(player) {
    let readNextElm = document.querySelector('.mobile-anchor-recirc');
    let playerElm = document.getElementById('88d047ba-8954-4830-a439-6aa7b7c72fb9');
    let observerFired = false;

    let observer = new MutationObserver(function (mutation) {
        if (readNextElm.classList.contains('visible')) {
            console.log('[exco - log] sticky closed because of read next appearance.');
            player._sticky.unset(player._stickyElement, {} );
        };
        if (!observerFired) {
            observer.disconnect();
            observer.observe(playerElm, {attributeFilter: ['data-pbs-position']});
            observerFired = true;
        }
    });

    observer.observe(readNextElm, {attributes: true});

}
})