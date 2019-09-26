var Dog = require('./Dog')

class Alaska extends Dog{
    environment(){
        console.log('alaska');
    }
    intro(){
        console.log(this.name);
    }
    eat(food){
        console.log(food);
    }
}
module.exports = Alaska;