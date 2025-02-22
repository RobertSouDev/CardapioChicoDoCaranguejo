import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Entradas from "./pages/Entradas";
import CarnesAves from "./pages/CarnesAves";
import MenuIndividual from "./pages/MenuIndividual";
import MenuKids from "./pages/MenuKids";
import EspecialPeixes from "./pages/EspecialPeixes";
import FrutosDoMar from "./pages/FrutosDoMar";
import Guarnicoes from "./pages/Guarnicoes";
import Saladas from "./pages/Saladas";









export default function App() {
  return (
    <BrowserRouter>
      <Routes>
      {/* <Route index element={<Home/>}/> */}
        <Route path="/" element={<Layout/>}>
        <Route index element={<Entradas/>}/>

          <Route path="/entradas" element={<Entradas/>}/>

          <Route path="/carnes-e-aves" element={<CarnesAves/>}/>
          <Route path="/menu-individual" element={<MenuIndividual/>}/>
          <Route path="/menu-kids" element={<MenuKids/>}/>
          <Route path="/especial-peixes" element={<EspecialPeixes/>}/>
          <Route path="/frutos-do-Mar" element={<FrutosDoMar/>}/>
          <Route path="/gaurnições" element={<Guarnicoes/>}/>
          <Route path="/saladas" element={<Saladas/>}/>





        </Route>
      </Routes>
    </BrowserRouter>

  );
}
