import bagicon from "../assets/shopping_icon-white.png" 

export default function Header() {
  return (
    <header>
      <div className="cabecalho">
        <h1 id="nome">forest</h1>
        <nav className="cabecalho2">
        </nav>
        <nav>
          <input type="image" className="button-bag" src={bagicon} width="25px" />
        </nav>
      </div>
    </header>
  );
}