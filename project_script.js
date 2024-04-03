
gsap.from('.img_slider', {
    duration:16,
    x: "-440%",
    scrubber:3,
    yoyo:true,
    repeat:-1,
    // scrollTrigger:{
    //     trigger:'#cantainer_img',
    //     markers:true,
    //     start:'Top 60%',
    //     end:'Top 10%',
    //     pin:true,
    // }
});
