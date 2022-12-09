

class Car {

    constructor(emoji, speed) {
    this.emoji = emoji;
    this.speed = speed;
    }

addToPage(){
    let marquee = document.createElement("marquee");

    marquee.innerText = this.emoji;
    marquee.scrollAmount = this.speed;
    document.body.appendChild(marquee);

}
}

const car = new Car("🚙", 5 );
car.addToPage();

const Taxi = new Car("🚖", 10);
Taxi.addToPage();


const Benz = new Car("🚘", 15);
Benz.addToPage();


const Ambulance = new Car("🚑", 20);
Ambulance.addToPage();


const Audi = new Car("🚕",25);
Audi.addToPage();

const mustang = new Car("🚑", 30);
mustang.addToPage();


const Gt = new Car("🚕",35);
Gt.addToPage();
