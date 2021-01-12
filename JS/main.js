
function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por clicar");
}

function redirecionar(){
    //window.open("https://digitalinnovation.one/");
    window.location.href = "https://digitalinnovation.one/";
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passa o mouse";
    elemento.innerHTML = "Obrigado por passa o mouse";
    //alert("trocar texto")
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";  
    elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("pagina carregada")
}

function funcaoChanger(elemento){
    console.log(elemento.value);
}

/*
function soma(n1, n2){
    return n1 + n2;
} */

 
/*
function validaIdade(idade){
    var validar;
    if (idade >= 18){
        validar = true
    } else{
        validar = false
    }
    return validar;
}

var idade = prompt("Qual sua idade?");
console.log(validaIdade(idade));

function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)
}
*/


//alert(soma(5, 10));
//alert(setReplace("Vai japão", "Japão", "Brasil"));


/*
var d = new Date();
//alert(d.getMonth()+1);
//alert(d.getMinutes());
//alert(d.getDay());
alert(d.getHours());
*/

/*
var count;
for(count=0; count <= 9; count++){
    alert(count);
}
*/
/*
var count = 0;
while (count <= 5){
    console.log(count);
    //count = count + 1;
    count++;
}
*/

/*
var idade = prompt("qual sua idade?");
if (idade >= 18){
    alert("maior de idade");
}
else{
    alert("menor de idade");
}
*/



/*
var frutas = [{nome:"Melancia", cor:"Verde"}, {nome:"Uva", cor:"Roxa"}]
console.log(frutas);
alert(frutas[1].nome)
*/

/*
var fruta = {nome:"Melancia", cor:"Verde"}
console.log(fruta.nome);
alert(fruta.cor);
*/

//var lista = ["Laranja", "Pera", "Melancia"];
//lista.push("Uva");
//lista.pop()

//console.log(lista);
//console.log(lista.toString());
//console.log(lista.join(" - "))


//var name = "Pricila Ribeiro";
//var n1 = 17;
//var n2 = 10;
//var frase = "Japão é o melhor time do mundo";
//alert( name + " tem " + idade);
//alert (n1 + n2);
//console.log(name);
//console.log(idade+idade2)
//console.log(frase.replace("Japão","Brasil"));
//alert(frase.replace("Japão","Brasil"));
