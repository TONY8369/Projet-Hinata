import React from "react";
import Description from "../Components/Description";
import Footer from "../Components/Footer";
import Menu from "../Components/Menu";
import Slide from "../Components/Slide";
import Titre from "../Components/Titre";

const Home = () => {
  return (
    <main>
      <Menu />
      <Titre />
      <Description />
      <Slide />
      <Footer />
    </main>
  );
};

export default Home;
