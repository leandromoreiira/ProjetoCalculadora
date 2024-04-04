function soma()
{
    let n1          = document.getElementById('number1').value; // busca dos valores digitados pelo usuario
    let n2          = document.getElementById('number2').value;
    let resultado   = parseFloat(n1) + parseFloat(n2); // trasnforma em tipo numerico
    let soma        = document.getElementById('resultado'); // atribui o resultado a uma variavel
    soma.innerHTML  = `O resultado é ${resultado}`; // exibe uma variavel no html
}
function sub ()
{
    let n1          = document.getElementById('number1').value;
    let n2          = document.getElementById('number2').value;
    let resultado   = parseFloat(n1) - parseFloat (n2);
    document.getElementById('resultado').innerHTML  = `O resultado é ${resultado}` // simplifica o código
}
function div()
{
    let n1           = document.getElementById('number1').value;
    let n2           = document.getElementById('number2').value;
    let resultado    = parseFloat(n1)/parseFloat(n2);
    document.getElementById('resultado').innerHTML = `O resultado da sua divisão é ${resultado}`
}
function mult()
{
    let n1          = document.getElementById('number1').value;
    let n2          = document.getElementById('number2').value;
    let resultado   = parseFloat(n1)*parseFloat(n2);
    document.getElementById('resultado').innerHTML = `O resultado da sua multiplicação é ${resultado}`
}
