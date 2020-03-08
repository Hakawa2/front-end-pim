import React from "react";
import Body from "../../components/body/body";
import Header from "../../components/header/header";
import HomeComponent from "../../components/home/home";

const Home = () => {
  return (
    <>
      <Header />
      <Body children={<HomeComponent />} />
    </>
  );
};

export default Home;
