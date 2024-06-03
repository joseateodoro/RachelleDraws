import React from "react";
import * as classes from "./homepage.module.css";

export default function ShowcasePage() {
  return (
    <div className={classes.home}>
      <div className={classes.div}>
        <div className={classes.navbar}>
          <div className={classes["overlap-group"]}>
            <div className={classes["text-wrapper"]}>rachelle_draws</div>
          </div>
        </div>
        <footer className={classes.footer}>
          <div className={classes.overlap}>
            <div className={classes["text-wrapper-2"]}>twitter - @rachelle_draws</div>
            <div className={classes["text-wrapper-3"]}>email - rachelle_draws@gmail.com</div>
            <div className={classes["text-wrapper-4"]}>instagram - @rachelle_draws</div>
          </div>
        </footer>
        <div className={classes.passion}>
          <div className={classes["text-wrapper-5"]}>“Blossom”</div>
          <p className={classes["my-pretty-rose-tree"]}>2024, done in oil on heavy duty, archival-quality natural cotton canvas</p>
          <img className={classes.IMG} alt="Img" src="./components/images/IMG_7906.jpg" />
        </div>
        <div className={classes.biome}>
          <div className={classes["text-wrapper-5"]}>“The Meadow”</div>
          <p className={classes["my-pretty-rose-tree"]}>2022, done in oil on 100% bleached cotton canvas, 23 cm x 30.5 cm</p>
          <img className={classes.IMG} alt="Img" src="./components/images/IMG_7977.jpg" />
        </div>
        <div className={classes.path}>
          <div className={classes["text-wrapper-6"]}>“Nonentity"</div>
          <p className={classes.p}>2021, done in oil on heavy duty, archival-quality natural cotton canvas</p>
          <img className={classes.img} alt="Img" src="./components/images/IMG_8005.jpg" />
        </div>
        <div className={classes.grace}>
          <div className={classes["text-wrapper-7"]}>“Her”</div>
          <p className={classes["my-pretty-rose-tree-2"]}>2024, digital art</p>
          <img className={classes["IMG-2"]} alt="Img" src="./components/images/IMG_0012.PNG" />
        </div>
      </div>
    </div>
  );
};
