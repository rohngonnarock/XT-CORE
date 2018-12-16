var a = 10;

function test() {
    console.log(a)
    a = 20;

    function a() {}

    console.log(a)
}

test();
console.log(a);