/*==========================================================
    ENVELOPE
==========================================================*/

document.addEventListener("DOMContentLoaded", () => {

    const envelope = document.getElementById("envelope");

    const letter = document.querySelector(".letter");

    const continueBtn = document.getElementById("continue-btn");

    const letterTitle = letter.querySelector("h3");

    const letterParagraph =
document.getElementById("letterText");

const cursor =
document.getElementById("typingCursor");



    /*=====================================
        LETTER CONTENT
    =====================================*/

    const title = "Hello ❤️";

    const message =
`I made something special just for you.

Every section of this website was created with love, memories, and appreciation.

I hope it makes you smile.

Now let's continue this little journey together. 💜`;



    /*=====================================
        INITIAL STATE
    =====================================*/

    continueBtn.style.opacity = "0";
    continueBtn.style.pointerEvents = "none";

    letterTitle.textContent = "";
    letterParagraph.textContent = "";

    cursor.style.display = "inline-block";



    let opened = false;



    /*=====================================
        OPEN ENVELOPE
    =====================================*/

    envelope.addEventListener("click", () => {

        if (opened) return;

        opened = true;

        envelope.classList.add("open");



        setTimeout(() => {

            typeTitle();

        }, 900);

    });



    /*=====================================
        TYPE TITLE
    =====================================*/

    function typeTitle() {

        let index = 0;

        const typing = setInterval(() => {

            letterTitle.textContent += title[index];

            index++;

            if (index >= title.length) {

                clearInterval(typing);

                setTimeout(typeMessage,400);

            }

        },80);

    }



    /*=====================================
        TYPE MESSAGE
    =====================================*/

    function typeMessage(){

    let index = 0;

    function typeNext(){

        if(index >= message.length){

            cursor.style.display = "none";

            letter.classList.add("finished");

            showButton();

            return;

        }

        letterParagraph.textContent += message[index];

        let delay = 20 + Math.random()*50;

        const char = message[index];

        if(char === ".") delay = 220;

        if(char === ",") delay = 120;

        if(char === "!") delay = 250;

        if(char === "?") delay = 250;

        if(char === "\n") delay = 180;

        index++;

        setTimeout(typeNext,delay);

    }

    typeNext();

}



    /*=====================================
        SHOW BUTTON
    =====================================*/

    function showButton(){

        continueBtn.style.opacity="1";

        continueBtn.style.pointerEvents="auto";

        continueBtn.style.transform="translateY(0)";

    }



    /*=====================================
        CONTINUE
    =====================================*/

    continueBtn.addEventListener("click", (e) => {

    e.stopPropagation();

    const timeline = document.getElementById("timeline");

    if (timeline) {

        timeline.scrollIntoView({
            behavior: "smooth"
        });

    }

});

});