import React from "react";
import Header from "../../components/Header";
import Main from "../../components/Main";
import Footer from "../../components/Footer";

const DiaryAdd = () => {
  return (
    <>
      <Header>
        <h2 style={{ color: "blue" }}>Add</h2>
      </Header>
      <Main>
        <h1 style={{ textAlign: "center", color: "blue" }}>추가화면 입니다</h1>
      </Main>
      <Footer>
        <p>Copyright 2023. 다이어리 추가화면</p>
      </Footer>
    </>
  );
};

export default DiaryAdd;
