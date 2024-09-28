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

    dosomething(){
        console.log("This is dosomething from 2")
    }
}

var korim = new User2;

console.log(korim.dosomething())