class lscr {
    name;
    class;
    years;
    constructor(n, c, y) {
        this.name = n;
        this.class = c;
        this.years = y;
    }

}




class student extends lscr {
    roll;
    contact;
    constructor(n, c, y, r, con) {
        super(n, c, y)
        this.roll = r;
        this.contact = con;
    }

    classTeacher() {

        console.log("Md halim")

    }
    group(name) {
        console.log(this.name, 'group is :', name);
    }

}

const rakib = new student('rahul', 10, 2022);
rakib.classTeacher();
console.log(rakib);
const Shakib = new student('Shakib al hasan', 8, 2022, 10532, 01793930040);
rakib.classTeacher();
Shakib.group('scince');
console.log(Shakib);