
// gsap.from('.img_slider', {
//     duration:16,
//     x: "-440%",
//     scrubber:3,
//     yoyo:true,
//     repeat:-1,
//     scrollTrigger:{
//         trigger:'#cantainer_img',
//         // markers:true,
//         start:'Top 60%',
//         end:'Top 10%',
//         pin:true,
//     }
// });

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

