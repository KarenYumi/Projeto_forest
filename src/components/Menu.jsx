
import cacto1 from "../assets/cacto1.png";
import cacto2 from "../assets/cacto2.png";
import cacto3 from "../assets/cacto3.png";
import cacto4 from "../assets/cacto4.png";

export default function Menu({ onSelectImage, selectedImageId}){
  const images = [
    { id: 1, src: cacto1, alt: "Cacto 1"},
    { id: 2, src: cacto2, alt: "Cacto 2"},
    { id: 3, src: cacto3, alt: "Cacto 3"},
    { id: 4, src: cacto4, alt: "Cacto 4"},
  ];


  return (
    <ul className="Menu">
      {images.map((image) => {
        const isSelected = image.id === selectedImageId;
        const cssClasses = `${
          isSelected
            ? "bg-green-600 border-2 border-green-500" // Classes aplicadas quando selecionado
            : "" // Classes aplicadas quando não selecionado
        }`;

        return (
          <li key={image.id}>
            <img
              src={image.src}
              alt={image.alt}
              className={cssClasses}
              style={{ width: "150px", height: "auto" }}
              onClick={() => onSelectImage(image.id)}
            />
          </li>
        );
      })}
    </ul>
  );
}
  

