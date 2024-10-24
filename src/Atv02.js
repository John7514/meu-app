import {Link } from "react-router-dom";
import ContadorPessoa from "./ContadorPessoa";


export default function Atv01() {
    return (
        <>

    <h1>Atividade 02</h1>
    <ContadorPessoa/>

    <br />
    <Link to="/">retornar a página inicial</Link>
</>
    );
}
