import React from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <>
      <Header>
        <h1 style={{ color: "red" }}>My Diary</h1>
      </Header>
      <Main>
        <h2 style={{ textAlign: "center", color: "red" }}>다이어리 첫화면</h2>
      </Main>
      <Footer>
        <p>Copyright 2023. 다이어리 첫화면</p>
      </Footer>
    </>
  );
};

export default Index;
