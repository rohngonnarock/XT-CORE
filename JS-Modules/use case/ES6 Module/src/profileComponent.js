export default class ProfileComponent {

    constructor(service) {
        this.service = service;
    }
    save(name, city) {
        return this.service.save(name, city)
    }

    findAll() {
        return this.service.findAll();
    }

    findById(id) {
        return this.service.findById(id)
    }

    update(id, name, city) {
        return this.service.update(id, name, city)
    }

    remove(id) {
        return this.service.remove(id)
    }
}