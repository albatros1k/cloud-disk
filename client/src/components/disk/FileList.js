import React from "react";
import { useSelector } from "react-redux";

import { File } from "./File";
import { Column, Grid, GridItem, Title } from "../../common";

export const FileList = () => {
  const { files } = useSelector((s) => s.files);

  const renderFiles = () => files.map((f) => <File key={f.id} {...f} />);

  return (
    <Column m="20px 0 0" w="100%">
      <Grid cols="1fr 4fr repeat(4, 1fr)" m="0 0 20px">
        <GridItem colFrom={2}>
          <Title upper>Name</Title>
        </GridItem>
        <GridItem colFrom={5}>
          <Title upper>Date</Title>
        </GridItem>
        <GridItem colFrom={6}>
          <Title upper>Size</Title>
        </GridItem>
      </Grid>
      {renderFiles()}
    </Column>
  );
};
