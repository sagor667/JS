class User {
    constructor() {
        this.name = "Sagor",
        this.age = 34
    }

    dosomething() {
        console.log("Do something")
    }
}

class User2 extends User{
    constructor(){
        super();
        this.name = "Hosen"
        this.game = "football",
        this.gender = "male"
    }
}

var korim = new User2;

console.log(korim.dosomething())