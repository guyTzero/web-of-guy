import type { NextPage } from "next";
import Image from "next/image";
import styles from "../styles/Topbar.module.css";
import react, { useState } from "react";
const Topbar: NextPage = () => {
  const [click, setClick] = useState(false);
  const link = [
    { label: "G1" },
    { label: "G2" },
    { label: "G3" },
    { label: "G4" },
  ];
  return (
    <>
      <div className={styles.container}>
        <div className={styles.linkContainer}>
          <div className={styles.gButton}>
            <Image src="/images/g-icon.png" alt="G" width={50} height={50} />
          </div>
          <div id="link" className={styles.link}>
            Guy
          </div>
          <div id="link" className={styles.link}>
            Dev
          </div>
          <div id="link" className={styles.link}>
            About
          </div>
          <div id="link" className={styles.link}>
            Contact
          </div>
        </div>
      </div>
      <div
        className={styles.containerMobile}
        style={{
          marginLeft: click ? "0%" : "90%",
          width: click ? "100%" : "10%",
        }}
      >
        <div className={styles.linkContainerMobile}>
          <div
            className={styles.gButtonMobile}
            onClick={() => setClick(click ? false : true)}
          >
            <Image src="/images/g-icon.png" alt="G" width={50} height={50} />
          </div>
          <div
            className={styles.fade}
            style={{
              marginTop: "-12%",
              opacity: click ? 1 : "0.0",
              height: click ? "auto" : "0%",
            }}
          >
            <div
              style={{ marginLeft: "40%" }}
              id="link"
              className={styles.linkMobile}
            >
              <p className={styles.textLink}>Guy</p>
            </div>
            <div
              style={{ marginLeft: "30%" }}
              id="link"
              className={styles.linkMobile}
            >
              <p className={styles.textLink}>Dev</p>
            </div>
            <div
              style={{ marginLeft: "20%" }}
              id="link"
              className={styles.linkMobile}
            >
              <p className={styles.textLink}>About</p>
            </div>
            <div
              style={{ marginLeft: "10%" }}
              id="link"
              className={styles.linkMobile}
            >
              <p className={styles.textLink}>Contact</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Topbar;

// {link.map((v, k) => {
//   <div
//     id={v.label + k}
//     className={styles.linkMobile}
//     style={{ transform: "rotate(0deg)" }}
//   >
//     {v.label}
//   </div>;
// })}
