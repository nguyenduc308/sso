class Validator {
    static keys: string[] = [];
    static positiveMap: Map<any, string[]> = new Map();

    static registerPositiveMap(target:any, propertyKey: string):void {
        this.keys.push(propertyKey);
        this.positiveMap.set(target, this.keys);
    }
    static validate(target: any) {
        let positiveProps: string[] = this.positiveMap.get(Object.getPrototypeOf(target))
        if(!positiveProps) return true;
        const err = [];
        for(const propertyKey of positiveProps) {
            const value = target[propertyKey];
            if(value <= 0) {
                err.push(`${propertyKey} is not positive`)
            }
        }
        if(err.length > 0) {
            return err.join();
        }
        return true;
    }
}
// la function co 2 them so
// @target => class
// @propertyKey => ten cua key

function IsPositive(target: any, propertyKey: string) {
    console.log("validate")
    Validator.registerPositiveMap(target, propertyKey);

}
class Bycle {
    @IsPositive
    velocity: number;
    @IsPositive
    acceleration: number;
    constructor(velocity, acceleration) {
        this.velocity = velocity;
        this.acceleration = acceleration;
    }
}

const by = new Bycle(-19, 19);
Validator.validate(by)