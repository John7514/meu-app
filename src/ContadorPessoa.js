import React, { useState } from 'react';

function ContadorDePessoas() {
    const [homens, setHomens] = useState(0);
    const [mulheres, setMulheres] = useState(0);
    const [resultado, setResultado] = useState('Total de pessoas: 0');

    const contarTotal = () => {
        const total = homens + mulheres;
        setResultado(`Total de pessoas: ${total}`);
    };

    const resetarContador = () => {
        setHomens(0);
        setMulheres(0);
        setResultado('Total de pessoas: 0');
    };

    return (
        <div id="contador" style={styles.contador}>
            <h1>Contador de Pessoas</h1>
            <div style={styles.container}>
                {/* Contador de Homens */}
                <div style={styles.contadorIndividual}>
                    <img
                        src="https://png.pngtree.com/png-clipart/20231004/original/pngtree-cartoon-business-man-png-image_13118458.png"
                        alt="Imagem de Homem"
                        style={styles.imagem}
                    />
                    <span>Homem</span>
                    <input
                        type="number"
                        value={homens}
                        min="0"
                        onChange={(e) => setHomens(Math.max(0, parseInt(e.target.value) || 0))}
                        style={styles.input}
                    />
                    <button onClick={() => setHomens(homens + 1)} style={styles.btnAumentar}>+</button>
                    <button onClick={() => setHomens(Math.max(0, homens - 1))} style={styles.btnDiminuir}>-</button>
                </div>

                {/* Contador de Mulheres */}
                <div style={styles.contadorIndividual}>
                    <img
                        src="https://static.vecteezy.com/ti/vetor-gratis/p1/8294873-bonito-empresaria-desenhos-ilustracao-vetor.jpg"
                        alt="Imagem de Mulher"
                        style={styles.imagem}
                    />
                    <span>Mulher</span>
                    <input
                        type="number"
                        value={mulheres}
                        min="0"
                        onChange={(e) => setMulheres(Math.max(0, parseInt(e.target.value) || 0))}
                        style={styles.input}
                    />
                    <button onClick={() => setMulheres(mulheres + 1)} style={styles.btnAumentar}>+</button>
                    <button onClick={() => setMulheres(Math.max(0, mulheres - 1))} style={styles.btnDiminuir}>-</button>
                </div>
            </div>

            <button onClick={contarTotal} style={styles.btn}>Contar Total</button>
            <span className="icon" onClick={resetarContador} style={styles.icon}>🔄</span>
            <p id="resultado">{resultado}</p>

            <button onClick={() => window.location.href = 'index.html'} style={styles.btn}>Voltar para o Index</button>
        </div>
    );
}

const styles = {
    contador: {
        background: 'white',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    container: {
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '20px'
    },
    contadorIndividual: {
        margin: '0 20px',
        textAlign: 'center'
    },
    input: {
        width: '50px',
        margin: '10px',
        textAlign: 'center',
    },
    imagem: {
        width: '100px',
        height: 'auto',
        margin: '0 10px',
    },
    icon: {
        cursor: 'pointer',
        margin: '10px',
    },
    btn: {
        margin: '5px',
        padding: '5px 10px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    },
    btnAumentar: {
        backgroundColor: 'green',
        color: 'white',
    },
    btnDiminuir: {
        backgroundColor: 'red',
        color: 'white',
    }
};

export default ContadorDePessoas;

