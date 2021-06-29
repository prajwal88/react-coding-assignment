import React from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";

const menu = (props) => {
  return (
    <Menu>
      <div key="experience">
        <Link to={`/experience`}>Experience cloud</Link>
      </div>
      <div key="creative">
        <Link to={`/creative`}> Creative cloud</Link>
      </div>
      <div key="document">
        <Link to={`/document`}>Document cloud</Link>
      </div>
    </Menu>
  );
};

export default menu;
