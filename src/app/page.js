'use client'
import { Copse } from "next/font/google";
import validacionMatriz from "@/scripts/validacionMatriz";
import encontrarPalabra from "@/scripts/encontrarPalabra";
import Swal from "sweetalert2";

export default function Home() {
  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      const data = new FormData(event.target);
      let list = data.get("list").split('\n').filter(Boolean);
      let matriz = data.get("matriz").split('\n').filter(Boolean);
      list = list.map(element => element.replace("o", '').replace(/\s/g, ""))
      matriz = matriz.map(element => element.replace(/\s/g, "").split(','))
      if (!validacionMatriz(matriz)) {

        let { encontradas, noEncontradas } = encontrarPalabra(list, matriz)

        Swal.fire({
          icon: "success",
          html: `<h2>Palabras Encontradas:</h2><p>${encontradas.length === 0 ? ("Ninguna") : (encontradas)}</p> <br/><h2>Palabras no encontradas</h2><p>${noEncontradas.length === 0 ? ("Ninguna") : (noEncontradas)}</p>`,
        });
      }
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      }
    }
  };

  return (
    <main className="flex justify-center items-center min-h-screen">
      <div className="w-1/2">
        <form
          onSubmit={handleSubmit}
          id="form"
          method="POST"
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4">
            <h5 className="block text-2xl font-bold mb-2">
              Listado de palabras
            </h5>
            <textarea
              className="shadow appearance-none border rounded w-full pb-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              rows="5"
              placeholder="Listado de palabras "
              name="list"
              required></textarea>
          </div>
          <div className="mb-4">
            <h5 className="block text-2xl font-bold mb-2">Matriz</h5>
            <textarea
              id="message"
              rows="14"
              className="shadow appearance-none border rounded w-full pb-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Tu matriz separada por comas..."
              name="matriz"
              required></textarea>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-[#13151a] hover:bg-gray-700 text-white font-bold pm-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"

            >
              Evaluar
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
