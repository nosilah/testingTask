const val = document.getElementById('number');
const btn = document.getElementById('btn');
const error = document.getElementById('error');
const listNumbers = document.getElementById('list-numbers')


const arrNum = [];

function getNumberFromInput() {
    return val.value;
}

btn.addEventListener('click', () => {
    const valNum = +val.value;

    if (!isNaN(valNum) && isFinite(valNum) && val.value != '') {
        arrNum.push(valNum)
        addNumberToLiList(valNum)
    } else if (val.value == '') {
        val.classList.add('invalid');
        error.innerHTML = 'Please enter any number';
    } else {
        val.classList.add('invalid');
        error.innerHTML = `${val.value} is  not a number, please enter the number and try again`
    }
    val.value = '';
});

val.onfocus = function () {
    if (this.classList.contains('invalid')) {
        this.classList.remove('invalid');
        error.innerHTML = "";
    }
}

function addNumberToLiList(num) {
    let li = listNumbers.appendChild(document.createElement('li'));
    li.innerHTML = num;
    return li;
}




// function addNumberToList() {
//     for (let i = 0; i < arrNum.length; i++) {
//         creatLiList(arrNum[i])
//     }
// }

function findNearestNumberFibonacci(num) {

    let n = (Math.log(num) +
            Math.log(5 ** 0.5)) /
        (Math.log((1 + 5 ** 0.5) * 0.5));

    n = Math.round(n);


    function createFibonacciNumber(n) {

        return n <= 1 ? n : createFibonacciNumber(n - 1) +
            createFibonacciNumber(n - 2);
    }

    return createFibonacciNumber(n);
}





console.log(findNearestNumberFibonacci(55));