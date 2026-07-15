import { NavLink } from "react-router-dom";
import {
  FiSearch,
  FiHeart,
  FiShoppingBag,
  FiUser,
} from "react-icons/fi";

import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <header className={styles.header}>
      {/* Left Menu */}
      <nav className={styles.navMenu}>
        <NavLink to="/" className={styles.navLink}>
          Home
        </NavLink>

        <NavLink to="/shop" className={styles.navLink}>
          Shop
        </NavLink>

        <NavLink to="/collections" className={styles.navLink}>
          Collections
        </NavLink>

        <NavLink to="/about" className={styles.navLink}>
          About
        </NavLink>
      </nav>

      {/* Logo */}
      <div className={styles.logo}>
        <NavLink to="/">LuxeJewels</NavLink>
      </div>

      {/* Icons */}
      <div className={styles.icons}>
        <FiSearch />
        <FiHeart />
        <FiShoppingBag />
        <FiUser />
      </div>
    </header>
  );
};

export default Navbar;