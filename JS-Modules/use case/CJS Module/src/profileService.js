let Profile = require('./profile');

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

module.exports = ProfileService