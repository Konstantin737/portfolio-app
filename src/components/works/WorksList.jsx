import React from "react";
import Button from "../button/Button";
import styles from "./WorksList.module.css";
import { useNavigate } from "react-router-dom";
import InfoPanel from "../InfoPanel/InfoPanel";

function WorksList() {
  const navigate = useNavigate();

  const returnMain = () => {
    navigate("/");
  };

  return (
    <div className={styles.wrapper}>
      <h2>Завершенные работы</h2>
      <Button onClick={returnMain}>Назад</Button>
      <InfoPanel/>
    </div>
  );
}

export default WorksList;
