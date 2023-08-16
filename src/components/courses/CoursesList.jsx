import React from "react";
import Button from "../button/Button";
import styles from "./CoursesList.module.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import InfoPanel from "../InfoPanel/InfoPanel";

function CoursesList() {
  const navigate = useNavigate();
  const courses = useSelector(store => store)

  const returnMain = () => {
    navigate("/");
  };

  return (
    <div className={styles.wrapper}>
      <h2>Завершенные курсы</h2>
      <Button onClick={returnMain}>Назад</Button>
      <InfoPanel/>
    </div>
  );
}

export default CoursesList;
