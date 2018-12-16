// const getProfiles = async () => {
//     let res = await fetch('http://localhost:3000/profile');
//     return res.json();
// }

// const createObject = (data) => {
//     let obj = document.createElement('li')
//     obj.className = "border"
//     obj.innerText = data;
//     return obj;
// }

// let ul = document.createElement('ul');


// getProfiles().then(res => {
//     res.forEach(element => {
//         console.log(element)
//         ul.appendChild(createObject(`${element.id} - ${element.name}`))
//     });
// })

// document.querySelector('main').appendChild(ul)


// const component = {
//     sayHello: function (name) {
//         alert('hi from component' + name)
//     }
// }

// const btn = document.querySelector('#btn')
// btn.addEventListener('click', component.sayHello.bind(this, 'rahul'))

window.onload = () => {
    document.querySelector('form').addEventListener('click', _ => {
        var obj = {
            checkbox: [],
            radio: '',
            select: ''
        }

        document.querySelectorAll('input[type="checkbox"]').forEach(itm => {
            if (itm.checked) {
                obj.checkbox.push()
            }
        })

        document.querySelectorAll('input[type="radio"]').forEach(_ => {

        })

        document.querySelector('select').value

        document.querySelector('p.data').innerText = "sdfsdf";
    })
}