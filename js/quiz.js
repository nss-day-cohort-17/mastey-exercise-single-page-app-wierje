var Carlot = (function() {
    var carInventory = [];

    return {
        getCarInventory: function(callback) {
            console.log("test", callback);
            // create an xhr to load carInventory
            var carLoader = new XMLHttpRequest();
            // Listen for when the load event is broadcast
            // and execute an anonymous callback.
            carLoader.open("GET", "https://mastery-exercise-spa.firebaseio.com/.json");
            carLoader.addEventListener("load", function(event) {
                // Set the value of the private array
                // List the cars in the DOM
                // Parse JSON objects into a native JavaScript Object
                // carInventory = JSON.parse(event.target.responseText).cars;
                carInventory = JSON.parse(this.responseText).cars;
                console.log(carInventory);
                callback(carInventory);
            });
            carLoader.send();
        }
    };
})();


function populatePage(carInventory) {
    var output = document.querySelector(".output");
    var results = "";
    carInventory.forEach(function(car, index) {
        if (index % 3 === 0) {
            results += `<div class="row">`;
        }

        results += `
        <div class="col-md-4 carCard">
           <img src="${car.img}">
           <h5>Make: ${car.make}</h5>
           <h5>Year: ${car.year}</h5>
           <h5>Model: ${car.model}</h5>
           <h5>Price: $${car.price}</h5>
           <h5>Color: ${car.color}</h5>
           <p>${car.description}</p>
        </div>
      `;
        if (index % 3 === 2) {
            results += `</div>`;
        }
    });
    output.innerHTML = results;

    activateEvents();
}
Carlot.getCarInventory(populatePage);
