import cacto4 from "../assets/cacto4-cortado.png";
import cacto3 from "../assets/cacto3-cortado.png";
import cacto2 from "../assets/cacto2-cortado.png";
import cacto1 from "../assets/cacto1-cortado.png";

export default function Description({ selectedImageId }) {
  const descriptions = [
    {
      id: 1,
      img: cacto1,
      title: "Andarilho da Noite",
      price: "R$ 19,00",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 2,
      img: cacto2,
      title: "As Três Rosas",
      price: "R$ 17,00",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 3,
      img: cacto3,
      title: "Cravo e a Rosa",
      price: "R$ 21,00",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 4,
      img: cacto4,
      title: "Matilda",
      price: "R$ 18,00",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },

  ];

  const selectedDescription = descriptions.find(
    (item) => item.id === selectedImageId
  );

  if (!selectedDescription) {
    return <p className="font-color2">Selecione uma imagem para ver a descrição.</p>;
  }

  return (
    <div className="Descricao">
      <ul>
        <li>
          <img
            src={selectedDescription.img}
            width="250px"
            className="imagem-cortada"
            alt={selectedDescription.title}
          />
          <h1 className="font-color1">{selectedDescription.title}</h1>
          <h2 className="font-color1">{selectedDescription.price}</h2>
          <p className="font-color2">{selectedDescription.description}</p>
        </li>
      </ul>
    </div>
  );
}

