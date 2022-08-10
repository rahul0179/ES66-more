class support {
    name;
    desiganition = 'Support Web Dev';
    country = 'bd';
    constructor(name, c) {
        this.name = name;
        this.country = c;
    }
    startSession() {
        console.log('start a support session')
    }
    helpline() {
        console.log('please call- 01793930040')
    }
}
const aamir = new support("Aamir Khan", 'ban');
const salman = new support('Salman Khan', 'ind')
const akshay = new support('Akshy kumer', 'usa')
aamir.startSession();
salman.startSession();
akshay.helpline();
console.log(aamir, salman, akshay);
