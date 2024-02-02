import Swal from "sweetalert2"

export default function validacionMatriz(matriz) {
    let errorMatriz = false
    //comprobar que las columnas tengan el tamaño correcto
    if (matriz.length < 14 || matriz.length > 14) {
        errorMatriz = true
        Swal.fire({
            icon: "error",
            title: "Tamaño de matriz incorrecto (Columnas)",
        });
    }
    else {
        //comprobar que las filas tengas el tamaño correcto
        for (let col = 0; col < 14; col++) {
            if (matriz[col].length < 14 || matriz[col].length > 14) {
                errorMatriz = true
                Swal.fire({
                    icon: "error",
                    title: "Tamaño de matriz incorrecto (Filas)",
                });
                break
            }
        }

        //comprobar que cada celda tenga una sola entrada
        let error = false
        for (let col = 0; col < 14; col++) {
            for (let fila = 0; fila < 14; fila++) {
                if (matriz[col][fila].length != 1) {
                    errorMatriz = true
                    Swal.fire({
                        icon: "error",
                        title: "Rectifique celda de matriz que contenga una sola entrada",
                    });
                    error = true
                    break
                }
            }
            if (error) {
                break
            }
        }
    }
    return errorMatriz
}