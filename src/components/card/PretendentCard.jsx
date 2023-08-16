import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import styles from "./PretendentCard.module.css";
import nameImg from "../../image/name.png";
import gitImg from "../../image/git.jpg";
import emailImg from "../../image/email.png";
import codewarsImg from "../../image/codewars.png";
import challengeImg from "../../image/challenge.png";
import Button from "../button/Button";
// import candidatePhoto from '../../image/photo.png'

function PretendentCard() {

  const store = useSelector(store => store)
  const candidatePhoto = require(`../../image/${store.photo}`);

  const navigate = useNavigate();
  const showWorks = () => {
    navigate("/works");
  };

  const showCourses = () => {
    navigate("/courses");
  };

  return (
    <div className={styles.wrapper}>
      <h2>Карточка пертендента</h2>
      <div className={styles.wrapper_card}>
        <img
          className={styles.wrapper_card__img}
          src={candidatePhoto}
          alt="This is I"
        ></img>
        <div className={styles.wrapper_card_info}>
          <div className={styles.wrapper_card_info__item}>
            <img
              className={styles.wrapper_card_info__img}
              src={nameImg}
              alt="user name"
            />
            <span>
              {store.lastName} {store.firstName} {store.middleName}
            </span>
          </div>
          <div className={styles.wrapper_card_info__item}>
            <img
              className={styles.wrapper_card_info__img}
              src={emailImg}
              alt="user email"
            />
            <span>{store.email}</span>
          </div>
          <div className={styles.wrapper_card_info__item}>
            <img
              className={styles.wrapper_card_info__img}
              src={gitImg}
              alt="user git"
            />
            <span>
              <a href={store.gitHub}> github.com</a>
            </span>
          </div>
          <div className={styles.wrapper_card_info__item}>
            <img
              className={styles.wrapper_card_info__img}
              src={codewarsImg}
              alt="user codewars"
            />
            <span>
              <a href={store.codeWars}> www.codewars.com</a>
            </span>
          </div>
          <div className={styles.wrapper_card_info__item}>
            <img
              className={styles.wrapper_card_info__img}
              src={challengeImg}
              alt="user codewars"
            />
            <span>
              <a href={store.site}> site.skilbe.ru</a>
            </span>
          </div>
        </div>
      </div>
      <Button onClick={showWorks}>Завершенные работы</Button>
      <Button onClick={showCourses}>Завершенные курсы</Button>
    </div>
  );
}

export default PretendentCard;
