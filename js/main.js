let edad = Number(prompt("Cuantos años tienes?"))
const confirmacion = "Se ha agregado un pack a tu carrito"
const seeu = "podés volver en " + (18 - edad) + " años!!!!"


if (edad < 18) {
    alert("Lo sentimos, no podemos vender alcohol a menores de edad")
    alert(seeu)
    // No se como hacer para cortar acá! 
} else (edad >= 18); {
    let tipo = prompt("Que tipo de cerveza te gusta?")

    if (tipo != "") {
        switch (tipo.toUpperCase()) {

            case "RUBIA":
                let rubia = prompt("Tenemos: Cream ale, weisse y belgian. Cual prefieres?");

                switch (rubia.toUpperCase()) {
                    case "CREAM ALE":
                        alert(confirmacion);
                        break;

                    case "WEISSE":
                        alert(confirmacion);
                        break;

                    case "BELGIAN":
                        alert(confirmacion);
                        break;

                    default:
                        alert("No disponemos ese estilo");
                        alert("Buenas Birras!!")
                        break;
                } 
                break;

            case "NEGRA":
                let negra = prompt("Tenemos: Porter y Milk Stout. Cual prefieres?");

                switch (negra.toUpperCase()) {
                    case "PORTER":
                        alert(confirmacion);
                        break;

                    case "MILK STOUT":
                        alert(confirmacion);
                        break;

                    default:
                        alert("No disponemos ese estilo");
                        break;
                }
            default:
                alert("Buenas Birras! :)")
                break;
        }
    }
}







