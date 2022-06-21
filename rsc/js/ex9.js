function hoverEventHandler(){
    const b_ref = document.querySelector("#button");
    b_ref.addEventListener("mouseover",aLittleTrolling);
    const messages = ["So Close",
                    "Try Again",
                    "Almost Got Me!",
                    "Not Quite",
                    "Gotta Be Faster",
                    "Nope",
                    "Too Slow!",
                    "Ooh, Almost",
                    "Not Even Close",
                    "Wrong",
                    "You Wish",
                    "One More Time",
                    "Hahahaha",
                    "Juked",
                    "Missed Me!",
                    "Near Miss",
                    "Just Missed",
                    "Try Harder",
                    "Better Luck Next Time",
                    "Dodged Ya!"];
    function aLittleTrolling(event) {
        b_ref.style.top = (Math.floor(Math.random() * 60) + 20) + "%";
        b_ref.style.left = (Math.floor(Math.random() * 60) + 20) + "%";
        b_ref.innerHTML = "<h1>" + messages[Math.floor(Math.random()*(messages.length - 1))] + "<h1>";
    }
}