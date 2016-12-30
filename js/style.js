// on click, change the width of the border to a higher value, and change the background color
function resetCards(cards) {
    cards.forEach(function(card) {
        card.classList.remove("orange");
    });
}

function styleCard(card) {
    card.classList.add("orange");
}

function mirrorText(card, userInput) {
    userInput.value = card.querySelector("p").innerHTML="";
    userInput.addEventListener("keyup", function() {
        if (card.classList.contains("orange")) {
            card.querySelector("p").innerHTML = userInput.value;
        }
    });
}
