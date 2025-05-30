import { useState } from "react";

const respuestasEjemplo = [
  {
    autor: "Abg. Luis Mendoza",
    texto: "Debes acudir al juzgado de lo familiar y presentar la demanda correspondiente.",
    fecha: "hace 1 hora",
  },
  {
    autor: "María López",
    texto: "Te recomiendo reunir todos los documentos antes de iniciar el proceso.",
    fecha: "hace 30 minutos",
  },
];

const forosDataInicial = [
  {
    tema: "¿Cómo puedo iniciar un proceso de divorcio?",
    autor: "María López",
    respuestas: 5,
    ultimaRespuesta: "hace 2 horas",
    respuestasLista: respuestasEjemplo,
  },
  {
    tema: "¿Qué hacer si recibo una demanda laboral?",
    autor: "Carlos Pérez",
    respuestas: 3,
    ultimaRespuesta: "hace 1 hora",
    respuestasLista: respuestasEjemplo,
  },
  {
    tema: "¿Cuáles son mis derechos como arrendatario?",
    autor: "Ana Torres",
    respuestas: 7,
    ultimaRespuesta: "hace 10 minutos",
    respuestasLista: respuestasEjemplo,
  },
  {
    tema: "¿Cómo registrar una marca en México?",
    autor: "Lic. Fernanda Ruiz",
    respuestas: 2,
    ultimaRespuesta: "hace 5 minutos",
    respuestasLista: [
      {
        autor: "Abg. Luis Mendoza",
        texto: "Debes acudir al IMPI y llenar la solicitud correspondiente.",
        fecha: "hace 4 minutos",
      },
      {
        autor: "Carlos Pérez",
        texto: "El proceso puede tardar varias semanas, ten paciencia.",
        fecha: "hace 2 minutos",
      },
    ],
  },
  {
    tema: "¿Qué hago si me detiene la policía sin motivo?",
    autor: "Juan Ramírez",
    respuestas: 4,
    ultimaRespuesta: "hace 20 minutos",
    respuestasLista: [
      {
        autor: "Ana Torres",
        texto: "Mantén la calma y pide hablar con un abogado.",
        fecha: "hace 18 minutos",
      },
      {
        autor: "María López",
        texto: "Tienes derecho a guardar silencio.",
        fecha: "hace 15 minutos",
      },
      {
        autor: "Abg. Luis Mendoza",
        texto: "Solicita que te informen el motivo de la detención.",
        fecha: "hace 12 minutos",
      },
      {
        autor: "Carlos Pérez",
        texto: "No firmes nada sin la presencia de tu abogado.",
        fecha: "hace 10 minutos",
      },
    ],
  },
  {
    tema: "¿Cómo puedo obtener la custodia de mis hijos?",
    autor: "Sofía Martínez",
    respuestas: 6,
    ultimaRespuesta: "hace 50 minutos",
    respuestasLista: [
      {
        autor: "Abg. Luis Mendoza",
        texto: "Debes presentar una demanda de custodia ante el juzgado familiar.",
        fecha: "hace 45 minutos",
      },
      {
        autor: "Ana Torres",
        texto: "Reúne pruebas que demuestren tu capacidad como madre/padre.",
        fecha: "hace 40 minutos",
      },
      {
        autor: "Carlos Pérez",
        texto: "El juez siempre prioriza el bienestar del menor.",
        fecha: "hace 35 minutos",
      },
      {
        autor: "María López",
        texto: "Puedes solicitar asesoría gratuita en el DIF.",
        fecha: "hace 30 minutos",
      },
      {
        autor: "Lic. Fernanda Ruiz",
        texto: "No olvides presentar documentos de identidad y domicilio.",
        fecha: "hace 25 minutos",
      },
      {
        autor: "Juan Ramírez",
        texto: "Busca apoyo psicológico para tus hijos durante el proceso.",
        fecha: "hace 20 minutos",
      },
    ],
  },
  {
    tema: "¿Qué derechos tengo como trabajador despedido?",
    autor: "Pedro Sánchez",
    respuestas: 2,
    ultimaRespuesta: "hace 1 hora",
    respuestasLista: [
      {
        autor: "Carlos Pérez",
        texto: "Tienes derecho a una indemnización y a recibir tu finiquito.",
        fecha: "hace 55 minutos",
      },
      {
        autor: "Abg. Luis Mendoza",
        texto: "Acude a la Junta de Conciliación y Arbitraje para asesoría.",
        fecha: "hace 50 minutos",
      },
    ],
  },
];

export default function Foros() {
  const [foros, setForos] = useState(forosDataInicial);
  const [showModal, setShowModal] = useState(false);
  const [nuevoTema, setNuevoTema] = useState({ tema: "", autor: "" });
  const [temaSeleccionado, setTemaSeleccionado] = useState<number | null>(null);

  const handleNuevoTema = () => {
    setShowModal(true);
    setNuevoTema({ tema: "", autor: "" });
  };

  const handleGuardarTema = () => {
    if (nuevoTema.tema.trim() && nuevoTema.autor.trim()) {
      setForos([
        {
          ...nuevoTema,
          respuestas: 0,
          ultimaRespuesta: "recién creado",
          respuestasLista: [],
        },
        ...foros,
      ]);
      setShowModal(false);
    }
  };

  return (
    <div className="bg-[#f9f9f6] min-h-screen pb-10">
      <br /><br /><br />
      
      {/* Modal para nuevo tema */}
      {showModal && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-8 min-w-[320px] shadow-2xl text-center">
            <h2 className="mb-4 text-xl font-bold text-blue-900">Nuevo Tema</h2>
            <input
              type="text"
              placeholder="Tema"
              value={nuevoTema.tema}
              onChange={e => setNuevoTema({ ...nuevoTema, tema: e.target.value })}
              className="w-11/12 px-3 py-2 mb-3 rounded-lg border border-gray-300 text-base"
            />
            <input
              type="text"
              placeholder="Tu nombre"
              value={nuevoTema.autor}
              onChange={e => setNuevoTema({ ...nuevoTema, autor: e.target.value })}
              className="w-11/12 px-3 py-2 mb-4 rounded-lg border border-gray-300 text-base"
            />
            <div>
              <button
                onClick={handleGuardarTema}
                className="bg-yellow-400 text-gray-900 rounded-lg px-7 py-2 font-bold text-base mr-2 hover:bg-yellow-300 transition"
              >
                Guardar
              </button>
              <button
                onClick={() => setShowModal(false)}
                className="bg-gray-200 text-gray-900 rounded-lg px-6 py-2 font-bold text-base hover:bg-gray-300 transition"
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal para ver respuestas */}
      {temaSeleccionado !== null && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-8 min-w-[340px] max-w-[420px] shadow-2xl text-left">
            <h2 className="text-blue-900 font-bold text-lg mb-2">
              {foros[temaSeleccionado].tema}
            </h2>
            <div className="mb-4 text-gray-700">
              Por <b>{foros[temaSeleccionado].autor}</b>
            </div>
            <div>
              {(foros[temaSeleccionado].respuestasLista.length > 0
                ? foros[temaSeleccionado].respuestasLista
                : [{ autor: "Sin respuestas aún", texto: "Sé el primero en responder.", fecha: "" }]
              ).map((r, i) => (
                <div key={i} className="bg-gray-100 rounded-lg px-4 py-3 mb-3 border-l-4 border-yellow-400">
                  <div className="font-semibold text-blue-700">{r.autor}</div>
                  <div className="my-1">{r.texto}</div>
                  <div className="text-xs text-gray-500">{r.fecha}</div>
                </div>
              ))}
            </div>
            <div className="text-right">
              <button
                onClick={() => setTemaSeleccionado(null)}
                className="bg-yellow-400 text-gray-900 rounded-lg px-6 py-2 font-bold text-base mt-2 hover:bg-yellow-300 transition"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="bg-gradient-to-r from-[#e6f0fa] to-white py-12 text-center">
        <h1 className="text-gray-900 font-extrabold text-4xl mb-2">Foros Jurídicos Clara</h1>
        <p className="text-gray-700 text-xl mb-6">
          Participa, pregunta y comparte experiencias legales con la comunidad y abogados verificados.
        </p>
        <button
          className="bg-yellow-400 text-gray-900 rounded-lg px-8 py-3 font-bold text-lg shadow hover:bg-yellow-300 transition"
          onClick={handleNuevoTema}
        >
          Nuevo Tema
        </button>
      </div>
      <div className="max-w-2xl mx-auto mt-8 bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-gray-900 font-bold mb-6 text-2xl">Temas Recientes</h2>
        {foros.map((foro, idx) => (
          <div
            key={idx}
            className={`flex items-center justify-between py-4 ${idx < foros.length - 1 ? "border-b border-gray-200" : ""}`}
          >
            <div>
              <div className="font-semibold text-lg text-blue-900">{foro.tema}</div>
              <div className="text-gray-600 text-sm mt-1">
                Por <span className="font-medium">{foro.autor}</span> · {foro.ultimaRespuesta}
              </div>
            </div>
            <button
              className="bg-blue-100 text-blue-700 rounded-lg px-4 py-2 font-bold text-base min-w-[110px] hover:bg-blue-200 transition"
              onClick={() => setTemaSeleccionado(idx)}
            >
              {foro.respuestas} respuestas
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}