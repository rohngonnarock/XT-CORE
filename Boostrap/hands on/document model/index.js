const getProfiles = async () => {
    let res = await fetch('http://localhost:3000/profile');
    return res.json();
}

const createObject = (data) => {
    let obj = document.createElement('li')
    obj.className = "border"
    obj.innerText = data;
    return obj;
}

let ul = document.createElement('ul');


getProfiles().then(res => {
    res.forEach(element => {
        console.log(element)
        ul.appendChild(createObject(`${element.id} - ${element.name}`))
    });
})

document.querySelector('main').appendChild(ul)