import { useState, useEffect } from "react";

// Ejemplo de recursos legales
const recursosEjemplo = [
  {
    titulo: "Modelo de Contrato de Alquiler",
    descripcion: "Documento base para contratos de alquiler en Bolivia, actualizado a la normativa vigente.",
    portada: "https://img.icons8.com/fluency/96/document.png",
    tipo: "Plantilla de Documento",
    categoria: "Contratos",
    urlVer: "#",
    urlDescargar: "#",
  },
  {
    titulo: "Carta de Renuncia Laboral",
    descripcion: "Modelo de carta de renuncia para trabajadores, listo para personalizar y presentar.",
    portada: "https://img.icons8.com/fluency/96/document--v2.png",
    tipo: "Plantilla de Documento",
    categoria: "Cartas",
    urlVer: "#",
    urlDescargar: "#",
  },
  {
    titulo: "Código Civil Boliviano",
    descripcion: "Documento completo del Código Civil vigente en Bolivia.",
    portada: "https://img.icons8.com/fluency/96/pdf.png",
    tipo: "Documento",
    categoria: "Código Civil",
    urlVer: "#",
    urlDescargar: "#",
  },
  {
    titulo: "Formato de Demanda Civil",
    descripcion: "Plantilla editable para demandas civiles, útil para procesos judiciales comunes.",
    portada: "https://img.icons8.com/fluency/96/document--v1.png",
    tipo: "Plantilla de Documento",
    categoria: "Demandas",
    urlVer: "#",
    urlDescargar: "#",
  },
  {
    titulo: "Guía de Derechos Laborales",
    descripcion: "Resumen de derechos laborales para trabajadores en Bolivia, con ejemplos prácticos.",
    portada: "https://img.icons8.com/fluency/96/pdf.png",
    tipo: "Documento",
    categoria: "Guías",
    urlVer: "#",
    urlDescargar: "#",
  },
  {
    titulo: "Manual de Violencia Familiar",
    descripcion: "Información y pasos legales para casos de violencia familiar, con contactos de ayuda.",
    portada: "https://img.icons8.com/fluency/96/pdf.png",
    tipo: "Documento",
    categoria: "Manuales",
    urlVer: "#",
    urlDescargar: "#",
  },
  {
    titulo: "Formulario de Denuncia Policial",
    descripcion: "Formato oficial para realizar denuncias ante la policía boliviana.",
    portada: "https://img.icons8.com/fluency/96/report-card.png",
    tipo: "Plantilla de Documento",
    categoria: "Formularios",
    urlVer: "#",
    urlDescargar: "#",
  },
  // Agrega más recursos según necesidad
];

const tipos = [
  "Todos",
  "Plantilla de Documento",
  "Documento",
];

const categorias = [
  "Todos",
  "Contratos",
  "Cartas",
  "Código Civil",
  "Demandas",
  "Guías",
  "Manuales",
  "Formularios",
];

const Recursos = () => {
  const [search, setSearch] = useState("");
  const [tipo, setTipo] = useState("Todos");
  const [categoria, setCategoria] = useState("Todos");

  useEffect(() => {
    // Si usas AOS, descomenta:
    // AOS.init({ once: true, duration: 900, offset: 80 });
  }, []);

  const recursosFiltrados = recursosEjemplo.filter((recurso) => {
    const coincideTipo = tipo === "Todos" || recurso.tipo === tipo;
    const coincideCategoria = categoria === "Todos" || recurso.categoria === categoria;
    const coincideBusqueda =
      !search ||
      recurso.titulo.toLowerCase().includes(search.toLowerCase()) ||
      recurso.descripcion.toLowerCase().includes(search.toLowerCase());
    return coincideTipo && coincideCategoria && coincideBusqueda;
  });

  return (
    <div className="w-full min-h-screen bg-[#faf8f2] pb-16">
      <br /><br />
      {/* Header */}
      <section data-aos="fade-up" className="w-full py-16 bg-[#faf8f2]">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 text-gray-900">
            Recursos Legales
          </h2>
          <p className="text-center text-gray-700 mb-8">
            Encuentra y descarga modelos, guías y documentos legales útiles para tus trámites en Bolivia.
          </p>
        </div>
      </section>

      {/* Filtros */}
      <section data-aos="fade-up" className="w-full bg-[#eae8e0] py-8">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row gap-6 items-end">
          <div className="flex flex-col w-full md:w-1/4">
            <label className="mb-2 font-semibold text-gray-800">Tipo</label>
            <select
              className="rounded-lg border border-gray-200 px-4 py-3 bg-white text-gray-700 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-300 transition"
              value={tipo}
              onChange={e => setTipo(e.target.value)}
            >
              {tipos.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>
          <div className="flex flex-col w-full md:w-1/4">
            <label className="mb-2 font-semibold text-gray-800">Categoría</label>
            <select
              className="rounded-lg border border-gray-200 px-4 py-3 bg-white text-gray-700 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-300 transition"
              value={categoria}
              onChange={e => setCategoria(e.target.value)}
            >
              {categorias.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>
          <div className="flex flex-col w-full md:w-1/2">
            <label className="mb-2 font-semibold text-gray-800">Buscar</label>
            <input
              type="text"
              placeholder="Busca por título o descripción..."
              className="rounded-lg border border-gray-200 px-4 py-3 bg-white text-gray-700 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-300 transition"
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* Tarjetas de recursos */}
      <section className="w-full py-12">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {recursosFiltrados.length === 0 && (
            <div className="col-span-full text-center text-gray-500 py-12">
              No se encontraron recursos con esos criterios.
            </div>
          )}
          {recursosFiltrados.map((recurso, idx) => (
            <div
              key={idx}
              data-aos="zoom-in"
              data-aos-delay={idx % 6 * 100}
              className="bg-white border border-yellow-100 rounded-xl p-6 shadow hover:shadow-yellow-200 transition flex flex-col items-center"
            >
              <img
                src={recurso.portada}
                alt={recurso.titulo}
                className="w-20 h-20 rounded-lg object-cover border-4 border-yellow-200 mb-4"
              />
              <h3 className="text-lg font-bold text-gray-900 mb-1 text-center">{recurso.titulo}</h3>
              <div className="text-sm text-gray-700 mb-2 text-center">{recurso.descripcion}</div>
              <div className="flex flex-row gap-2 mt-2">
                <a
                  href={recurso.urlVer}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 text-xs font-semibold bg-amber-300/80 text-gray-900 rounded hover:bg-amber-400 transition"
                >
                  Ver
                </a>
                <a
                  href={recurso.urlDescargar}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 text-xs font-semibold bg-yellow-100 text-gray-900 rounded hover:bg-yellow-200 transition"
                >
                  Descargar
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Recursos;