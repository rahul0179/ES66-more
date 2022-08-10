class teamMember {
    name;
    desiganition = 'Support Web Dev';
    country = 'bd';
    constructor(name, c) {
        this.name = name;
        this.country = c;
    }

}


class support extends teamMember {

    startSession() {
        console.log('start a support session')
    }
    helpline() {
        console.log('please call- 01793930040')
    }

}

class studentCare extends teamMember {

    buildARoutine(student) {
        console.log(this.name, 'build a routin for', student);
    }
}



class neptuneDev extends teamMember {
    codeEditor;
    constructor(name, address, editor) {
        super(name, address);
        this.codeEditor = editor;
    }
    releaseApp(version) {
        console.log(this.name, 'build a app for', version);
    }
}


const aamir = new support("Aamir Khan", 'ban');
const salman = new support('Salman Khan', 'ind')
const akshay = new support('Akshy kumer', 'usa')
/* aamir.startSession();
salman.startSession();
akshay.helpline(); */
//console.log(aamir, salman, akshay);
const alia = new studentCare('Alia bhatt', 'Mumbai')
//console.log(alia);
const ash = new neptuneDev('Ash', 'mumbai', "android studio");
ash.releaseApp('pok pok')
console.log(ash)

