import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getFiles } from "../../actions/fileActions";
import { Column } from "../../common";
import { togglePopup } from "../../reducers/fileReducer";
import { Btn } from "../registration";
import { FileList } from "./FileList";
import { Popup } from "./Popup";

export const Disk = () => {
  const dispatch = useDispatch();
  const { currentDir, isPopup } = useSelector((s) => s.files);

  const toggleModal = () => dispatch(togglePopup());

  useEffect(() => {
    dispatch(getFiles(currentDir));
  }, [currentDir, dispatch]);

  return (
    <Column w="100%" p="30px 100px">
      <Column>
        <Btn m="0 0 10px">Back</Btn>
        <Btn onClick={toggleModal}>Create new folder</Btn>
      </Column>
      <FileList />
      {isPopup && <Popup onClose={toggleModal} />}
    </Column>
  );
};
