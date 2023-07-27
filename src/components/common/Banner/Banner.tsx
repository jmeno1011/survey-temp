import { bannerUrl } from "@/lib/const/common";
import Image from "next/image";
import React from "react";
// import banner from "@/assets/banner.jpg";
import styles from "./Banner.module.css";

interface BannerProp {
  srcUrl: string;
}

const Banner = ({ srcUrl = bannerUrl }: BannerProp) => {
  return (
    <div className={styles.banner}>
      <Image
        src={srcUrl}
        alt="banner"
        fill
        sizes="(max-width: 768px) 100%,
              100%"
      />
    </div>
  );
};

export default Banner;
