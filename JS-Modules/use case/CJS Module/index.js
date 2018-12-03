let profileComponent = require('./src/profileComponent');
let profileService = require('./src/profileService');

let component = new profileComponent(new profileService())

component.findAll().then(res => console.log(res))