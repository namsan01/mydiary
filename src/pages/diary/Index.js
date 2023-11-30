import React from "react";
import Header from "../../components/Header";
import Main from "../../components/Main";
import Footer from "../../components/Footer";

const Index = () => {
  return (
    <>
      <Header>
        <h2 style={{ color: "yellowgreen" }}>Index</h2>
      </Header>
      <Main>
        <h2 style={{ textAlign: "center", color: "yellowgreen" }}>
          다이어리 인덱스화면
        </h2>
      </Main>
      <Footer>
        <p>Copyright 2023. 다이어리 인덱스 화면</p>
      </Footer>
    </>
  );
};

export default Index;
