/*==========================================================
    HAPPY BIRTHDAY WEBSITE
    Main JavaScript
==========================================================*/
console.log("SCRIPT LOADED");
document.addEventListener("DOMContentLoaded", () => {

    /*=========================================
        ELEMENTS
    =========================================*/

    const loadingScreen = document.getElementById("loading-screen");
    const progressBar = document.querySelector(".progress");

    const music = document.getElementById("bgMusic");
    const musicBtn = document.getElementById("music-btn");

    const startBtn = document.getElementById("start-btn");

    const hero = document.getElementById("hero");
    const envelopeSection = document.getElementById("envelope-section");

    const floatingHearts =
        document.querySelector(".floating-hearts");

    const floatingSparkles =
        document.querySelector(".floating-sparkles");

    const envelope = document.getElementById("envelope");

        const continueBtn =
    document.getElementById("continue-btn");

    const waxSeal =
    document.getElementById("waxSeal");

    const dustContainer =
    document.querySelector(".floating-dust");
    /*=========================================
        LOADING SCREEN
    =========================================*/

    let width = 0;

    const loader = setInterval(() => {

        width++;

        progressBar.style.width = width + "%";

        if (width >= 100) {

            clearInterval(loader);

            setTimeout(() => {

                loadingScreen.classList.add("loading-hide");

                setTimeout(()=>{

                    animateHero();

                },900);

            }, 500);

        }

    }, 35);

 

    /*=========================================
        MUSIC
    =========================================*/

    let playing = false;

    musicBtn.addEventListener("click", () => {

        if (!playing) {

            music.play();

            musicBtn.textContent = "🔇";

            playing = true;

        }

        else {

            music.pause();

            musicBtn.textContent = "🔊";

            playing = false;

        }

    });



    /*=========================================
        START BUTTON
    =========================================*/

    startBtn.addEventListener("click", () => {

        envelopeSection.scrollIntoView({

            behavior: "smooth"

        });

    });


/*=====================================
    FLOATING DUST
=====================================*/

function createDust(){

    if(!dustContainer) return;

    const dust =
    document.createElement("div");

    dust.className="dust";

    dust.style.left =
        Math.random()*100+"%";

    dust.style.bottom="0";

    dust.style.animationDuration =
        (Math.random()*4+3)+"s";

    dustContainer.appendChild(dust);

    setTimeout(()=>{

        dust.remove();

    },7000);

}

setInterval(createDust,350);

       /*=========================================
    PETALS
=========================================*/

const petalContainer =
document.querySelector(".floating-petals");

function createPetal(){

    const petal =
    document.createElement("div");

    petal.className = "petal";

    petal.innerHTML = "🌸";

    petal.style.left =
    Math.random()*100 + "%";

    petal.style.animationDuration =
    (Math.random()*5+8)+"s";

    petal.style.opacity =
    Math.random()*0.5+.4;

    petal.style.fontSize =
    (Math.random()*12+18)+"px";

    petalContainer.appendChild(petal);

    setTimeout(()=>{

        petal.remove();

    },13000);

}

setInterval(createPetal,900);

/*=========================================
    HERO PARALLAX
=========================================*/


hero.addEventListener("mousemove",(e)=>{

    const x =
    (e.clientX/window.innerWidth-.5)*20;

    const y =
    (e.clientY/window.innerHeight-.5)*20;

    document.querySelector(".hero-aurora")
    .style.transform=
    `translate(${x}px,${y}px)`;

});

function animateHero(){

    const title =
    "Happy Birthday ❤️";

    heroTitle.style.opacity = "1";
    heroTitle.textContent="";

    let i=0;

    const typing =
    setInterval(()=>{

        heroTitle.textContent+=title[i];

        i++;

        if(i>=title.length){

            clearInterval(typing);

            heroSubtitle.style.opacity = "1";
            heroSubtitle.style.animation=
                "heroFade .8s forwards";

            setTimeout(()=>{

                startBtn.style.opacity = "1";
                startBtn.style.animation=
                    "heroPop .7s forwards";

            },500);

            setTimeout(()=>{

                const indicator =
                document.querySelector(".scroll-indicator");

                indicator.style.opacity = "1";
                indicator.style.animation =
                "heroFade .8s forwards";

            },900);

        }

    },90);

}
/*=========================================
    HERO ENTRANCE
=========================================*/

const heroTitle =
document.getElementById("heroTitle");

const heroSubtitle =
document.getElementById("heroSubtitle");

    /*=========================================
        CREATE FLOATING HEARTS
    =========================================*/

    function createHeart() {

        const heart = document.createElement("div");

        heart.className = "heart";

        heart.innerHTML = "❤";

        heart.style.left = Math.random() * 100 + "%";

        heart.style.fontSize =
            Math.random() * 20 + 15 + "px";

        heart.style.animationDuration =
            Math.random() * 6 + 6 + "s";

        heart.style.animationDelay =
            Math.random() * 2 + "s";

        floatingHearts.appendChild(heart);

        setTimeout(() => {

            heart.remove();

        }, 12000);

    }

    setInterval(createHeart, 600);



    /*=========================================
        CREATE SPARKLES
    =========================================*/

    function createSparkle() {

        const sparkle = document.createElement("div");

        sparkle.className = "sparkle";

        sparkle.style.left =
            Math.random() * 100 + "%";

        sparkle.style.top =
            Math.random() * 100 + "%";

        sparkle.style.animationDuration =
            Math.random() * 2 + 2 + "s";

        floatingSparkles.appendChild(sparkle);

        setTimeout(() => {

            sparkle.remove();

        }, 5000);

    }

    setInterval(createSparkle, 250);



    /*=========================================
        SCROLL REVEAL
    =========================================*/

    const revealElements =
        document.querySelectorAll(".reveal");

    function revealOnScroll() {

        const trigger =
            window.innerHeight * 0.85;

        revealElements.forEach(item => {

            const top =
                item.getBoundingClientRect().top;

            if (top < trigger) {

                item.classList.add("active");

            }

        });

    }

    window.addEventListener("scroll", revealOnScroll);

    revealOnScroll();



    /*=========================================
        AUTO PLAY AFTER FIRST CLICK
    =========================================*/

    document.body.addEventListener("click", () => {

        if (!playing) {

            music.play().catch(() => {});

            musicBtn.textContent = "🔇";

            playing = true;

        }

    }, { once: true });



});

/*==========================================================
    TIMELINE REVEAL ENHANCEMENT
==========================================================*/

const timelineItems =
    document.querySelectorAll(".timeline-item");

function revealTimeline(){

    const trigger =
        window.innerHeight * 0.85;

    timelineItems.forEach(item => {

        const top =
            item.getBoundingClientRect().top;

        if(top < trigger){

            item.style.opacity = "1";
            item.style.transform = "translateY(0)";

        }

    });

}



/* Initial setup */

timelineItems.forEach(item => {

    item.style.opacity = "0";

    item.style.transform = "translateY(40px)";

    item.style.transition = "0.8s ease";

});

window.addEventListener("scroll", revealTimeline);

revealTimeline();

/*==========================================================
    PHOTO LIGHTBOX
==========================================================*/

const images = document.querySelectorAll(".album-img");

const lightbox = document.getElementById("lightbox");

const lightboxImg = document.getElementById("lightboxImg");

const slideshowBtn = document.getElementById("slideshowBtn");

let slideshow = null;

let playing = false;

const closeLightbox = document.getElementById("closeLightbox");

const prevBtn = document.getElementById("prev");

const nextBtn = document.getElementById("next");

let currentIndex = 0;

/* OPEN LIGHTBOX */

images.forEach((img, index) => {

    img.addEventListener("click", () => {

        currentIndex = index;

        openLightbox(img.src);

    });

});

/* =========================
   OPEN LIGHTBOX (WITH BLUR BG)
========================= */

function openLightbox(src){

    const blurBg = document.getElementById("lightboxBlur");

    lightbox.style.display = "flex";
    clearInterval(slideshow);

playing=false;

slideshowBtn.textContent="▶ Play Slideshow";
    updateCounter();

    function updateCounter(){

    document.getElementById("photoCounter").textContent =
        `${current+1} / ${images.length}`;

}
    setTimeout(() => {
        lightbox.classList.add("active");
    }, 10);

    lightboxImg.src = src;

    // 🔥 NEW: background blur uses SAME image
    if (blurBg) {
        blurBg.style.backgroundImage = `url(${src})`;
        blurBg.style.opacity = "1";
    }
}

/* CLOSE */

closeLightbox.addEventListener("click", () => {

    lightbox.classList.remove("active");

    setTimeout(() => {
        lightbox.style.display = "none";
    }, 300);

});

/* NAVIGATION */

function showImage(index){

    if(index < 0) index = images.length - 1;
    if(index >= images.length) index = 0;

    currentIndex = index;
    updateCounter();
    const src = images[currentIndex].src;
   
    lightboxImg.src = src;

    // 🔥 UPDATE BLUR TOO
    const blurBg = document.getElementById("lightboxBlur");
    if (blurBg) {
        blurBg.style.backgroundImage = `url(${src})`;
    }
}

prevBtn.addEventListener("click", () => {

    showImage(currentIndex - 1);

});

nextBtn.addEventListener("click", () => {

    showImage(currentIndex + 1);

});

/* CLOSE ON BACKGROUND CLICK */

lightbox.addEventListener("click", (e) => {

    if(e.target === lightbox){

        lightbox.style.display = "none";

    }

});

document.addEventListener("keydown",(e)=>{

    if(lightbox.style.display!=="flex") return;

    if(e.key==="ArrowRight"){

        next.click();

    }

    if(e.key==="ArrowLeft"){

        prev.click();

    }

    if(e.key==="Escape"){

        closeLightbox.click();

    }

});

/*==========================================================
    REASONS REVEAL ANIMATION
==========================================================*/

const reasonCards = document.querySelectorAll(".reason-card");

function revealReasons(){

    const trigger = window.innerHeight * 0.85;

    reasonCards.forEach((card, i) => {

        const top = card.getBoundingClientRect().top;

        if(top < trigger){

            setTimeout(() => {

                card.classList.add("active");

            }, i * 120); // stagger effect

        }

    });

}

window.addEventListener("scroll", revealReasons);

revealReasons();


/*==========================================================
    WISH CARD EXTRA EFFECT (OPTIONAL)
==========================================================*/

const wishCard = document.querySelector(".wish-card");

function glowOnView(){

    if(!wishCard) return;

    const trigger = window.innerHeight * 0.85;

    const top = wishCard.getBoundingClientRect().top;

    if(top < trigger){

        wishCard.style.boxShadow =
            "0 0 60px rgba(255,255,255,0.25)";

        wishCard.style.transform =
            "translateY(0)";

    }

}

window.addEventListener("scroll", glowOnView);

glowOnView();

/*==========================================================
    GIFT BOX INTERACTION
==========================================================*/

const giftBox = document.getElementById("giftBox");

let giftOpened = false;

giftBox.addEventListener("click", () => {

    if(giftOpened) return;

    giftOpened = true;

    giftBox.classList.add("open");

    activateGiftMagic();
    activateGiftSky()

    setTimeout(()=>{

    launchFirework(

        window.innerWidth*0.5,

        window.innerHeight*0.45

    );

},400);

setTimeout(()=>{

    launchFirework(

        window.innerWidth*0.25,

        window.innerHeight*0.35

    );

},900);

setTimeout(()=>{

    launchFirework(

        window.innerWidth*0.75,

        window.innerHeight*0.35

    );

},1400);

setTimeout(()=>{

    launchFirework(

        window.innerWidth*0.5,

        window.innerHeight*0.25

    );

},1900);

    for(let i=0;i<40;i++){

    setTimeout(createGiftHeart,i*40);

}
    setTimeout(()=>{

    const letter =
    giftBox.querySelector(".gift-letter");

    letter.style.transitionDelay=".2s";

},500);

    giftBox.animate(

[
    {transform:"scale(1)"},
    {transform:"scale(0.94)"},
    {transform:"scale(1.08)"},
    {transform:"scale(1)"}
],

{
    duration:650,
    easing:"ease-out"
}

);
    // Optional extra effect
    createBalloons();

});


/*=========================================
    BALLOON EFFECT
=========================================*/

function createBalloons(){

    for(let i=0;i<10;i++){

        const balloon = document.createElement("div");

        balloon.innerHTML = "🎈";

        balloon.style.position = "fixed";

        balloon.style.left = Math.random()*100 + "vw";

        balloon.style.bottom = "-50px";

        balloon.style.fontSize = "2rem";

        balloon.style.animation = "floatUp 5s linear forwards";

        document.body.appendChild(balloon);

        setTimeout(()=>{

            balloon.remove();

        },5000);

    }

}


/*==========================================================
    REPLAY BUTTON
==========================================================*/

const replayBtn = document.getElementById("replayBtn");

if (replayBtn) {
    replayBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}

setTimeout(() => {
    const loader = document.getElementById("loading-screen");
    if (loader) {
        loader.style.opacity = "0";
        loader.style.pointerEvents = "none";

        setTimeout(() => {
            loader.remove();
        }, 800);
    }
}, 3500);

/* =========================
   SCENE CONTROLLER
========================= */

const scenes = document.querySelectorAll(".scene");

function handleScenes() {

    const trigger = window.innerHeight * 0.8;

    scenes.forEach(scene => {

        const top = scene.getBoundingClientRect().top;

        if (top < trigger) {
            scene.classList.add("active");
        }

    });

}

/* run on scroll */
window.addEventListener("scroll", handleScenes);

/* run on load */
handleScenes();

/* =========================
   LIGHTBOX KEYBOARD CONTROL
========================= */

document.addEventListener("keydown", (e) => {

    if (lightbox.style.display !== "flex") return;

    if (e.key === "Escape") {
        lightbox.classList.remove("active");
        setTimeout(() => {
            lightbox.style.display = "none";
        }, 300);
    }

    if (e.key === "ArrowLeft") {
        showImage(currentIndex - 1);
    }

    if (e.key === "ArrowRight") {
        showImage(currentIndex + 1);
    }

});





envelope.addEventListener("click", () => {
    if(opened) return;

opened = true;

if(waxSeal){

    waxSeal.classList.add("break");

    burstSeal();

}

setTimeout(()=>{

    envelope.classList.add("open");

},500);

setTimeout(()=>{

    typeTitle();

},1300);

/*=====================================
    WAX SPARKLES
=====================================*/

function burstSeal(){

    for(let i=0;i<16;i++){

        const spark =
        document.createElement("div");

        spark.className="seal-sparkle";

        spark.style.left="50%";
        spark.style.top="58%";

        spark.style.setProperty(

            "--x",

            (Math.random()*180-90)+"px"

        );

        spark.style.setProperty(

            "--y",

            (Math.random()*180-90)+"px"

        );

        envelope.appendChild(spark);

        setTimeout(()=>{

            spark.remove();

        },800);

    }

}
});

/*==========================================================
    ACTIVE MEMORY HIGHLIGHT
==========================================================*/

const memoryItems = document.querySelectorAll(".timeline-item");

const memoryObserver = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            memoryItems.forEach(item=>
                item.classList.remove("active-memory")
            );

            entry.target.classList.add("active-memory");

        }

    });

},{
    threshold:0.6
});

memoryItems.forEach(item=>memoryObserver.observe(item));

let startX=0;

lightboxImg.addEventListener("touchstart",(e)=>{

    startX=e.touches[0].clientX;

});

lightboxImg.addEventListener("touchend",(e)=>{

    const endX=e.changedTouches[0].clientX;

    if(startX-endX>60){

        next.click();

    }

    if(endX-startX>60){

        prev.click();

    }

});

/*==========================================================
    AUTO SLIDESHOW
==========================================================*/

slideshowBtn.addEventListener("click",()=>{

    if(!playing){

        playing = true;

        slideshowBtn.textContent = "⏸ Pause";

        slideshow = setInterval(()=>{

            next.click();

        },4000);

    }

    else{

        playing = false;

        slideshowBtn.textContent = "▶ Play Slideshow";

        clearInterval(slideshow);

    }

});

closeLightbox.onclick=()=>{

    lightbox.style.display="none";

    clearInterval(slideshow);

    playing=false;

    slideshowBtn.textContent="▶ Play Slideshow";

}

/*==========================================================
    MOBILE FLIP CARDS
==========================================================*/

document.querySelectorAll(".reason-card").forEach(card=>{

    card.addEventListener("click",()=>{

        card.classList.toggle("flip");

    });

});

/*=========================================
    GROWING STEMS
=========================================*/

/*==========================================
        GROW BOUQUET
==========================================*/

const prRainContainer =
document.getElementById("pr-rain-container");

const butterflies = document.querySelectorAll(".butterfly");

const growBtn = document.getElementById("growBouquetBtn");

const stems = document.querySelectorAll(".stem");

const flowerTypes = [
    "blossom",
    "rose",
    "daisy"
];

const flowers=document.querySelectorAll(".flower");



const flowerScales=[
0.85,
1,
0.95,
1.15,
0.9,
1.1,
1.2,
0.95,
1.05,
0.88,
1.12,
0.98
];

setTimeout(()=>{

    butterflies.forEach((b,index)=>{

        setTimeout(()=>{

            b.style.opacity="1";

        },index*400);

    });

},2000);

const butterflyColors=[

["#ff78c8","#a657ff"],

["#ffd86e","#ff8a00"],

["#87f5ff","#2c9fff"],

["#ff95b5","#ff5ea8"],

["#d0ff7e","#66cc55"]

];

butterflies.forEach(b=>{

    const c=butterflyColors[
        Math.floor(Math.random()*butterflyColors.length)
    ];

    b.style.setProperty("--wing1",c[0]);
    b.style.setProperty("--wing2",c[1]);

});

flowers.forEach((flower,index)=>{

    // Random flower type
    flower.classList.add(
        flowerTypes[
            Math.floor(Math.random()*flowerTypes.length)
        ]
    );

    flower.style.setProperty(
        "--flower-scale",
        flowerScales[index]
    );

    flower.style.rotate =
        (Math.random()*24-12)+"deg";

    const colors=[
        ["#eecfff","#b96dff"],
        ["#efd8ff","#a84dff"],
        ["#dcc0ff","#8f4fff"],
        ["#f4dcff","#c06cff"],
        ["#ead0ff","#9b5cff"]
    ];

    const c=colors[index%colors.length];

    flower.style.setProperty("--petal-light",c[0]);
    flower.style.setProperty("--petal",c[1]);

});

flowers.forEach((flower,index)=>{

    flower.style.setProperty(
        "--flower-scale",
        flowerScales[index]
    );

    flower.style.rotate =
(Math.random()*24-12)+"deg";

const colors=[
["#eecfff","#b96dff"],
["#efd8ff","#a84dff"],
["#dcc0ff","#8f4fff"],
["#f4dcff","#c06cff"],
["#ead0ff","#9b5cff"]
];

const c=colors[index%colors.length];

flower.style.setProperty("--petal-light",c[0]);
flower.style.setProperty("--petal",c[1]);

flower.classList.add("grown");
});

const heights = [
170,
220,
185,
245,
205,
260,
230,
210,
255,
195,
225,
175
];

growBtn.addEventListener("click", () => {

    growBtn.disabled = true;

    stems.forEach((stem,index)=>{

        setTimeout(()=>{

            const heights = [
170,
200,
235,
270,
300,
330,
330,
300,
270,
235,
200,
170
];

stem.style.height = heights[index] + "px";

            stem.classList.add("grown");

        },index*220);

    });

});

function createPremiumPetal(){

    const petal=document.createElement("div");

    petal.className="pr-petal";

    petal.style.left=Math.random()*100+"%";

    petal.style.animation=
        `prFall ${5+Math.random()*4}s linear`;

    prRainContainer.appendChild(petal);

    petal.addEventListener("animationend",()=>{

    petal.remove();

    
});
}
setInterval(()=>{

    createPremiumPetal();

},250);

/*==========================================================
        GIFT HEART EXPLOSION
==========================================================*/

const celebration =
document.getElementById("giftCelebration");

function createGiftHeart(){

    const heart=document.createElement("div");

    heart.className="gift-heart";

    heart.textContent="💜";

    heart.style.left=
        window.innerWidth/2+"px";

    heart.style.top=
        window.innerHeight/2+"px";

    heart.style.setProperty(
        "--x",
        (Math.random()*600-300)+"px"
    );

    celebration.appendChild(heart);

    heart.addEventListener("animationend",()=>{

        heart.remove();

    });

}

/*==========================================================
    PREMIUM FIREWORKS
==========================================================*/

const fwContainer =
document.getElementById("fw-container");
console.log(fwContainer);
function launchFirework(x,y){

    const colors=[

        "#ff6bd6",
        "#ffd166",
        "#8ec5ff",
        "#ffffff",
        "#ff8b94",
        "#b084ff"

    ];

    for(let i=0;i<90;i++){

        const p=document.createElement("div");

        p.className="fw-particle";

        p.style.left=x+"px";

        p.style.top=y+"px";

        const angle=Math.random()*Math.PI*2;

        const distance=80+Math.random()*180;

        p.style.setProperty(

            "--x",

            Math.cos(angle)*distance

        );

        p.style.setProperty(

            "--y",

            Math.sin(angle)*distance

        );

        p.style.background=

        colors[
            Math.floor(
                Math.random()*colors.length
            )
        ];

        p.style.animation=

        `fwBurst ${
            1.4+Math.random()
        }s ease-out forwards`;

        fwContainer.appendChild(p);

        p.addEventListener(

            "animationend",

            ()=>p.remove()

        );

    }

}

/*==================================================
        WISH FIREFLIES SYSTEM
==================================================*/

const fireflyLayer =
document.querySelector(".firefly-layer");

function createFirefly(){

    const f = document.createElement("div");

    f.className = "firefly";

    const startX = Math.random() * window.innerWidth;
    const startY = Math.random() * window.innerHeight;

    f.style.left = startX + "px";
    f.style.top = startY + "px";

    const moveX = (Math.random() * 200 - 100) + "px";
    const moveY = (Math.random() * 200 - 100) + "px";

    f.style.setProperty("--x", moveX);
    f.style.setProperty("--y", moveY);

    f.style.animationDuration = (4 + Math.random() * 4) + "s";

    fireflyLayer.appendChild(f);

    setTimeout(() => {
        f.remove();
    }, 8000);
}

setInterval(createFirefly, 250);

/*==========================================================
            GRAND FINALE BACKGROUND
==========================================================*/

const finaleStars =
document.querySelector(".finale-stars");

const finaleHearts =
document.querySelector(".finale-hearts");

function createFinalStar(){

    if(!finaleStars) return;

    const star=document.createElement("div");

    star.className="final-star";

    star.innerHTML="✦";

    star.style.left=Math.random()*100+"%";

    star.style.top=Math.random()*100+"%";

    star.style.fontSize=
        (12+Math.random()*20)+"px";

    finaleStars.appendChild(star);

    setTimeout(()=>{

        star.remove();

    },4000);

}

setInterval(createFinalStar,220);

function createFinalHeart(){

    if(!finaleHearts) return;

    const heart=document.createElement("div");

    heart.className="final-heart";

    heart.innerHTML="💜";

    heart.style.left=Math.random()*100+"vw";

    heart.style.bottom="-40px";

    heart.style.fontSize=
        (20+Math.random()*20)+"px";

    finaleHearts.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },8000);

}

setInterval(createFinalHeart,500);

function createFinalSpark(){

    const finale =
    document.getElementById("finale");

    if(!finale) return;

    const spark=document.createElement("div");

    spark.className="final-spark";

    spark.style.left=Math.random()*100+"%";

    spark.style.top=Math.random()*100+"%";

    finale.appendChild(spark);

    setTimeout(()=>{

        spark.remove();

    },3000);

}

setInterval(createFinalSpark,180);

/*==========================================================
            AUTO FINALE FIREWORKS
==========================================================*/

const finaleSection =
document.getElementById("finale");

let finaleStarted=false;

const finaleObserver=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(!entry.isIntersecting) return;

if(finaleStarted) return;

finaleStarted=true;

setInterval(()=>{

launchFirework(

Math.random()*window.innerWidth,

120+Math.random()*250

);

},1300);

});

},{
threshold:.55
});

if(finaleSection){

finaleObserver.observe(finaleSection);

}

/*==========================================================
                BIRTHDAY CAKE
==========================================================*/

const cakeCandles =
document.querySelectorAll(".cake-candle");

const wishGranted =
document.getElementById("wishGranted");

let blown = 0;

cakeCandles.forEach(candle=>{

    candle.addEventListener("click",()=>{

        const flame =
        candle.querySelector(".cake-flame");

        if(!flame) return;

        flame.remove();

        blown++;

        createCakeSmoke(candle);

        if(blown===cakeCandles.length){

            setTimeout(()=>{

                wishGranted.classList.add("show");

                launchFirework(

                    window.innerWidth/2,

                    window.innerHeight/3

                );

            },700);

        }

    });

});

function createCakeSmoke(candle){

    const smoke =
    document.createElement("div");

    smoke.className="smoke";

    const rect =
    candle.getBoundingClientRect();

    smoke.style.left=
        rect.left+"px";

    smoke.style.top=
        rect.top+"px";

    document.body.appendChild(smoke);

    setTimeout(()=>{

        smoke.remove();

    },2000);

}

/*==================================================
        CINEMATIC SKY
==================================================*/

const giftSky =
document.getElementById("giftSky");

const giftStars =
document.getElementById("giftStars");

const giftShooters =
document.getElementById("giftShooters");

function activateGiftSky(){

    giftSky.classList.add("active");

    for(let i=0;i<180;i++){

        const star=document.createElement("div");

        star.className="gift-star";

        star.style.left=Math.random()*100+"vw";

        star.style.top=Math.random()*60+"vh";

        star.style.animationDuration=

        (2+Math.random()*3)+"s";

        star.style.animationDelay=

        Math.random()*3+"s";

        giftStars.appendChild(star);

    }

    setInterval(createShootingStar,3500);

}

function createShootingStar(){

    const s=document.createElement("div");

    s.className="gift-shooter";

    s.style.left=

    (window.innerWidth*0.8*Math.random()+200)+"px";

    s.style.top=

    Math.random()*250+"px";

    giftShooters.appendChild(s);

    s.addEventListener("animationend",()=>{

        s.remove();

    });

}

/*==========================================================
    TIMELINE FLOWER RAIN
==========================================================*/

const timelinePetalContainer =
document.getElementById("timelinePetals");

function createTimelinePetal(){

    if(!timelinePetalContainer) return;

    const petal =
    document.createElement("div");

    petal.className =
    "timeline-petal";

    petal.style.left =
    Math.random()*100 + "%";

    petal.style.width =
    (14+Math.random()*12)+"px";

    petal.style.height =
    (20+Math.random()*14)+"px";

    petal.style.animationDuration =
    (6+Math.random()*5)+"s";

    petal.style.animationDelay =
    Math.random()*2+"s";

    petal.style.opacity =
    .45 + Math.random()*.45;

    petal.style.rotate =
    (Math.random()*360)+"deg";

    timelinePetalContainer.appendChild(petal);

    petal.addEventListener("animationend",()=>{

        petal.remove();

    });

}

setInterval(createTimelinePetal,220);

/*=========================================
    TIMELINE FLOWER RAIN
=========================================*/

const tlRain =
document.getElementById("tl-flower-rain");

const tlFlowers=[
"🌸",
"🌺",
"🌼",
"💮"
];

function createTimelineFlower(){

    if(!tlRain) return;

    const flower=document.createElement("div");

    flower.className="tl-flower";

    flower.textContent=

    tlFlowers[
        Math.floor(
            Math.random()*tlFlowers.length
        )
    ];

    flower.style.left=
        Math.random()*100+"%";

    flower.style.fontSize=
        (18+Math.random()*18)+"px";

    flower.style.animationDuration=
        (8+Math.random()*6)+"s";

    flower.style.animationDelay=
        Math.random()*2+"s";

    flower.style.transform=
        `translateX(${Math.random()*80-40}px)`;

    tlRain.appendChild(flower);

    flower.addEventListener("animationend",()=>{

        flower.remove();

    });

}

setInterval(createTimelineFlower,350);

/*==========================================================
        PHOTO ALBUM PETAL RAIN
==========================================================*/

const albumPetals = document.getElementById("albumPetals");

if(albumPetals){

    function createAlbumPetal(){

        const petal = document.createElement("div");

        petal.className = "album-petal";

        petal.style.left = Math.random()*100 + "%";

        petal.style.animationDuration =
            (7 + Math.random()*5) + "s";

        petal.style.animationDelay =
            Math.random()*2 + "s";

        petal.style.transform =
            `scale(${0.7 + Math.random()*0.7})`;

        albumPetals.appendChild(petal);

        petal.addEventListener("animationend",()=>{

            petal.remove();

        });

    }

    setInterval(createAlbumPetal,250);

}

/*==========================================================
    REASONS FLOATING HEARTS
==========================================================*/

const reasonsHearts = document.getElementById("reasonsHearts");

if(reasonsHearts){

    const hearts = ["❤","💖","💕","💗","💜"];

    function createReasonHeart(){

        const heart = document.createElement("div");

        heart.className = "reason-heart";

        heart.textContent =
            hearts[Math.floor(Math.random()*hearts.length)];

        heart.style.left =
            Math.random()*100 + "%";

        heart.style.fontSize =
            (18 + Math.random()*18) + "px";

        heart.style.animationDuration =
            (8 + Math.random()*6) + "s";

        heart.style.opacity =
            0.15 + Math.random()*0.25;

        reasonsHearts.appendChild(heart);

        heart.addEventListener("animationend",()=>{

            heart.remove();

        });

    }

    setInterval(createReasonHeart,700);

}

/*==========================================================
    REASONS BACKGROUND STARS
==========================================================*/

const reasonStars = document.querySelector(".reason-stars");

if(reasonStars){

    for(let i=0;i<35;i++){

        const star=document.createElement("div");

        star.className="reason-star";

        star.innerHTML=Math.random()>.5 ? "✦" : "✨";

        star.style.left=Math.random()*100+"%";

        star.style.top=Math.random()*100+"%";

        star.style.fontSize=(8+Math.random()*14)+"px";

        star.style.animationDuration=(2+Math.random()*4)+"s";

        star.style.animationDelay=Math.random()*5+"s";

        reasonStars.appendChild(star);

    }

}

document.querySelectorAll(".reason-card").forEach(card=>{

    card.addEventListener("mousemove",e=>{

        if(Math.random()>.75){

            const spark=document.createElement("div");

            spark.className="reason-spark";

            spark.style.left=e.offsetX+"px";

            spark.style.top=e.offsetY+"px";

            card.appendChild(spark);

            setTimeout(()=>spark.remove(),900);

        }

    });

});

document.querySelectorAll(".reason-card").forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        for(let i=0;i<5;i++){

            setTimeout(()=>{

                const heart=document.createElement("div");

                heart.className="reason-heart";

                heart.innerHTML="💜";

                heart.style.left=(30+Math.random()*40)+"%";

                heart.style.bottom="20px";

                card.appendChild(heart);

                setTimeout(()=>heart.remove(),2800);

            },i*220);

        }

    });

});