import React from "react";
import moment from "moment";

import { Grid, GridItem, Title } from "../../common";
import dirLogo from "../../assets/svg/folder.svg";
import fileLogo from "../../assets/svg/file.svg";

export const File = ({ name, type, date, size }) => {
  return (
    <Grid m="10px 0" cols="1fr 4fr repeat(4, 1fr)">
      <img src={type === "dir" ? dirLogo : fileLogo} alt="" />
      <GridItem>
        <Title m="auto 0" upper>
          {name}
        </Title>
      </GridItem>
      <GridItem colFrom={5}>
        <Title m="auto 0" upper>
          {moment(date).format("DD/MM/YYYY")}
        </Title>
      </GridItem>
      <GridItem colFrom={6}>
        <Title m="auto 0" upper>
          {size}
        </Title>
      </GridItem>
    </Grid>
  );
};
