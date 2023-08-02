function CoffeeMachine(power, capacity) {
    var waterAmount = 0;
    var WATER_HEAT_CAPACITY = 4200;

    function getTimeToBoil() {
        return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
    }

    this.getWaterAmount = function () {
        return waterAmount;
    };

    this.setWaterAmount = function (amount) {
        if (amount < 0) {
            throw new Error("Value has to be positive");
        }
        if (amount > capacity) {
            throw new Error("You can't put more water, than " + capacity);
        }
        waterAmount = amount;
    };

    function onReady() {
        console.log('Coffee is ready');
    };

    this.setOnReady = function (callback) {
        if (typeof callback === 'function') {
            onReady = callback;
        } else {
            throw new Error("onReady must be a function");
        }
    };


    this.run = function () {
        setTimeout(()=>onReady(), getTimeToBoil());
    };

}
var coffeeMachine = new CoffeeMachine(20000, 500);
coffeeMachine.setWaterAmount(150);

coffeeMachine.run();

coffeeMachine.setOnReady(function () {
    var amount = coffeeMachine.getWaterAmount();

    console.log('Coffee is ready: ' + amount + 'ml'); // Coffee is ready: 150 ml
});

coffeeMachine.run();