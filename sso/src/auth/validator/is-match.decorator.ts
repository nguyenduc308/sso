import { ValidatorConstraint, ValidatorConstraintInterface, ValidationArguments, ValidationOptions, registerDecorator } from "class-validator";

@ValidatorConstraint({name: 'IsMatch'})
export class MatchConstraint  implements ValidatorConstraintInterface {
    validate(value: any, arg: ValidationArguments) {
        const [relatedPropertyName] = arg.constraints;
        const relatedValue = (arg.object as any)[relatedPropertyName];
        return value = relatedPropertyName;
    }
}

export function IsMatch(property: string, validationOptions?: ValidationOptions) {
    return (object: any, propertyName: string) => {
        return registerDecorator({
            target: object.constructor,
            propertyName,
            options: validationOptions,
            constraints: [property],
            validator: MatchConstraint
        })
    }
}