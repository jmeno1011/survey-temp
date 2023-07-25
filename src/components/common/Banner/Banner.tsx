import Image from "next/image";
import React from "react";
import banner from "@/assets/banner.jpg";
import styles from "./Banner.module.css";

const Banner = () => {
  return (
    <div className={styles.banner}>
      <Image
        src={banner}
        alt="banner"
        fill
        sizes="(max-width: 768px) 100%,
              100%"
      />
    </div>
  );
};

export default Banner;
