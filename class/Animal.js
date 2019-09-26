class Animal{
    constructor(name,cost){
        this.name = name;
        this.cost = cost;
    }
    run(){
        console.log(this.name);
        console.log(this.cost);
    }
}
module.exports = Animal;