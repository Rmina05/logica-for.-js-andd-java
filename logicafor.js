var estadocivil = 0,
    edad = 0,
    estatura = 0,
    sexo = 0,
    promedioedad = 0,
    promedioestatura = 0,
    porcentajepersonas = 0,
    contadorpersonas = 0,
    acumuladoredad = 0,
    acumulardorestatura = 0,
    cantidadpersonas = 2;

for (let numeroPersonas = 1; numeroPersonas <= cantidadpersonas; numeroPersonas++) {
    edad = parseFloat(prompt("Ingrese la edad de la persona " + numeroPersonas));
    estadocivil = parseFloat(prompt("Ingrese el estado civil de la persona " + numeroPersonas + "  1. Soltero   2. Casado"));
    estatura = parseFloat(prompt("Ingrese la estatura de la persona " + numeroPersonas + " en cms"));
    sexo = parseFloat(prompt("Ingrese el sexo de la persona " + numeroPersonas + "  1. Hombre    2. Mujer"));

    if ((edad >= 18) && (estadocivil == 1) && (estatura > 170) && (sexo == 1)) {
        contadorpersonas++;
        acumuladoredad += edad;
        acumulardorestatura += estatura;
    }
}

if (contadorpersonas > 0) {
    promedioedad = acumuladoredad / contadorpersonas;
    promedioestatura = acumulardorestatura / contadorpersonas;
    porcentajepersonas = (contadorpersonas / cantidadpersonas) * 100;

    alert("El promedio de edad de las personas que cumplen es: " + promedioedad + " años");
    alert("El promedio de estatura de las personas que cumplen es: " + promedioestatura + " centímetros");
    alert("El porcentaje de personas que cumplen es: " + porcentajepersonas + " %");
} else {
    alert("Ninguna persona cumple con los criterios establecidos.");
}
