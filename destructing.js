
const n = { id: 58, name: 'Rahul barman', price: 90000, phone: '01793930040', address: 'shyamoli,road-2,1a/A', dress: 'Black' };
/* const id = n.id;
const name = n.name;
const pNumber = n.phone */;

//const { phone, price, id, name } = n;
/* console.log(id);
console.log(name);
console.log(price);
console.log(phone) */
const company = {
    name: 'GP',
    web: {
        work: 'Web site development',
        employee: 22,
        framework: 'React',
        teach: {
            first: 'html',
            secound: 'css',
            third: 'js'
        }
    }
};

const { name, web } = company;
const { work, employee, framework } = company.web;
const { first, secound, third } = company.web.teach;
console.log(first, secound, third);

