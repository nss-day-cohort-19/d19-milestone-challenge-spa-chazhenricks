console.log("EVENTHANDLERS SHIT");
  var selectors = ""

var CarLot = (function (cars) {

  cars.activateEvents  = function (inventory) {
        selectors = inventory.getElementsByTagName("article");
        for (var i=0;i<selectors.length;i++){
          selectors.item(i).addEventListener("click", function(event){
            event.currentTarget.classList.toggle("bordered");
            console.log(event);
          })
        }
  };

  return cars;


})(CarLot || {});
