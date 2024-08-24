import { IoLogoTux } from "react-icons/io";
import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <div>
      <div className={styles.header}>
        <div className={styles["header__logo"]}>
          <a href="/">
            <IoLogoTux size={50} />
          </a>
        </div>
        <div className={styles["header__nav"]}></div>
      </div>
    </div>
  );
};
