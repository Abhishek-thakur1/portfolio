
import gsap from 'gsap'

// console.clear();

// gsap.set('.title', {xPercent:-50, yPercent:-50})
// gsap.set(".section", { autoAlpha: 0 });

// // a loop for the other sections '.section'
// var sections = gsap.utils.toArray(".section");

// var largeTL = gsap.timeline({
//     scrollTrigger: {
//         trigger: ".section1",
//         pin: ".wrap-all",
//         scrub: 1.5,
//         start: "top top",
//         //end: '+=550%',
//         end: "+=950%",
//     },
// });

// sections.forEach(function (elem, i) {
//     gsap.set(".section", { zIndex: (i, target, targets) => targets.length - i });

//     // select the relevant elements
//     var lines = elem.querySelectorAll(".title");

//     const tlDelay = i;

//     var smallTL = gsap.timeline();

//     smallTL
//         .to(elem, { autoAlpha: 1 }, tlDelay)
//         .from(lines, {
//             xPercent: -100,
//             duration: 1,
//             ease: "power2.out",
//             stagger: 0.6,
//         })
//         .to(elem, { autoAlpha: 0 });
//     //.to({}, {duration:1}) // a little pause at the end

//     largeTL.add(smallTL, tlDelay);
// });
