const { v4 } = require('uuid')

//Lista de contatos, futuramente sera carregado do banco de dados
let contacts = [
  {
    id: v4(),
    name: "Maria Teste",
    email: "email@email.com",
    phone: '321321321',
    category_id: v4()
  },
  {
    id: v4(),
    name: "Joao Teste",
    email: "joao@email.com",
    phone: '222222222',
    category_id: v4()
  },
  {
    id: v4(),
    name: "José Teste",
    email: "jose@email.com",
    phone: '4555555555',
    category_id: v4()
  }
]

class ContactsRepository {

  findAll() {
    return new Promise((resolve) => {
      resolve(contacts)
    });
  }

  findById(id) {
    return new Promise((resolve) => resolve(
      contacts.find((contact) => contact.id === id),
    ))
  }

  delete(id) {
    return new Promise((resolve) => {
      contacts = contacts.filter((contact) => contact.id !== id)
      resolve()
    })
  }
  
  findByEmail(email) {
    return new Promise((resolve) => resolve(
      contacts.find((contact) => contact.email === email),
    ))
  }

  create({
    name, email, phone, category_id
  }) {
    return new Promise((resolve) => {
      const newContact = {
        id: v4(),
        name,
        email,
        phone,
        category_id
      };
      contacts.push(newContact);
      resolve(newContact)
    })
  }
}

module.exports = new ContactsRepository();
