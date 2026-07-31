
function sum(...numbers) {
    return numbers.reduce((s, i) => s + i, 0);
}

function add(...numbers) {
    var total = 0;
    for (var i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }
    return total;
}
export { sum,add };