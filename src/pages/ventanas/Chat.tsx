import React, { useRef, useState, useEffect } from "react";
import clara from "../../assets/logo.png";

const NeonButton = ({ children, className = "", ...props }: React.ButtonHTMLAttributes<HTMLButtonElement> & { children: React.ReactNode }) => (
  <button
    className={`relative px-6 py-2 font-semibold text-white bg-black rounded-lg shadow-lg group overflow-hidden transition ${className}`}
    {...props}
  >
    <span className="absolute inset-0 rounded-lg border-2 border-yellow-400 shadow-[0_0_12px_2px_rgba(253,224,71,0.7)] group-hover:shadow-[0_0_24px_4px_rgba(253,224,71,1)] transition-all duration-300 pointer-events-none"></span>
    <span className="relative z-10 group-hover:text-yellow-300 transition">{children}</span>
  </button>
);

const Chat = () => {
  const [messages, setMessages] = useState([
    { role: "assistant", content: "¡Hola! Soy tu asistente legal. ¿En qué puedo ayudarte hoy?" }
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!input.trim()) return;
    setMessages([...messages, { role: "user", content: input }]);
    setInput("");
    // Simulación de respuesta del asistente
    setTimeout(() => {
      setMessages(msgs => [
        ...msgs,
        { role: "assistant", content: "Esta es una respuesta simulada. Pronto recibirás ayuda personalizada." }
      ]);
    }, 1200);
  };

  return (
    <div className="w-full min-h-screen bg-[#faf8f2] flex flex-col items-center py-10">
      <br /><br /> <br />
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl border border-yellow-100 flex flex-col h-[70vh]">
        {/* Header */}
        <div className="flex items-center gap-3 px-6 py-4 border-b border-yellow-100 bg-gradient-to-r from-yellow-100 to-yellow-50 rounded-t-2xl">
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 text-yellow-900 font-bold text-xl shadow">
            <img src={clara} alt="" />
          </span>
          <span className="font-bold text-yellow-800 text-lg">Asistente Legal IA</span>
        </div>
        {/* Chat Body */}
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4 bg-[#faf8f2]">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[75%] px-4 py-2 rounded-xl text-base shadow
                  ${msg.role === "user"
                    ? "bg-yellow-400 text-yellow-900 rounded-br-none"
                    : "bg-yellow-50 text-yellow-900 rounded-bl-none border border-yellow-100"
                  }`}
              >
                {msg.content}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
        {/* Input */}
        <form
          onSubmit={handleSend}
          className="flex items-center gap-3 px-6 py-4 border-t border-yellow-100 bg-white rounded-b-2xl"
        >
          <input
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="Escribe tu consulta legal..."
            className="flex-1 px-4 py-3 rounded-lg border border-gray-200 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-300 outline-none transition-all bg-white text-gray-800"
          />
          <NeonButton type="submit" className="px-6 py-3">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </NeonButton>
        </form>
      </div>
    </div>
  );
};

export default Chat;