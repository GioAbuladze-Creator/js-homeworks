function CoffeeMachine(power) {
    this.waterAmount = 0;
    var WATER_HEAT_CAPACITY = 4200;
    var self = this;
    var timerId;

    function getBoilTime() {
        return self.waterAmount * WATER_HEAT_CAPACITY * 80 / power;
    }

    function onReady() {
        console.log('Coffee is ready');
    }

    this.run = function () {
        timerId = setTimeout(onReady, getBoilTime());
    };

    this.stop = function(){
        clearTimeout(timerId);
        console.log("coffee isn't ready")
    }
    
}
var coffeeMachine = new CoffeeMachine(50000);
coffeeMachine.waterAmount = 200;
coffeeMachine.run();
coffeeMachine.stop(); // coffee isn't ready