function suma(num1, num2) {
    return num1 + num2;
}

console.log("Resultados la suma")
console.log(suma(2,3)); 
console.log(suma(4,4)); 
console.log(suma(-10,10)); 

function elevarAlCubo(num){
    return num ** 3;
}

console.log("Resultados de elevar al cubo")
console.log(elevarAlCubo(3)); 
console.log(elevarAlCubo(99)); 

function restoDivisionEntera(num1,num2){
    return num1 % num2;
}

console.log("Resultados del resto")
console.log(restoDivisionEntera(1,3)); 
console.log(restoDivisionEntera(2,3)); 
console.log(restoDivisionEntera(3,3)); 
console.log(restoDivisionEntera(4,3)); 

function numeroPi(){
    return Math.PI;
}

console.log("Resultado de numero PI")
console.log(numeroPi())

function numeroRandom(){
    return Math.random();
}

console.log("Resultados de numero random")
console.log(numeroRandom())
console.log(numeroRandom())
console.log(numeroRandom())

    if(num1<num2){
        return Math.random()*(num2-num1) + num1;
    }else if(num1>num2){
        return Math.random()*(num1-num2) + num2;
    }else{
        return num1;
    }

console.log("Resultados de numero ramdom de n-n")
console.log(numeroRandomDesdeHasta(1,6))
console.log(numeroRandomDesdeHasta(2,5))
console.log(numeroRandomDesdeHasta(3,4))

function esPar(num){
    return (num%2 == 0);
}

console.log("Resultados de si es par")
console.log(esPar(4)); 
console.log(esPar(5)); 
console.log(esPar(0)); 
console.log(esPar(-2)); 

function esPositivo(num){
    return (num >! 0);
}

console.log("Resultados de si es positivo")
console.log(esPositivo(4)); 
console.log(esPositivo(-3)); 
console.log(esPositivo(0)); 

function clasificarNumero(num){
    return  "El numero " + num + ((num%2 == 0) ? " es par" : " es impar") + " y " + ((num > 0) ? "es positivo" : (num < 0) ? "es negativo" : "no positivo");
}

console.log("Resultados de clasificar numero")
console.log(clasificarNumero(4)); 
console.log(clasificarNumero(-3));
console.log(clasificarNumero(0)); 

function hacerMayuscula(texto){
    return texto.toUpperCase();
}

console.log("Resultados de convertir a mayuscula")
console.log(hacerMayuscula("Plataformas Moviles"))
console.log(hacerMayuscula("ejemplo"))
console.log(hacerMayuscula("hola"))

function primeraLetra(texto){
    return texto.charAt(0);
}

console.log("Resultados de la primera letra")
console.log(primeraLetra("plataformas moviles"))
console.log(primeraLetra("ejemplo"))
console.log(primeraLetra("hola"))

function sinPrimeraLetra(texto){
    return texto.slice(1);
}

console.log("Resultados de sacar primera letra")
console.log(sinPrimeraLetra("plataformas moviles"))
console.log(sinPrimeraLetra("ejemplo"))
console.log(sinPrimeraLetra("hola"))

function primeraLetraMayuscula(texto){
    return texto.charAt(0).toUpperCase() + texto.slice(1);
}

console.log("Resultados de convertir mayuscula primera letra")
console.log(primeraLetraMayuscula("plataformas moviles"))
console.log(primeraLetraMayuscula("ejemplo"))
console.log(primeraLetraMayuscula("hola"))

function terminaCon(texto, buscar){
    return texto.endsWith(buscar);
}

console.log("Resultados de si termina con")
console.log(terminaCon("hola", "a")); 
console.log(terminaCon("pagina", "o")); 
console.log(terminaCon("ejemplo", "plo")); 
console.log(terminaCon("ejemplo", "pol")); 

function palabraInvertida(texto){
    return texto.split("").reverse().join("");
}

console.log("Resultados de  la palabra invertida")
console.log(palabraInvertida("plataformas moviles"))
console.log(palabraInvertida("ejemplo"))
console.log(palabraInvertida("hola"))