const { uuid } = require('uuidv4')

const contacts = [
  {
    id: uuid(),
    name: "Maria Teste",
    email: "email@email.com",
    phone: '321321321',
    category_id: uuid()
  },
  {
    id: uuid(),
    name: "Joao Teste",
    email: "joao@email.com",
    phone: '222222222',
    category_id: uuid()
  },
  {
    id: uuid(),
    name: "José Teste",
    email: "jose@email.com",
    phone: '4555555555',
    category_id: uuid()
  }
]

class ContactsRepository {
  findAll() {
    return new Promise((resolve) => {
      resolve(contacts)
    });
  }
}

module.exports = new ContactsRepository();
