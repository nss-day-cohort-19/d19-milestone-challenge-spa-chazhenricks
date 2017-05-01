var CarLot = (function(cars){



  cars.addStyling = function(selectedCar){
    selectedCar.classList.toggle("bordered");
  };

cars.resetStyle = function (selectedCar){
    for(var i=0;i<selectedCar.length;i++){
    selectedCar.item(i).classList.remove("bordered");
    }

};


return cars;


})(CarLot || {});
