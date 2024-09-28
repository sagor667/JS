class User {
    constructor() {
        this.name = "Sagor",
        this.age = 34
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

console.log(korim)