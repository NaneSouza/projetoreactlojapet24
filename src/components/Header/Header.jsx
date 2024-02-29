import React from "react" 
import "./Header.css" 
import Logo from "../Header/img Header/PetLogo.png"


function Header() {
    return ( 
        <header>

            <h1>PET WEDDING</h1>
            <h2>Outfits</h2>

            <img src={Logo} alt="um desenho de um casal de cachorrinhos" />

            <nav>
          <ul>
          <li>TRAJE FÊMEA</li>
          <li>TRAJE MACHO</li>
          <li>ACESSÓRIOS</li>
         </ul>
          </nav>

            <form>
                <label>Usuário: </label>
                <input type="text" placeholder="Digite seu nome" />

                <label> Senha: </label>
                <input type="password" placeholder="Digite sua senha" />

            </form>


        </header>
    )
}

export default Header  