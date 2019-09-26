var Animal = require('./Animal')
class Dog extends Animal{
    constructor(name,cost){
        super(name,cost);
    }
    swing(){
        console.log('u u');
    }
    playgame(){
        console.log('gau gau');
    }
    color(){
        console.log('white');
    }
}

module.exports = Dog;
