function populatePage (inventory) {
  // Loop over the inventory and populate the page
  var carsDiv = document.getElementById("cars-div");
  var inventoryHTML ="";

  for(var i=0;i<inventory.cars.length;i++){
        inventoryHTML += `<article>`;
        inventoryHTML += `<h2>${inventory.cars[i].make}</h2>`;
        inventoryHTML += `<h3>${inventory.cars[i].model}</h3>`;
        inventoryHTML += `<h4>${inventory.cars[i].price}</h4>`;
        inventoryHTML += `<h4>${inventory.cars[i].description}</h4>`;
        inventoryHTML += `</article>`;
  }
  carsDiv.innerHTML = inventoryHTML;


  // Now that the DOM is loaded, establish all the event listeners needed
  CarLot.activateEvents(carsDiv);
}

// Load the inventory and send a callback function to be
// invoked after the process is complete
CarLot.loadInventory(populatePage);


console.log("COOL MAIN");
