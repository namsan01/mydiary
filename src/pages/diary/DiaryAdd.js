import React from "react";
import Header from "../../components/Header";
import Main from "../../components/Main";
import Footer from "../../components/Footer";
import { useNavigate } from "react-router-dom";

const DiaryAdd = () => {
  const navigate = useNavigate();
  const handleClickMenu = () => {
    navigate(-1);
  };
  return (
    <>
      <Header handleClickMenu={handleClickMenu} icon="bt_list.svg">
        <h2 style={{ color: "blue" }}>Add</h2>
      </Header>
      <Main>
        <h2 style={{ textAlign: "center", color: "blue" }}>추가화면 입니다</h2>
      </Main>
      <Footer>
        <p>Copyright 2023. 다이어리 추가화면</p>
      </Footer>
    </>
  );
};

export default DiaryAdd;
