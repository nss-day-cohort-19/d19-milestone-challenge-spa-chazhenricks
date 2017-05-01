console.log("EVENTHANDLERS SHIT");

var CarLot = (function (cars) {
  var selectors = ""
  var userInput = document.getElementById("user-input");
  var newUserText = "";
  var resetBtn = document.getElementById("reset-btn");

  cars.activateEvents  = function (inventory) {
        selectors = inventory.getElementsByClassName("car");
        for (var i=0;i<selectors.length;i++){
          selectors.item(i).addEventListener("click", function(event){
            var selectedCar = event.currentTarget;
            CarLot.addStyling(selectedCar);
            userInput.focus();
            userInput.value = "";
            newUserText = event.target.closest("article").querySelector(".car-description");
          })
        }

        userInput.addEventListener("keyup", function(){
            CarLot.updateDescription(newUserText);
        });
  };

  cars.resetBtn = function(){
      resetBtn.addEventListener("click", function(){
        CarLot.resetStyle(selectors);
      });
  };


  cars.updateDescription = function (whatToReplace){
    whatToReplace.innerHTML = userInput.value;
  }

  return cars;


})(CarLot || {});
