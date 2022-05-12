import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Slide = () => {
  const images = [
    {
      id: 1,
      image: `${require("../image/PROJET le HINATA/inspi/devanture restaurant.jpg")}`,
      title: "Cuisine du HINATA",
    },
    {
      id: 2,
      image: `${require("../image/PROJET le HINATA/inspi/Photos/hinata.jpg")}`,
      title: "Cuisine du HINATA",
    },

    {
      id: 3,
      image: `${require("../image/IMG_1725.jpg")}`,
      title: "Cuisine du HINATA",
      text: "Cuisine japonaise",
    },

    {
      id: 4,
      image: `${require("../image/IMG_1720.jpg")}`,
      title: "Cuisine du Hinata",
    },

    {
      id: 5,
      image: `${require("../image/photo7.jpg")}`,
      title: "Cuisine du Hinata",
    },
    {
      id: 6,
      image: `${require("../image/IMG_1723.jpg")}`,
      title: "Cuisine du Hinata",
    },
    {
      id: 7,
      image: `${require("../image/IMG_1716.jpg")}`,
      title: "Cuisine du Hinata",
    },
    {
      id: 8,
      image: `${require("../image/PROJET le HINATA/inspi/Photos/hinata3.jpg")}`,
      title: "Cuisine du Hinata",
    },
    {
      id: 9,
      image: `${require("../image/photo5.jpg")}`,
      title: "Cuisine du Hinata",
    },
    {
      id: 10,
      image: `${require("../image/photo6.jpg")}`,
      title: "Cuisine du Hinata",
    },
  ];
  return (
    <Carousel showArrows={true} showThumbs={false}>
      {images.map((slide) => (
        <div className="image-container" key={slide.id}>
          <img src={slide.image} alt="img" />
        </div>
      ))}
    </Carousel>
  );
};
export default Slide;
