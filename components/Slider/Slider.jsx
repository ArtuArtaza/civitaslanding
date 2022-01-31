import styles from "@/styles/Slider.module.scss";
import { useState } from "react";
import Image from "next/image";

const Slider = () => {
  const [current, setCurrent] = useState(0);

  const arrOfImages = [
    {
      src: "",
      alt: "",
    },
    {
      src: "",
      alt: "",
    },
  ];

  return (
    <div className={styles.slider}>
      <div className={styles.topcontainer}>
        <span className={styles.title}>Civitas Title</span>
        <div>
          <img className={styles.stars} src="/star.png" alt="star" />
          <img className={styles.stars} src="/star.png" alt="star" />
          <img className={styles.stars} src="/star.png" alt="star" />
        </div>
      </div>

      <div>
        <h4>Default Title</h4>
        <p className={styles.paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit
        </p>
        {/*<Image className={styles.img}/>*/}
      </div>

      <div className={styles.imgContainer}>
        <Image
          src="/renders/castillito.png"
          width="901"
          height="900"
          className={styles.img}
          layout="responsive"
          alt="sliderimg"
        />
      </div>
		<div className={styles.behindText}>
			<span>CIVITAS</span>
		</div>
    </div>
  );
};

export default Slider;
