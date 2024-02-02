export default function encontrarPalabra(list, matriz) {
    let listaEncontrada = []
    let listaNoEncontrada = []
    list.forEach(element => {
        let palabra = element
        let tam = palabra.length - 1
        let encontrada = false

        for (let col = 0; col < 14; col++) {
            if (!encontrada) {
                for (let fila = 0; fila < 14; fila++) {
                    if (matriz[col][fila] === palabra[0] && !encontrada) {

                        //primera posición a evaluar
                        if (col - tam >= 0 && !encontrada) {
                            for (let x = 0; x < tam; x++) {

                                if (palabra[x] === matriz[col - x][fila]) {
                                    encontrada = true
                                }
                                else {
                                    encontrada = false
                                    break
                                }
                            }
                        }
                        //segunda posición a evaluar
                        if (col - tam >= 0 && fila + tam < 14 && !encontrada) {
                            for (let x = 0, y = 0; x < tam, y < tam; x++, y++) {

                                if (palabra[x] === matriz[col - x][fila + y]) {
                                    encontrada = true
                                }
                                else {
                                    encontrada = false
                                    break
                                }
                            }
                        }
                        //tercera posición 
                        if (fila + tam < 14 && !encontrada) {
                            for (let y = 0; y < tam; y++) {

                                if (palabra[y] === matriz[col][fila + y]) {
                                    encontrada = true
                                }
                                else {
                                    encontrada = false
                                    break
                                }
                            }
                        }
                        //cuarta posición
                        if (col + tam < 14 && fila + tam < 14 && !encontrada) {
                            for (let x = 0, y = 0; x < tam, y < tam; x++, y++) {

                                if (palabra[x] === matriz[col + x][fila + y]) {
                                    encontrada = true
                                }
                                else {
                                    encontrada = false
                                    break
                                }
                            }
                        }
                        //Quinta posición
                        if (col + tam < 14 && !encontrada) {
                            for (let x = 0; x < tam; x++) {

                                if (palabra[x] === matriz[col + x][fila]) {
                                    encontrada = true
                                }
                                else {
                                    encontrada = false
                                    break
                                }
                            }
                        }
                        //sexta posición
                        if (col + tam < 14 && fila - tam >= 0 && !encontrada) {
                            for (let x = 0, y = 0; x < tam, y < tam; x++, y++) {

                                if (palabra[x] === matriz[col + x][fila - y]) {
                                    encontrada = true
                                }
                                else {
                                    encontrada = false
                                    break
                                }
                            }
                        }
                        //séptima posición 
                        if (fila - tam >= 0 && !encontrada) {
                            for (let y = 0; y < tam; y++) {

                                if (palabra[y] === matriz[col][fila - y]) {
                                    encontrada = true
                                }
                                else {
                                    encontrada = false
                                    break
                                }
                            }
                        }
                        //octava posición
                        if (col - tam >= 0 && fila - tam >= 0 && !encontrada) {
                            for (let x = 0, y = 0; x < tam, y < tam; x++, y++) {

                                if (palabra[x] === matriz[col - x][fila - y]) {
                                    encontrada = true
                                }
                                else {
                                    encontrada = false
                                    break
                                }
                            }
                        }
                    }
                }
            }

        }
        if (encontrada) {
            listaEncontrada.push(palabra)
        }
        else {
            listaNoEncontrada.push(palabra)
        }
    });

    return { "encontradas": listaEncontrada, "noEncontradas": listaNoEncontrada }
}