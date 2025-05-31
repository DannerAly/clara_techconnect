
import {Route, Routes,} from "react-router-dom";
import MainLayout from "../pages/MainLayout";
import Inicio from "../pages/ventanas/inicio";
import ConsultasJuridicas from "../pages/ventanas/ConsultasJuridicas";
import Recursos from "../pages/ventanas/Recursos";
import Foros from "../pages/ventanas/foros";
import Chat from "../pages/ventanas/Chat";
export default function AppRoutes(){


return(

    <>
        <Routes>
            <Route element={<MainLayout/>}>

                <Route path="/" element={<Inicio/>}></Route>
                <Route path="/consultas-juridicas" element={<ConsultasJuridicas/>} />
                <Route path="/foros" element={<Foros/>} />
                <Route path="/recursos-legales" element={<Recursos/>} />
                
                <Route path="/chat" element={<Chat/>} />
            </Route>
        </Routes>
    </>
)
};



