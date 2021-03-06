var controller = new ScrollMagic.Controller();

new ScrollMagic.Scene({
        triggerElement: "#trigger1",
        triggerHook: 0.9,
        offset: 50
    })
    .setClassToggle("#efecto1", "visible")
    .addTo(controller);

new ScrollMagic.Scene({
        triggerElement: "#trigger1",
        offset: 50,
        triggerHook: 0.9,
    })
    .setClassToggle("#efecto2", "visible")
    .addTo(controller);

var revealElements = document.getElementsByClassName("efecto3");
for (var i = 0; i < revealElements.length; i++) {
    new ScrollMagic.Scene({
            triggerElement: revealElements[i],
            offset: 50,
            duration: "10000%",
            triggerHook: 1.9,
        })
        .setClassToggle(revealElements[i], "visible")
        .addTo(controller);
}

new ScrollMagic.Scene({
        triggerElement: "#conocenos",
        triggerHook: 0.9,
        offset: 50
    })
    .setClassToggle("#efecto4", "visible")
    .addTo(controller);

new ScrollMagic.Scene({
        triggerElement: "#conocenos",
        offset: 50,
        triggerHook: 0.9,
    })
    .setClassToggle("#efecto5", "visible")
    .addTo(controller);