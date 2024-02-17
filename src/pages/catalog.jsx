import React from "react";
import s from "../style/catalog.module.css";
import Card from "../components/card";
import Baner from "../components/baner";
const Catalog = () => {
  return (
    <div className={s.catalogContainer}>
      <Baner />
      <Baner />
    </div>
  );
};

export default Catalog;
