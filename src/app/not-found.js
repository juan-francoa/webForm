import Link from "next/link"

export default function NotFound() {

    return (
        <div className="flex flex-col justify-center items-center min-h-screen">
            <h1 className="text-white mb-2">
                Error en la pagina
            </h1>
            <Link href="/">
                <button
                    className="bg-white hover:bg-gray-700 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    Regresar
                </button>
            </Link>
        </div>
    )
}