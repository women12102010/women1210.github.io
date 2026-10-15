
const revealBtn = document.getElementById("revealBtn");
const intro = document.getElementById("intro");
const message = document.getElementById("message");
const messageTitle = document.getElementById("messageTitle");
const messageText = document.getElementById("messageText");

const title = "gâu gấu gẩu gấu";
const content =
    "gâu gâu, gấu gậu gậu gầu gâu gậu, gâu gẩu, " +
    "gậu gậu gầu gầu gấu gầu gâu gâu gẫu gấu gâu." +
    "gầu gầu gậu gầu gâu gấu gâu gẫu gấu gâu " +
    "gấu gầu gậu gầu gẫu gậu gâu";

revealBtn.addEventListener("click", () => {
    intro.hidden = true;
    message.hidden = false;

    messageTitle.textContent = title;
    messageText.textContent = "";

    let index = 0;

    function typeWriter() {
        if (index < content.length) {
            messageText.textContent += content[index];
            index++;
            setTimeout(typeWriter, 38);
        }
    }

    typeWriter();
});

