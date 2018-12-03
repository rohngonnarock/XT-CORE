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