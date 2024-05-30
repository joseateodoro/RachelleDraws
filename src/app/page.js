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
          <div className={classes["text-wrapper-5"]}>“passion - 2021”</div>
          <p className={classes["my-pretty-rose-tree"]}>&#34;My Pretty Rose Tree&#34; is a poem written by the English poet William Blake. It was published as part of his collection Songs of Experience in 1794.</p>
          <img className={classes.IMG} alt="Img" src="./components/images/IMG_7906.jpg" />
        </div>
        <div className={classes.biome}>
          <div className={classes["text-wrapper-5"]}>“biome - 2019”</div>
          <p className={classes["my-pretty-rose-tree"]}>&#34;My Pretty Rose Tree&#34; is a poem written by the English poet William Blake. It was published as part of his collection Songs of Experience in 1794.</p>
          <img className={classes.IMG} alt="Img" src="./components/images/IMG_7977.jpg" />
        </div>
        <div className={classes.path}>
          <div className={classes["text-wrapper-6"]}>“path - 2023”</div>
          <p className={classes.p}>&#34;My Pretty Rose Tree&#34; is a poem written by the English poet William Blake. It was published as part of his collection Songs of Experience in 1794.</p>
          <img className={classes.img} alt="Img" src="./components/images/IMG_8005.jpg" />
        </div>
        <div className={classes.grace}>
          <div className={classes["text-wrapper-7"]}>“grace - 2023”</div>
          <p className={classes["my-pretty-rose-tree-2"]}>&#34;My Pretty Rose Tree&#34; is a poem written by the English poet William Blake. It was published as part of his collection Songs of Experience in 1794.</p>
          <img className={classes["IMG-2"]} alt="Img" src="./components/images/IMG_0012.PNG" />
        </div>
      </div>
    </div>
  );
};
