class Train {
    constructor(color, lightsOn) {
        this.color = color;
        this.lightsOn = lightsOn;
    }

    //This class will have 4 properties
    toggleLights() {
        this.lightsOn = !this.lightsOn;
    }
    lightsStatus() {
        console.log('Lights on?', this.lightsOn);
    }
    getSelf() {
        console.log(this);
    }
    getPrototype() {
        var proto = Object.getPrototypeOf(this);
        console.log(proto);
    }
}

//lets create a sub-class that will inherate from the super-class "Train"
class HighSpeedTrain extends Train {
    constructor(passengers, highSpeedOn, color, lightsOn) {
        super(color, lightsOn);
        this.passengers = passengers;
        this.highSpeedOn = highSpeedOn;
    }
    toggleHighSpeed() {
        this.highSpeedOn = !this.highSpeedOn;
        console.log('High speed status:', this.highSpeedOn);
    }
    //The method toggle lighlt from the super-class here impleneted but with slightly different features
    toggleLights() {
        super.toggleLights();
        super.lightsStatus();
        console.log('Lights are 100% operational.');
    }
}






var train4 = new Train('red', false);
//let run its methods to see its behavior 
train4.toggleLights();
train4.lightsStatus();
train4.getSelf();
train4.getPrototype();

var train5 = new Train('blue', false);
var highSpeed1 = new HighSpeedTrain(200, false, 'green', false);



//test behavior tran5
train5.toggleLights();
train5.lightsStatus();
highSpeed1.toggleLights();
highSpeed1.getPrototype();
