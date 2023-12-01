import React from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import { Link, useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();
  const handleClickMenu = () => {
    navigate(-1);
  };
  return (
    <>
      <Header handleClickMenu={handleClickMenu} icon="bt_home.svg">
        <h2 style={{ color: "red" }}>My Diary</h2>
      </Header>
      <Main>
        <h2 style={{ textAlign: "center", color: "red" }}>다이어리 첫화면</h2>
        <Link to="/diary">다이어리 가기</Link>
      </Main>
      <Footer>
        <p>Copyright 2023. 다이어리 첫화면</p>
      </Footer>
    </>
  );
};

export default Index;
