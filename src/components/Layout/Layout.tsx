import React, { Fragment } from "react";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <Fragment>
      <Header />
      <main>{children}</main>
      <Footer />
    </Fragment>
  );
}
