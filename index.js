//const contacts = require('./contacts');

// Example of testing each function:
//async function testFunctions() {
//  console.log(await contacts.listContacts());
//  console.log(await contacts.getContactById('1'));
//  console.log(await contacts.addContact('Mango', 'mango@gmail.com', '322-22-22'));
//  console.log(await contacts.removeContact('1'));
//}

//testFunctions();
const contacts = require('./contacts');
const { Command } = require('commander');
const program = new Command();

program
  .option('-a, --action <type>', 'choose action')
  .option('-i, --id <type>', 'user id')
  .option('-n, --name <type>', 'user name')
  .option('-e, --email <type>', 'user email')
  .option('-p, --phone <type>', 'user phone');

program.parse(process.argv);
const argv = program.opts();

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case 'list':
      console.table(await contacts.listContacts());
      break;

    case 'get':
      console.log(await contacts.getContactById(id));
      break;

    case 'add':
      console.log(await contacts.addContact(name, email, phone));
      break;

    case 'remove':
      console.log(await contacts.removeContact(id));
      break;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}

invokeAction(argv);

