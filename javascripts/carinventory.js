var CarLot = (function (cars) {
  var inventory = [];

    cars.loadInventory = function (callback) {
      var inventoryLoader = new XMLHttpRequest();

      inventoryLoader.open("GET", "inventory.json");
      inventoryLoader.send();

      inventoryLoader.addEventListener("load", function (event) {
        inventory = JSON.parse(this.responseText);
        callback(inventory);
      });
    }

    return cars;

})(CarLot || {});
