import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getFiles } from "../../actions/fileActions";
import { Column } from "../../common";
import { Btn } from "../registration";
import { FileList } from "./FileList";

export const Disk = () => {
  const dispatch = useDispatch();
  const currentDir = useSelector((s) => s.files.currentDir);

  useEffect(() => {
    dispatch(getFiles(currentDir));
  }, [currentDir, dispatch]);

  return (
    <Column w="100%" p="30px 100px">
      <Column>
        <Btn m="0 0 10px">Back</Btn>
        <Btn>Create new folder</Btn>
      </Column>
      <FileList />
    </Column>
  );
};
