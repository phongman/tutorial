class Employees{
    constructor(name,age,salary){
        this.name = name;
        this.salary = salary;
        this.age = age;
    }
}
var data = [];
for(var i=0; i<10000; i++){
    var person = new Employees('Employee'+i,i,1000+i);
    data.push(person);
}

module.exports = data;