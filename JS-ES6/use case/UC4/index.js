// Model


class Profile {
    constructor(name, city) {
        Profile.nextId++;
        this.id = Profile.nextId; // auto_increment
        this.name = name;
        this.city = city;
    }
}
Profile.nextId = 0;
// Service
class ProfileService {
    constructor() {
        this.url = 'http://localhost:3000/profile';
    }

    async save(name, city) {
        try {
            let apiData = await this.findAll();
            Profile.nextId = apiData.length;

            let data = new Profile(name, city)
            let res = await fetch(this.url, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            return res.json();

        } catch (error) {
            throw error
        }
    }
    async findAll() {
        try {
            let res = await fetch(this.url)
            return res.json();
        } catch (error) {
            throw error
        }
    }

    async findById(id) {
        try {
            let res = await fetch(`${this.url}?id=${id}`)
            return res.json();
        } catch (error) {
            throw error
        }
    }

    async update(id, name, city) {
        try {
            let data = new Profile(name, city)
            let res = await fetch(`${this.url}/${id}`, {
                method: 'PATCH',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            return res.json();
        } catch (error) {
            throw error
        }

    }

    async remove(id) {
        try {
            let res = await fetch(`${this.url}/${id}`, {
                method: 'DELETE'
            })
            return res.json();
        } catch (error) {
            throw error
        }
    }
}


class ProfileComponent {

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
let component = new ProfileComponent(new ProfileService())

component.findAll().then(res => console.log(res))