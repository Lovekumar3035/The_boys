

let tl = gsap.timeline();
tl.from("nav h2", {
    y: -100,
    opacity: 0,
    duration: 1,
    stagger: 0.2
})
    .from("#section h1", {
        x: -400,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2
    })
    .from("#images img", {
        y: -400,
        opacity: 0,
        duration: 1,
        stagger: 0.5
    })