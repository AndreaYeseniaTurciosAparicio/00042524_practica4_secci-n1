function recordatorio(dia = document.getElementById("txt").value) {
    
    if (typeof dia !== "string") {
        console.log("debe ingresar una cadena de texto");
    } else {
        switch (dia) {
            case "Lunes":
                console.log("Los Lunes debo atender un cliente especifico.");
                break;
            case "Martes":
                console.log("Los Martes visito una agencia fuera de la ciudad.");
                break;
            case "Miercoles":
                console.log("Los Miércoles debo llevar a mi hija al ballet (balé).");
                break;
            case "Jueves":
                console.log("Jueves debo priorizar entregas de desarrollo.");
                break;
            case "Viernes":
                console.log("Viernes debo atender problemas de manera remota.");
                break;
            case "Sabado":
                console.log("Sábado debo hacer lo que mi esposa quiera.");
                break;
            default:
                console.log("nada programado");
        }
    }

}
