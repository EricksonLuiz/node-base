const ContactsRepository = require('../repositories/ContactsRepository')

class ContactController {
  async index(request, response) {
    const contacts = await ContactsRepository.findAll()

    response.json(contacts)
  }

  async show(request, response) {
    const { id } = request.params;
    const contact = await ContactsRepository.findById(id);

    if (!contact) {
      return response.status(404).json({ error: 'Usuário não encontrado!' });
    }

    response.json(contact);
  }

  async store(request, response) {
    const { name, email, phone, category_id, } = request.body;

    if(!name){
      return response.status(400).json({ error: 'Campo Nome é obrigatório.'})
    }

    const contactExists = await ContactsRepository.findByEmail(email);

    if (contactExists) {
      return response.status(400).json({ error: '😬 Usuário já cadastrado com esse email.' })
    }

    const contact = await ContactsRepository.create({
      name, email, phone, category_id,
    })

    response.json(contact)
  }

  update() {


  }

  async delete(request, response) {
    const { id } = request.params;
    const contact = await ContactsRepository.findById(id);

    if (!contact) {
      return response.status(404).json({ error: 'Usuário não encontrado!' });
    }

    await ContactsRepository.delete(id);
    response.sendStatus(204);
  }
}

module.exports = new ContactController();
