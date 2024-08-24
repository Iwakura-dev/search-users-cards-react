import { IoLogoTux } from "react-icons/io";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div>
      <div className={styles.header}>
        <div className={styles["header__logo"]}>
          <Link to="/">
            <IoLogoTux size={50} />
          </Link>
        </div>
        <div className={styles["header__nav"]}></div>
      </div>
    </div>
  );
};
