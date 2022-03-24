import React from "react";
import { useState } from "react";
import ReactDOM from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { createDir } from "../../actions/fileActions";
import { Column, Row, Title } from "../../common";
import { Btn, Input } from "../registration";

const Background = styled.section`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  z-index: 1000;
`;

export const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: ${({ w = 415 }) => `${w}px`};
  background: #ffffff;
  box-shadow: -50px 50px 250px rgba(0, 0, 0, 0.08);
  backdrop-filter: blur(30px);
  border-radius: 15px;
  position: relative;
  z-index: 10;
  margin: auto;
  padding: 30px 35px;
  transition: transform 0.3s ease;
  transform: ${({ isOpen }) => `scale(${+isOpen})`};
`;

export const Popup = ({ onClose }) => {
  const [name, setName] = useState();
  const dispatch = useDispatch();
  const { currentDir, isPopup } = useSelector((s) => s.files);

  const onChangeName = (e) => setName(e.target.value);

  const createFolder = () => {
    console.log("click");
    dispatch(createDir(currentDir, name));
    onClose();
  };

  return ReactDOM.createPortal(
    <Background>
      <ModalWrapper onClick={(e) => e.stopPropagation()} isOpen={isPopup}>
        <Row align="center">
          <Title upper fz={20}>
            Create New Folder
          </Title>
          <Btn m="0" onClick={onClose}>
            X
          </Btn>
        </Row>
        <Column>
          <Input value={name} onChange={onChangeName} defaultValue="" />
        </Column>
        <Btn onClick={createFolder} disabled={!name}>
          Create
        </Btn>
      </ModalWrapper>
    </Background>,
    document.getElementById("portal")
  );
};
