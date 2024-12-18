import { useState } from "react";

import Header from "./components/Header.jsx"
import Description from "./components/Description.jsx";
import Menu from "./components/Menu.jsx";

function App() {
  const [selectedImageId, setSelectedImageId] = useState(null);

  function handleSelectImage(id) {
    setSelectedImageId(id);
  }

  return (
    <>
      <Header></Header>
      <main>
        <div className="corpo">
          <Menu
            onSelectImage={handleSelectImage}
            selectedImageId={selectedImageId}
          />
          <Description
            selectedImageId={selectedImageId}
          />
        </div>
      </main>
    </>

  )
}

export default App
