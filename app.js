// function NameHello(name) {

//    name = prompt("Введите имя")
//    if (name){
//       alert(`Привет, ${name} !`)
//    res = document.querySelector('.result').innerHTML = `Привет ${name}`
//    }
//    else{
//       alert('Введите имя')
//    }
// }

let op;

function func() {
   let result;
   let num1 = +document.getElementById('num1').value
   let num2 = +document.getElementById('num2').value
   switch (op) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        result = num1 / num2;
        break;
    }

    document.getElementById("result").innerHTML = result;
}
