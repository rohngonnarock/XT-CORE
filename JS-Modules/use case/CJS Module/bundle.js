(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
let profileComponent = require('./src/profileComponent');
let profileService = require('./src/profileService');

let component = new profileComponent(new profileService())

component.findAll().then(res => console.log(res))

component.save('name', 'city')
},{"./src/profileComponent":3,"./src/profileService":4}],2:[function(require,module,exports){
class Profile {
    constructor(name, city) {
        Profile.nextId++;
        this.id = Profile.nextId; // auto_increment
        this.name = name;
        this.city = city;
    }
}

Profile.nextId = 0;

module.exports = Profile;
},{}],3:[function(require,module,exports){
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

module.exports = ProfileComponent
},{}],4:[function(require,module,exports){
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
},{"./profile":2}]},{},[1]);
