import React, { useEffect } from "react";
//import "aos/dist/aos.css";
import clara from "../../assets/logo.png";

const NeonButton = ({ children, className = "", ...props }: React.ButtonHTMLAttributes<HTMLButtonElement> & { children: React.ReactNode }) => (
    <button
        className={`relative px-8 py-4 font-semibold text-white bg-black rounded-lg shadow-lg group overflow-hidden transition ${className}`}
        {...props}
    >
        <span className="absolute inset-0 rounded-lg border-2 border-yellow-400 shadow-[0_0_16px_4px_rgba(253,224,71,0.7)] group-hover:shadow-[0_0_32px_8px_rgba(253,224,71,1)] transition-all duration-300 pointer-events-none"></span>
        <span className="relative z-10 group-hover:text-yellow-300 transition">{children}</span>
    </button>
);

const Inicio = () => {
    useEffect(() => {

    }, []);

    return (
        <div className="w-full min-h-screen bg-[#faf8f2] pb-16">
            {/* Hero Section */}
            <section data-aos="fade-up" className="w-full bg-gradient-to-r from-orange-500 to-yellow-200 py-16 md:py-24">
                <div className="max-w-6xl mx-auto px-4 flex flex-col items">
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-black drop-shadow-lg">
                        "Una ley mas clara con Clara"
                    </h1>
                    <p className="text-lg md:text-2xl max-w-2xl mb-10 text-black/90 font-medium">
                        Te ayudamos en procesos jurídicos, con clara y profesionales clasificados.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <NeonButton >Consultas Jurídicas</NeonButton>
                        <NeonButton >Chatear con Clara</NeonButton>
                    </div>
                </div>
            </section>

            {/* Search Section */}
            <section data-aos="fade-up" className="w-full py-12 md:py-20 bg-[#faf8f2]">
                <div className="max-w-2xl mx-auto px-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-center mb-2 text-gray-900">
                        Busca Información Legal
                    </h2>
                    <p className="text-center text-gray-600 mb-8">
                        Encuentra orientación legal específica para tu jurisdicción y situación.
                    </p>
                    <form className="flex flex-col md:flex-row gap-4 items-center justify-center">
                        <input
                            type="text"
                            placeholder="Describe tu consulta legal..."
                            className="w-full md:w-1/2 px-4 py-3 rounded-lg border border-gray-200 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-300 outline-none transition-all bg-white shadow"
                        />
                        <select
                            className="w-full md:w-1/3 px-4 py-3 rounded-lg border border-gray-200 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-300 outline-none transition-all bg-white shadow text-gray-700"
                            defaultValue=""
                        >
                            <option value="" disabled>
                                Selecciona jurisdicción
                            </option>
                            <option value="cdmx">CDMX</option>
                            <option value="edomex">Edo. de México</option>
                            <option value="otro">Otro</option>
                        </select>
                        <NeonButton>Buscar</NeonButton>
                    </form>
                </div>
            </section>

            {/* Asistente Legal con IA */}
            <section data-aos="fade-up" className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-8 items-start">
                {/* Info y botón */}
                <div>
                    <h3 className="text-2xl font-bold mb-2 text-gray-900">Clara es un asistente Legal, que hará que entiendas de manera muy facil tu proceso Jurídico</h3>
                    <p className="mb-6 text-gray-700">
                        Nuestro asistente impulsado por inteligencia artificial te guía paso a paso a través de tus consultas legales, proporcionando orientación personalizada basada en tu situación específica.
                    </p>
                    <NeonButton className="w-full md:w-auto">Iniciar Conversación</NeonButton>
                </div>
                {/* Simulación de chat */}
                <div className="bg-[#faf8f2] border border-yellow-100 rounded-xl p-6 shadow flex flex-col gap-4">
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-yellow-200 text-yellow-700">
                                <img src={clara} alt="" />
                            </span>
                            <span className="font-semibold text-gray-900">Asistente Legal IA</span>
                        </div>
                        <div className="bg-yellow-50 text-gray-800 rounded-lg px-4 py-2 mb-2 w-fit max-w-full">
                            ¡Hola! Soy Clara, tu asistente legal. ¿En qué puedo ayudarte hoy?
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <input
                            type="text"
                            placeholder="Escribe tu consulta..."
                            className="flex-1 px-4 py-2 rounded-lg border border-gray-200 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-300 outline-none transition-all bg-white"
                        />
                        <NeonButton className="px-4 py-2 flex items-center justify-center">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        </NeonButton>
                    </div>
                </div>
            </section>

            {/* Recursos Legales Populares */}
            <section data-aos="fade-up" className="w-full py-16 bg-[#f7f4ea]">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-center mb-2 text-gray-900">
                        Recursos Legales Populares
                    </h2>
                    <p className="text-center text-gray-600 mb-10">
                        Accede a plantillas, guías y recursos legales esenciales para enfrentar situaciones comunes.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        {/* Card 1 */}
                        <div data-aos="zoom-in" className="bg-white border border-yellow-100 rounded-xl p-6 shadow hover:shadow-yellow-200 transition">
                            <div className="border-b border-gray-200 pb-2 mb-3 text-lg font-semibold text-gray-900">Small Business Legal Tips</div>
                            <div className="text-sm text-gray-500 mb-4">Business</div>
                            <NeonButton className="w-full">Descargar Recurso</NeonButton>
                        </div>
                        {/* Card 2 */}
                        <div data-aos="zoom-in" data-aos-delay="100" className="bg-white border border-yellow-100 rounded-xl p-6 shadow hover:shadow-yellow-200 transition">
                            <div className="border-b border-gray-200 pb-2 mb-3 text-lg font-semibold text-gray-900">Guide to Tenant Rights</div>
                            <div className="text-sm text-gray-500 mb-4">Housing</div>
                            <NeonButton className="w-full">Descargar Recurso</NeonButton>
                        </div>
                        {/* Card 3 */}
                        <div data-aos="zoom-in" data-aos-delay="200" className="bg-white border border-yellow-100 rounded-xl p-6 shadow hover:shadow-yellow-200 transition">
                            <div className="border-b border-gray-200 pb-2 mb-3 text-lg font-semibold text-gray-900">Understanding Contracts</div>
                            <div className="text-sm text-gray-500 mb-4">Contracts</div>
                            <NeonButton className="w-full">Descargar Recurso</NeonButton>
                        </div>
                    </div>
                    <button className="mx-auto block px-8 py-3 rounded-lg bg-gray-200 text-gray-700 font-semibold hover:bg-yellow-100 transition">
                        Ver Todos los Recursos
                    </button>
                </div>
            </section>

            {/* Cómo Te Ayudamos */}
            <section className="w-full py-20 bg-[#fffbe9]">
                <h2 data-aos="fade-up" className="text-3xl md:text-4xl font-bold text-center mb-14 text-yellow-700">Cómo Te Ayudamos</h2>
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 px-4">
                    {/* Búsqueda Inteligente */}
                    <div data-aos="fade-up" className="flex flex-col items-center text-center">
                        <span className="mb-4 flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-500 text-white text-4xl shadow-lg">
                            <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
                                <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
                                <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                        </span>
                        <h3 className="text-xl font-semibold mb-2 text-yellow-800">Búsqueda Inteligente</h3>
                        <p className="text-yellow-900/70 max-w-xs">
                            Encuentra información legal específica para tu jurisdicción y situación con nuestra base de datos especializada.
                        </p>
                    </div>
                    {/* Comunidad Solidaria */}
                    <div data-aos="fade-up" data-aos-delay="100" className="flex flex-col items-center text-center">
                        <span className="mb-4 flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-yellow-500 to-yellow-600 text-white text-4xl shadow-lg">
                            <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
                                <path d="M17 21v-2a4 4 0 00-4-4H7a4 4 0 00-4 4v2" stroke="currentColor" strokeWidth="2" />
                                <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2" />
                                <path d="M23 21v-2a4 4 0 00-3-3.87" stroke="currentColor" strokeWidth="2" />
                                <path d="M16 3.13a4 4 0 010 7.75" stroke="currentColor" strokeWidth="2" />
                            </svg>
                        </span>
                        <h3 className="text-xl font-semibold mb-2 text-yellow-800">Comunidad Solidaria</h3>
                        <p className="text-yellow-900/70 max-w-xs">
                            Conecta con otros usuarios que han enfrentado situaciones similares y comparte experiencias valiosas.
                        </p>
                    </div>
                    {/* Profesionales Verificados */}
                    <div data-aos="fade-up" data-aos-delay="200" className="flex flex-col items-center text-center">
                        <span className="mb-4 flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 text-white text-4xl shadow-lg">
                            <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
                                <path d="M12 14l9-5-9-5-9 5 9 5z" stroke="currentColor" strokeWidth="2" />
                                <path d="M12 14l6.16-3.422A12.083 12.083 0 0121 19.5V21l-9-5-9 5v-1.5a12.083 12.083 0 012.84-8.922L12 14z" stroke="currentColor" strokeWidth="2" />
                            </svg>
                        </span>
                        <h3 className="text-xl font-semibold mb-2 text-yellow-800">Profesionales Verificados</h3>
                        <p className="text-yellow-900/70 max-w-xs">
                            Accede a consultas con abogados verificados que ofrecen servicios pro-bono o a precios reducidos.
                        </p>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="w-full bg-[#faf8f2] border-t border-yellow-100 pt-10 pb-8 mt-8">
                <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10">
                    {/* Columna 1 */}
                    <div>
                        <h3 className="text-xl font-bold text-yellow-700 mb-2">Justicia al Alcance de Todos</h3>
                        <p className="text-yellow-900">
                            Empoderando comunidades vulnerables con acceso a orientación legal accesible y confiable a través de tecnología innovadora y colaboración comunitaria.
                        </p>
                    </div>
                    {/* Columna 2 */}
                    <div>
                        <h4 className="text-lg font-semibold mb-2 text-yellow-800">Plataforma</h4>
                        <ul className="space-y-1 text-yellow-900">
                            <li><a href="/" className="hover:text-yellow-500 transition">Inicio</a></li>
                            <li><a href="#" className="hover:text-yellow-500 transition">Foro Comunitario</a></li>
                            <li><a href="#" className="hover:text-yellow-500 transition">Profesionales</a></li>
                            <li><a href="#" className="hover:text-yellow-500 transition">Recursos</a></li>
                        </ul>
                    </div>
                    {/* Columna 3 */}
                    <div>
                        <h4 className="text-lg font-semibold mb-2 text-yellow-800">Soporte</h4>
                        <ul className="space-y-1 text-yellow-900">
                            <li><a href="#" className="hover:text-yellow-500 transition">Centro de Ayuda</a></li>
                            <li><a href="#" className="hover:text-yellow-500 transition">Contacto</a></li>
                            <li><a href="#" className="hover:text-yellow-500 transition">Privacidad</a></li>
                            <li><a href="#" className="hover:text-yellow-500 transition">Términos</a></li>
                        </ul>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Inicio;