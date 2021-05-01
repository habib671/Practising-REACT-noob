let arr = [1,2,3,4,5];
let squares = arr.map(function(item){
    return item*item;
})
console.log(squares);

let cubes = arr.map(item => item*item*item);
console.log(cubes);