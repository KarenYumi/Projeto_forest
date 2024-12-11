import cacto3 from "../assets/cacto3-cortado.png";

export default function Description() {
  return (
    <div className="Descricao">
      <ul>
        <li>
          <img src="/Images/cacto1-cortado.png" width="280px" className="imagem-cortada" alt="Cacto 1 Cortado" />
          <h2 className="font-color1">Andarilho da <br />Noite</h2>
          <p className="font-color2">R$ 19,00</p>
          <p className="font-color2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </li>
        <li>
          <img src="/Images/cacto2-cortado.png" width="250px" className="imagem-cortada" alt="Cacto 2 Cortado" />
          <h2 className="font-color1">As três Rosas</h2>
          <p className="font-color2">R$ 17,00</p>
          <p className="font-color2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </li>
        <li>
          <img src={cacto3} width="250px" className="imagem-cortada" alt="Cacto 3 Cortado" />
          <h2 className="font-color1">Cravo e a Rosa</h2>
          <p className="font-color2">R$ 21,00</p>
          <p className="font-color2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </li>
        <li>
          <img src="/Images/cacto4-cortado.png" width="250px" className="imagem-cortada" alt="Cacto 4 Cortado" />
          <h2 className="font-color1">Matilda</h2>
          <p className="font-color2">R$ 18,00</p>
          <p className="font-color2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </li>
      </ul>
    </div>
  )
}