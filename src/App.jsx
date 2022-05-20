import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Layout from "./layout/Layout"
import CampoElectrico from "./pages/CampoElectrico"
import Capacitancia from "./pages/Capacitancia"
import Coulomb from "./pages/Coulomb"
import Resistencia from "./pages/Resistencia"

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate replace to='/calcular/coulomb'/>}/>
                <Route path="/calcular" element={<Layout />}>
                    <Route path="coulomb" element={<Coulomb />} />
                    <Route path="campo-electrico" element={<CampoElectrico />} />
                    <Route path="capacitancia" element={<Capacitancia />} />
                    <Route path="resistencia" element={<Resistencia />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App