console.log("EVENTHANDLERS SHIT");
  var selectors = ""
  var userInput = document.getElementById("user-input");
  var newUserText = ""

var CarLot = (function (cars) {

  cars.activateEvents  = function (inventory) {
        selectors = inventory.getElementsByClassName("car");
        for (var i=0;i<selectors.length;i++){
          selectors.item(i).addEventListener("click", function(event){
            event.currentTarget.classList.toggle("bordered");
            userInput.focus();
            userInput.value = "";
            newUserText = event.target.closest("article").querySelector(".car-description")
            console.log("newUserText", newUserText);
          })
        }

        userInput.addEventListener("keyup", function(){
            CarLot.updateDescription(newUserText);
        });
  };

  cars.updateDescription = function (whatToReplace){
    whatToReplace.innerHTML = userInput.value;
  }

  return cars;


})(CarLot || {});
