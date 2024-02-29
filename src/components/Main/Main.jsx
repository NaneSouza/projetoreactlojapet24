import React from "react"
import "./Main.css"
import Gata from "../Main/imgMain/gatafemea.png"
import Gato from "../Main/imgMain/gatomacho.png"
import Cadela from "../Main/imgMain/caofemea.png"
import Cao from "../Main/imgMain/caomacho.png"

function Main() {
    return (
        <main>
            <h2> Nossos Trajes Famosos</h2>
            
            <section className="pets">
           
            <div>
            <img src={Gata} alt="Gatinha com roupa de noiva" />
            <p>R$ 220,00 </p>
              
            <button>COMPRAR</button>
  
            <form>
                <label>P</label>
                <input type="radio" name="tamanhos" id="p" />
    
                <label>M</label>
                <input type="radio" name="tamanhos" id="m" />
    
                <label>G</label>
                <input type="radio" name="tamanhos" id="g" />
    
                <label>GG</label>
                <input type="radio" name="tamanhos" id="gg" />
              </form>

            </div>

            <div>
            <img src={Gato} alt="Gatinho com roupa de noivo" />
            <p>R$ 220,00 </p>
              
            <button>COMPRAR</button>
  
            <form>
                <label>P</label>
                <input type="radio" name="tamanhos" id="p" />
    
                <label>M</label>
                <input type="radio" name="tamanhos" id="m" />
    
                <label>G</label>
                <input type="radio" name="tamanhos" id="g" />
    
                <label>GG</label>
                <input type="radio" name="tamanhos" id="gg" />
              </form>
            
            </div>

            <div>
            <img src={Cadela} alt="Cadela com roupa de noiva" />
            <p>R$ 220,00 </p>
              
            <button>COMPRAR</button>
  
            <form>
                <label>P</label>
                <input type="radio" name="tamanhos" id="p" />
    
                <label>M</label>
                <input type="radio" name="tamanhos" id="m" />
    
                <label>G</label>
                <input type="radio" name="tamanhos" id="g" />
    
                <label>GG</label>
                <input type="radio" name="tamanhos" id="gg" />
              </form>
               </div>

            <div>
            <img src={Cao} alt="Cãozinho com roupa de noivo" />
            <p>R$ 220,00 </p>
              
            <button>COMPRAR</button>
  
            <form>
                <label>P</label>
                <input type="radio" name="tamanhos" id="p" />
    
                <label>M</label>
                <input type="radio" name="tamanhos" id="m" />
    
                <label>G</label>
                <input type="radio" name="tamanhos" id="g" />
    
                <label>GG</label>
                <input type="radio" name="tamanhos" id="gg" />
              </form>
            
             </div>

            </section>
        </main>
    )
}

export default Main