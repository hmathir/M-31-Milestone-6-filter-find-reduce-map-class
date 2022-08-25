class CommonItems{
    nameOfOwner;
    model;
    PurchaseReason;
    useCase;
    constructor(ownerName, modelName, PurchaseReason, useCase){
        this.nameOfOwner = ownerName;
        this.model = modelName;
        this.PurchaseReason = PurchaseReason;
        this.useCase = useCase;
    }
    feedBack(feedback){
        console.log(`Thanks ${this.nameOfOwner} for your ${feedback}`);
    }
}

class Vehicle extends CommonItems{
    nameOfVehicle;
    wheel;
    constructor(ownerName, modelName, PurchaseReason, useCase, vehicalName, wheelCount){
        super(ownerName, modelName, PurchaseReason, useCase)
        this.nameOfVehicle = vehicalName;
        this.wheel = wheelCount;
    }

}

class House extends CommonItems{
    nameOfHouse;
    land;
    constructor(ownerName, modelName, PurchaseReason, useCase, houseName, landName){
        super(ownerName, modelName, PurchaseReason, useCase)
        this.nameOfHouse = houseName;
        this.land = landName;
    }
}

const newHouse = new House('ATHIR', 'Duplex', 'Stay', 'Permanent', 'Nitu Nir', '12 Sqr');
console.log(newHouse);
newHouse.feedBack('5 Star Review');

const newVehicle = new Vehicle('HM Athir', '4Gen', 'Travell', 'Permanent', 'Tesla', '4 Wheel');
console.log(newVehicle);
newVehicle.feedBack('Check')