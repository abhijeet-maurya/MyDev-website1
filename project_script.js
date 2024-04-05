gsap.from('.img_slider', {
    // duration:5,
    transform:"translateX(-440%)",
    scrollTrigger:{
        trigger:'image_scoller',
        scroller:"body",
        markers:true,
        start:'Top -50%',
        end:'Top -100%',
        startTrigger:"",
        pin:true,
        scrub:2
    }
});

// function scolltop(){
//     document.querySelector
// }

let a=0;
let LBtnCount= 0;
let RBtnCount= 0;

function left(){
    a=a+110;
    if(a>(-350)){
        document.querySelector('.img_slider').style.transform=`translateX(${a}%)`;
    }
    else{
        a=0;
        document.querySelector('.img_slider').style.transform=`translateX(${a}%)`;
    }
}

function right(){
    a=a-110;
    if(a>(-350)){
        document.querySelector('.img_slider').style.transform=`translateX(${a}%)`;
    }
    else{
        a=0;
        document.querySelector('.img_slider').style.transform=`translateX(${a}%)`;
    }
}

