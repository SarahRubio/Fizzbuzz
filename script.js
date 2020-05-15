function fizzBuzz (x) {
      if (x === "") {
        document.querySelector('.resultat').value = ('Entrez un nombre!');
      }
      else if (Number.isInteger((x / 3)+(x / 5))) {
        // ou if (Number.isInteger(x /15)) { (on met 15 car on cherche un nombre divisible par 3 et 5 or 3 x 5 = 15)
        // ou if (Number.isInteger(x /3) && Number.isInteger(x/5)) {
        document.querySelector('.resultat').value = ('FizzBuzz ☄️!');
        console.log(x);
      }

      else if (Number.isInteger(x / 3)) {
        document.querySelector('.resultat').value = ('Fizz');
      }
      else if (Number.isInteger(x / 5)){
        document.querySelector('.resultat').value = ('Buzz');
      }
      else {
        document.querySelector('.resultat').value = x;
      }
}

document.querySelector('.fizz').addEventListener('input', function () {
  let x = document.querySelector('.fizz').value
  fizzBuzz(x)
});
