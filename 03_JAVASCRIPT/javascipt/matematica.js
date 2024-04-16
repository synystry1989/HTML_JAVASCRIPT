function calcular()
{
    let numero=Number(window.prompt("Ingrese un número:"))

    let output=document.querySelector("section#resultado")

    output.innerHTML=`<p> O número que escreveu foi o ${numero}</p><br>`

    output.innerHTML+=`<p>o numero absoluto é ${Math.abs(numero)}</p>`

    output.innerHTML+=`<p>o numero inteiro é ${Math.trunc(numero)}</p>`

    output.innerHTML+=`<p>a raiz quadrada é ${Math.sqrt(numero)}</p>`
//mathround  arredonda para cima ou pra baixo
    output.innerHTML+=`<p>a raiz cubica é ${Math.round(Math.cbrt(numero))}</p>`

    output.innerHTML+=`<p>o numero é ${numero} <sup>4</sup> é ${Math.pow(numero,4)}</p>`




    


}   