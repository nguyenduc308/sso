//@target
//@propertyKey
//@descriptor

function MinimumFuel(fuel) {
    return function(target:any, propertyKey: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = function(...args:any[]) {
            if(this.fuel > fuel) {
                originalMethod.apply(this, args)
            } else {
                console.log("not enough")
            }
        }
    }
}

class Rocket {
    fuel = 80;
    
    @MinimumFuel(100)
    lauchToMars() {
        console.log("lauching mars")
    }
    @MinimumFuel(50)
    lauchToMoon() {
        console.log("lauching moon")
    }
}

const rocket = new Rocket()

rocket.lauchToMars()