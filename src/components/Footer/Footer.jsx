import React, { useState } from "react"
import "./Footer.css"

function Footer() {

    const [numero, setNumero] = useState(0)

//    Meninas, eu tirei esse negócio aqui, pois, ele estava aparecendo toda hora
//    e eu não soube resolver. Mas, resolvi deixar aqui para vocês verem o funcionamento dele.
    setTimeout(()=>{
         alert("Bem-Vindo(a)!")
   }, 6000)


    
    const [cronometro, setCronometro] = useState(0)
    const [guardarIntervalo, setGuardarIntervalo] = useState()

    const Iniciar = () => {

        
        const guardando = setInterval(() => {
            setCronometro((cronometro) => cronometro + 1)
        }, 1000)
       
        setGuardarIntervalo(guardando)
    }

    const PararTempo = () => clearInterval(guardarIntervalo)



    return (
        <footer>
            <section className="contador">
                <h3>CONTADOR</h3>
                <h2>{numero}</h2>
                <button onClick={() => setNumero((numero) => numero + 1)}>ADD</button>

                <button onClick={() => setNumero((numero) => numero - 1)}>REMOVER</button>

                <button onClick={() => setNumero(0)}>LIMPAR</button>
            </section>


            <section className="cronometro">
                <h3>CRONÔMETRO</h3>
                <h2>{cronometro}</h2>
                <button onClick={Iniciar}>INICIAR</button>
                <button onClick={PararTempo}>PAUSAR</button>
                <button onClick={() => setCronometro(0)}>LIMPAR</button>
            </section>


        </footer>
    )

}

export default Footer
