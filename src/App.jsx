import Header from "./components/Header.jsx"
import Description from "./components/Description.jsx";

function App() {
  return (
    <>
      <Header></Header>
      <main>
        <div className="corpo">
          <ul className="Menu">
            <li>
              <img src="/Images/cacto1.png" width="150px" alt="Cacto 1" />
            </li>
            <li>
              <img src="/Images/cacto2.png" width="150px" alt="Cacto 2" />
            </li>
            <li>
              <img src="/Images/cacto3.png" width="150px" alt="Cacto 3" />
            </li>
            <li style={{ marginBottom: "20px" }}>
              <img src="/Images/cacto4.png" width="150px" alt="Cacto 4" />
            </li>
          </ul>
          <Description/>
        </div>
      </main>
    </>

  )
}

export default App
