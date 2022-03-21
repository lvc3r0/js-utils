var arr = [1, 2, 3, 4, 5, 6, 7];

var x = [];
var list = [];

arr.forEach((e, i) => {
    if (x.length == 0 || e - 1 === x[x.length - 1]) {
        x.push(e);

    } else {
        list.push(x);
        x = [];
        x.push(e);
    }
    if (i == arr.length - 1) {
        list.push(x);
    }
})

console.log(list);