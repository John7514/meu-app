import{BrowserRouter, Route, Routes} from "react-router-dom";

import Home from "./Home";
import Atv01 from "./Atv01";
import Atv02 from "./Atv02";
import App from "./App";

export default function MinhasRotas(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Atv01" element={<Atv01 />} />
            <Route path="/Atv02" element={<Atv02 />} />
            <Route path="/App" element={<App />} />
        </Routes>
        </BrowserRouter>
    );

}
