import { useState, useEffect } from "react";
//import AOS from "aos";
//import "aos/dist/aos.css";

// Componente para mostrar estrellas de puntaje
const StarRating = ({ rating }: { rating: number }) => (
    <div className="flex items-center gap-0.5">
        {[1, 2, 3, 4, 5].map((star) => (
            <svg
                key={star}
                className={`w-5 h-5 ${star <= rating ? "text-yellow-400" : "text-gray-300"}`}
                fill="currentColor"
                viewBox="0 0 20 20"
            >
                <polygon points="10,2 12.59,7.36 18.51,8.09 14,12.26 15.18,18.09 10,15.27 4.82,18.09 6,12.26 1.49,8.09 7.41,7.36" />
            </svg>
        ))}
    </div>
);

const abogadosEjemplo = [
    // ...tu lista de abogados (igual que antes)...
    {
        nombre: "María López",
        titulo: "Abogada Senior",
        especialidades: ["Derecho Familiar", "Civil"],
        jurisdiccion: "La Paz",
        puntaje: 5,
        foto: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
        nombre: "Carlos Ramírez",
        titulo: "Abogado Laboral",
        especialidades: ["Laboral"],
        jurisdiccion: "Santa Cruz",
        puntaje: 4,
        foto: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
        nombre: "Ana Torres",
        titulo: "Especialista en Derecho Penal",
        especialidades: ["Penal"],
        jurisdiccion: "Cochabamba",
        puntaje: 5,
        foto: "https://randomuser.me/api/portraits/women/65.jpg",
    },
    {
        nombre: "Jorge Castillo",
        titulo: "Abogado Civil y Familiar",
        especialidades: ["Civil", "Familiar"],
        jurisdiccion: "Oruro",
        puntaje: 3,
        foto: "https://randomuser.me/api/portraits/men/41.jpg",
    },
    // Más ejemplos con jurisdicciones de Bolivia
    {
        nombre: "Lucía Hernández",
        titulo: "Abogada de Inmigración",
        especialidades: ["Inmigración"],
        jurisdiccion: "La Paz",
        puntaje: 4,
        foto: "https://randomuser.me/api/portraits/women/50.jpg",
    },
    {
        nombre: "Pedro Gómez",
        titulo: "Abogado Penalista",
        especialidades: ["Penal"],
        jurisdiccion: "Santa Cruz",
        puntaje: 5,
        foto: "https://randomuser.me/api/portraits/men/52.jpg",
    },
    {
        nombre: "Sofía Martínez",
        titulo: "Abogada Laboral",
        especialidades: ["Laboral"],
        jurisdiccion: "Cochabamba",
        puntaje: 4,
        foto: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
        nombre: "Luis Fernández",
        titulo: "Abogado Civil",
        especialidades: ["Civil"],
        jurisdiccion: "Tarija",
        puntaje: 3,
        foto: "https://randomuser.me/api/portraits/men/53.jpg",
    },
    {
        nombre: "Gabriela Ruiz",
        titulo: "Abogada Familiar",
        especialidades: ["Familiar"],
        jurisdiccion: "La Paz",
        puntaje: 5,
        foto: "https://randomuser.me/api/portraits/women/70.jpg",
    },
    {
        nombre: "Miguel Sánchez",
        titulo: "Abogado Corporativo",
        especialidades: ["Corporativo"],
        jurisdiccion: "Santa Cruz",
        puntaje: 4,
        foto: "https://randomuser.me/api/portraits/men/54.jpg",
    },
    {
        nombre: "Patricia Morales",
        titulo: "Abogada Civil",
        especialidades: ["Civil"],
        jurisdiccion: "Cochabamba",
        puntaje: 5,
        foto: "https://randomuser.me/api/portraits/women/71.jpg",
    },
    {
        nombre: "Fernando Díaz",
        titulo: "Abogado Penal",
        especialidades: ["Penal"],
        jurisdiccion: "Oruro",
        puntaje: 2,
        foto: "https://randomuser.me/api/portraits/men/55.jpg",
    },
    {
        nombre: "Valeria Castro",
        titulo: "Abogada de Derechos Humanos",
        especialidades: ["Derechos Humanos"],
        jurisdiccion: "La Paz",
        puntaje: 5,
        foto: "https://randomuser.me/api/portraits/women/72.jpg",
    },
    {
        nombre: "Ricardo Paredes",
        titulo: "Abogado Laboral",
        especialidades: ["Laboral"],
        jurisdiccion: "Santa Cruz",
        puntaje: 4,
        foto: "https://randomuser.me/api/portraits/men/56.jpg",
    },
    {
        nombre: "Elena Vargas",
        titulo: "Abogada Civil y Familiar",
        especialidades: ["Civil", "Familiar"],
        jurisdiccion: "Cochabamba",
        puntaje: 5,
        foto: "https://randomuser.me/api/portraits/women/73.jpg",
    },
    {
        nombre: "Héctor Navarro",
        titulo: "Abogado Penal",
        especialidades: ["Penal"],
        jurisdiccion: "Oruro",
        puntaje: 3,
        foto: "https://randomuser.me/api/portraits/men/57.jpg",
    },
    {
        nombre: "Isabel Romero",
        titulo: "Abogada de Inmigración",
        especialidades: ["Inmigración"],
        jurisdiccion: "La Paz",
        puntaje: 4,
        foto: "https://randomuser.me/api/portraits/women/74.jpg",
    },
    {
        nombre: "Javier Ortega",
        titulo: "Abogado Corporativo",
        especialidades: ["Corporativo"],
        jurisdiccion: "Santa Cruz",
        puntaje: 5,
        foto: "https://randomuser.me/api/portraits/men/58.jpg",
    },
    {
        nombre: "Mónica Salinas",
        titulo: "Abogada Laboral",
        especialidades: ["Laboral"],
        jurisdiccion: "Cochabamba",
        puntaje: 4,
        foto: "https://randomuser.me/api/portraits/women/75.jpg",
    },
    {
        nombre: "Oscar Mendoza",
        titulo: "Abogado Civil",
        especialidades: ["Civil"],
        jurisdiccion: "Tarija",
        puntaje: 3,
        foto: "https://randomuser.me/api/portraits/men/59.jpg",
    },
    {
        nombre: "Paula Jiménez",
        titulo: "Abogada Familiar",
        especialidades: ["Familiar"],
        jurisdiccion: "La Paz",
        puntaje: 5,
        foto: "https://randomuser.me/api/portraits/women/76.jpg",
    },
    {
        nombre: "Raúl Cordero",
        titulo: "Abogado Penal",
        especialidades: ["Penal"],
        jurisdiccion: "Santa Cruz",
        puntaje: 4,
        foto: "https://randomuser.me/api/portraits/men/60.jpg",
    },
    {
        nombre: "Sandra Peña",
        titulo: "Abogada Civil",
        especialidades: ["Civil"],
        jurisdiccion: "Cochabamba",
        puntaje: 5,
        foto: "https://randomuser.me/api/portraits/women/77.jpg",
    },
    {
        nombre: "Tomás Bravo",
        titulo: "Abogado Laboral",
        especialidades: ["Laboral"],
        jurisdiccion: "Oruro",
        puntaje: 3,
        foto: "https://randomuser.me/api/portraits/men/61.jpg",
    },
    {
        nombre: "Úrsula Aguirre",
        titulo: "Abogada Penal",
        especialidades: ["Penal"],
        jurisdiccion: "La Paz",
        puntaje: 4,
        foto: "https://randomuser.me/api/portraits/women/78.jpg",
    },
    {
        nombre: "Víctor Herrera",
        titulo: "Abogado Corporativo",
        especialidades: ["Corporativo"],
        jurisdiccion: "Santa Cruz",
        puntaje: 5,
        foto: "https://randomuser.me/api/portraits/men/62.jpg",
    },
    {
        nombre: "Wendy Flores",
        titulo: "Abogada de Derechos Humanos",
        especialidades: ["Derechos Humanos"],
        jurisdiccion: "La Paz",
        puntaje: 5,
        foto: "https://randomuser.me/api/portraits/women/79.jpg",
    },
    {
        nombre: "Ximena León",
        titulo: "Abogada Civil",
        especialidades: ["Civil"],
        jurisdiccion: "Tarija",
        puntaje: 3,
        foto: "https://randomuser.me/api/portraits/women/80.jpg",
    },
    {
        nombre: "Yahir Soto",
        titulo: "Abogado Laboral",
        especialidades: ["Laboral"],
        jurisdiccion: "La Paz",
        puntaje: 4,
        foto: "https://randomuser.me/api/portraits/men/63.jpg",
    },
    {
        nombre: "Zulema Ponce",
        titulo: "Abogada Penal",
        especialidades: ["Penal"],
        jurisdiccion: "Santa Cruz",
        puntaje: 5,
        foto: "https://randomuser.me/api/portraits/women/81.jpg",
    },
    {
        nombre: "Andrés Vega",
        titulo: "Abogado Civil",
        especialidades: ["Civil"],
        jurisdiccion: "La Paz",
        puntaje: 4,
        foto: "https://randomuser.me/api/portraits/men/64.jpg",
    },
    {
        nombre: "Beatriz Luna",
        titulo: "Abogada Familiar",
        especialidades: ["Familiar"],
        jurisdiccion: "Oruro",
        puntaje: 5,
        foto: "https://randomuser.me/api/portraits/women/82.jpg",
    },
    {
        nombre: "César Ríos",
        titulo: "Abogado Penal",
        especialidades: ["Penal"],
        jurisdiccion: "La Paz",
        puntaje: 3,
        foto: "https://randomuser.me/api/portraits/men/65.jpg",
    },
    {
        nombre: "Diana Solís",
        titulo: "Abogada Laboral",
        especialidades: ["Laboral"],
        jurisdiccion: "Santa Cruz",
        puntaje: 5,
        foto: "https://randomuser.me/api/portraits/women/83.jpg",
    },
    {
        nombre: "Esteban Lozano",
        titulo: "Abogado Civil",
        especialidades: ["Civil"],
        jurisdiccion: "La Paz",
        puntaje: 4,
        foto: "https://randomuser.me/api/portraits/men/66.jpg",
    },
    {
        nombre: "Fabiola Méndez",
        titulo: "Abogada Penal",
        especialidades: ["Penal"],
        jurisdiccion: "Oruro",
        puntaje: 5,
        foto: "https://randomuser.me/api/portraits/women/84.jpg",
    },
    {
        nombre: "Guillermo Reyes",
        titulo: "Abogado Corporativo",
        especialidades: ["Corporativo"],
        jurisdiccion: "La Paz",
        puntaje: 4,
        foto: "https://randomuser.me/api/portraits/men/67.jpg",
    },
    {
        nombre: "Helena Ortiz",
        titulo: "Abogada de Derechos Humanos",
        especialidades: ["Derechos Humanos"],
        jurisdiccion: "Santa Cruz",
        puntaje: 5,
        foto: "https://randomuser.me/api/portraits/women/85.jpg",
    },
    {
        nombre: "Iván Peña",
        titulo: "Abogado Laboral",
        especialidades: ["Laboral"],
        jurisdiccion: "La Paz",
        puntaje: 3,
        foto: "https://randomuser.me/api/portraits/men/68.jpg",
    },
    {
        nombre: "Julieta Campos",
        titulo: "Abogada Civil",
        especialidades: ["Civil"],
        jurisdiccion: "Oruro",
        puntaje: 5,
        foto: "https://randomuser.me/api/portraits/women/86.jpg",
    },
    {
        nombre: "María López",
        titulo: "Abogada Senior",
        especialidades: ["Derecho Familiar", "Civil"],
        jurisdiccion: "La Paz",
        puntaje: 5,
        foto: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    // ...resto de los abogados...
    {
        nombre: "Julieta Campos",
        titulo: "Abogada Civil",
        especialidades: ["Civil"],
        jurisdiccion: "Oruro",
        puntaje: 5,
        foto: "https://randomuser.me/api/portraits/women/86.jpg",
    },
];

const ConsultasJuridicas = () => {
    const [search, setSearch] = useState("");
    const [jurisdiccion, setJurisdiccion] = useState("");
    const [especialidad, setEspecialidad] = useState("");

    useEffect(() => {
        //AOS.init({ once: true, duration: 900, offset: 80 });
    }, []);

    // Filtro simple
    const abogadosFiltrados = abogadosEjemplo.filter((abogado) => {
        const coincideJurisdiccion = !jurisdiccion || abogado.jurisdiccion === jurisdiccion;
        const coincideEspecialidad =
            !especialidad || abogado.especialidades.includes(especialidad);
        const coincideBusqueda =
            !search ||
            abogado.nombre.toLowerCase().includes(search.toLowerCase()) ||
            abogado.titulo.toLowerCase().includes(search.toLowerCase());
        return coincideJurisdiccion && coincideEspecialidad && coincideBusqueda;
    });

    return (
        <div className="w-full min-h-screen bg-[#faf8f2] pb-16">
            <br /><br />
            {/* Header */}
            <section data-aos="fade-up" className="w-full py-16 bg-[#faf8f2]">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 text-gray-900">
                        Conecta con Profesionales Legales
                    </h2>
                    <p className="text-center text-gray-700 mb-8">
                        Encuentra y conecta con abogados y profesionales legales verificados que ofrecen consultas pro-bono o a tarifas reducidas para apoyar a comunidades vulnerables en Bolivia.
                    </p>
                </div>
            </section>

            {/* Filtros */}
            <section data-aos="fade-up" className="w-full bg-[#eae8e0] py-8">
                <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row gap-6 items-end">
                    <div className="flex flex-col w-full md:w-1/4">
                        <label className="mb-2 font-semibold text-gray-800">Jurisdicción</label>
                        <select
                            className="rounded-lg border border-gray-200 px-4 py-3 bg-white text-gray-700 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-300 transition"
                            value={jurisdiccion}
                            onChange={e => setJurisdiccion(e.target.value)}
                        >
                            <option value="">Todas las Jurisdicciones</option>
                            <option value="La Paz">La Paz</option>
                            <option value="Santa Cruz">Santa Cruz</option>
                            <option value="Cochabamba">Cochabamba</option>
                            <option value="Oruro">Oruro</option>
                            <option value="Tarija">Tarija</option>
                        </select>
                    </div>
                    <div className="flex flex-col w-full md:w-1/4">
                        <label className="mb-2 font-semibold text-gray-800">Especialidad</label>
                        <select
                            className="rounded-lg border border-gray-200 px-4 py-3 bg-white text-gray-700 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-300 transition"
                            value={especialidad}
                            onChange={e => setEspecialidad(e.target.value)}
                        >
                            <option value="">Todas las Especialidades</option>
                            <option value="Derecho Familiar">Derecho Familiar</option>
                            <option value="Laboral">Laboral</option>
                            <option value="Civil">Civil</option>
                            <option value="Penal">Penal</option>
                            <option value="Familiar">Familiar</option>
                            <option value="Corporativo">Corporativo</option>
                            <option value="Inmigración">Inmigración</option>
                            <option value="Derechos Humanos">Derechos Humanos</option>
                        </select>
                    </div>
                    <div className="flex flex-col w-full md:w-1/2">
                        <label className="mb-2 font-semibold text-gray-800">Buscar</label>
                        <input
                            type="text"
                            placeholder="Busca por nombre o título..."
                            className="rounded-lg border border-gray-200 px-4 py-3 bg-white text-gray-700 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-300 transition"
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                        />
                    </div>
                </div>
            </section>

            {/* Tarjetas de abogados */}
            <section className="w-full py-12">
                <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {abogadosFiltrados.length === 0 && (
                        <div className="col-span-full text-center text-gray-500 py-12">
                            No se encontraron profesionales con esos criterios.
                        </div>
                    )}
                    {abogadosFiltrados.map((abogado, idx) => (
                        <div
                            key={idx}
                            data-aos="zoom-in"
                            data-aos-delay={idx % 6 * 100}
                            className="bg-white border border-yellow-100 rounded-xl p-6 shadow hover:shadow-yellow-200 transition flex flex-col items-center"
                        >
                            <img
                                src={abogado.foto}
                                alt={abogado.nombre}
                                className="w-20 h-20 rounded-full object-cover border-4 border-yellow-200 mb-4"
                            />
                            <h3 className="text-lg font-bold text-gray-900 mb-1">{abogado.nombre}</h3>
                            <div className="text-yellow-700 font-semibold mb-1">{abogado.titulo}</div>
                            <div className="text-sm text-gray-700 mb-2">
                                <span className="font-semibold">Especialidades: </span>
                                {abogado.especialidades.join(", ")}
                            </div>
                            <div className="text-sm text-gray-700 mb-2">
                                <span className="font-semibold">Jurisdicción: </span>
                                {abogado.jurisdiccion}
                            </div>
                            <StarRating rating={abogado.puntaje} />
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default ConsultasJuridicas;