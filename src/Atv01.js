import {Link } from "react-router-dom";
import RelogioNovo from "./RelogioNovo";
import LetreiroNovo from "./LetreiroNovo";

export default function Atv01() {
    return (
        <>

    <h1>Atividade 01</h1>
    <RelogioNovo />
    <LetreiroNovo />
    <br />
    <Link to="/">retornar a página inicial</Link>
</>
    );
}