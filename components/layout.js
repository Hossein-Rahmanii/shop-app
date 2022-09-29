import { Fragment } from "react";

import Navbar from "./Navbar";
const { motion } = require("framer-motion");

function Layout(props) {
  return (
    <Fragment>
      <Navbar />
      <main>{props.children}</main>
    </Fragment>
  );
}

export default Layout;
