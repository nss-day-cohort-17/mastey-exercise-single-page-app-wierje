function activateEvents() {
    var cards = document.querySelectorAll(".carCard");
    cards.forEach(function(card) {
        card.addEventListener("click", function() {
// clear the value of the text input in the navbar, and put the [cursor in the text input]            var userInput = document.querySelector("#userInput");
            userInput.value = "";
            userInput.focus();
            resetCards(cards);
            styleCard(card, "orange");
            mirrorText(card, userInput);
        });
    });
}
