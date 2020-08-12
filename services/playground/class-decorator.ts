// class-decorator la mot function
// function nay co tham so la constructor cua class

// function SeltDriving(constructor:Function) {
//     console.log("class Decorator")
//     constructor.prototype.seltDrivable = true;
// }

// @SeltDriving
// class Car {
//     public seltDrivable: boolean;
//     constructor() {
//         console.log("initialize car instance")
//     }
// }

// Decorator chay truoc ca? constructor cua class

function Wheels(number) {
    return function(constructorFunction:Function) {
        console.log("class decorator");
        constructorFunction.prototype.wheels = number;
    }
}
@Wheels(4)
class Car {
    wheels: number;
    name: string;
    constructor(name) {
        this.name = name;
    }
}