function potencia(base, exponente) {
    potencia = 1;
    for (i = 1; i <= exponente; i++)    {
        potencia = potencia * base;
    }
    return potencia;
}
    
base = prompt ("cual es la base")
exponente = prompt ("cual es el exponente")


resul = potencia(base, exponente); 

texto = "el"+" " + "resultado" + " " + "obtenido"+" "+ "es" + " "+ resul
alert(texto)


