import { IoLogoTux } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { paths } from "../../constants/constants";
import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <div>
      <div className={styles.header}>
        <div className={styles["header__logo"]}>
          <NavLink to="/">
            <IoLogoTux size={50} />
          </NavLink>
        </div>
        <div className={styles["header__nav"]}>
          <nav>
            <ul className={styles["header__list"]}>
              {paths &&
                paths.map((path) => {
                  return (
                    <li key={path.id}>
                      <NavLink
                        to={path.to as string}
                        className={({ isActive }) =>
                          isActive ? styles.active : undefined
                        }
                      >
                        {path.title}
                      </NavLink>
                    </li>
                  );
                })}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};
