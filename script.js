// Class - Movie

class Movie {
    constructor(title = '', studio = '', rating = 'PG') {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }

    getPG(movies = [], rating = '') {
        return movies.filter((m) => m.rating === rating);
    }
}
const casionRoyaleMovie = new Movie('Casino Royale', 'Eon Productions', 'PG13');
const leo = new Movie('Leo', 'LCU', 'PG');
const vikram = new Movie('Vikram', 'Vijay', 'PG');
const avatar = new Movie('Avatar: The water way', 'EROS', 'PG');
const avengers = new Movie('The avengers: End Game', 'LCU', 'PG');

const moviesArray = [casionRoyaleMovie, leo, vikram, avatar, avengers];

console.log(casionRoyaleMovie.getPG(moviesArray, 'PG13'));



// -------------------------------------------------------------------------------------------

// uber price

class Uber {
    constructor(baseFare, perMileRate, perMinuteRate) {
        this.baseFare = baseFare;
        this.perMileRate = perMileRate;
        this.perMinuteRate = perMinuteRate;
    }

    calculatePrice(distance, time) {
        let fare = this.baseFare + this.perMileRate * distance + this.perMinuteRate * time;
        return fare;
    }
}

const myUber = new Uber(2.5, 0.8, 0.25);
let price = myUber.calculatePrice(20, 45);
console.log(price);


// ---------------------------------------------------------------------------------------------------------
// Write a “person” class to hold all the details.

class Person {
    constructor(firstName, lastName, age, gender) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.gender = gender;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

const person = new Person("John", "Doe", 32, "Male");
console.log(person.getFullName());
console.log(person.age);
console.log(person.gender);

