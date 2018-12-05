import ProfileService from './src/profileService'
import ProfileComponent from './src/profileComponent'

let component = new ProfileComponent(new ProfileService())

component.findAll().then(res => console.log(res))

console.log('test')