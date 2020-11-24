import styles from "../styles/Header.module.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import Link from "next/link";
import { Auth } from "aws-amplify";
import { useState, useEffect } from "react";

function Header() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    // Access the user session on the client
    Auth.currentAuthenticatedUser()
      .then((user) => {
        setUser(user);
      })
      .catch((err) => setUser(null));
  }, [user]);

  return (
    <div className={styles.header}>
      <Link href="/">
        <a>
          <img
            src="https://www.zolo.ca/img/zolo-logo.svg"
            alt="logo"
            className={styles.logo}
          />
        </a>
      </Link>
      <div className={styles.search}>
        <input
          placeholder="searh here"
          type="text"
          className={styles.search_input}
        />
        <SearchIcon className={styles.search_icon} />
      </div>

      <div className={styles.nav}>
        <Link href="/profile" className={styles.nav_link}>
          <a>
            <div className={styles.nav_link_opt}>
              <span className={styles.nav_link_opt_1}>Hello</span>
              {user ? (
                <span className={styles.nav_link_opt_2}>{user.username}</span>
              ) : (
                <span className={styles.nav_link_opt_2}>Sign In</span>
              )}
            </div>
          </a>
        </Link>
        <Link href="/" className={styles.nav_link}>
          <a>
            <div className={styles.nav_link_opt}>
              <span className={styles.nav_link_opt_1}>Return</span>
              <span className={styles.nav_link_opt_2}>& Order</span>
            </div>
          </a>
        </Link>
        <Link href="/checkout" className={styles.nav_link}>
          <a>
            <div className={styles.nav_link_basket}>
              <ShoppingBasketIcon />
              <span
                className={[
                  styles.nav_link_opt_2,
                  styles.nav_link_basket_count,
                ].join(" ")}
              >
                0
              </span>
            </div>
          </a>
        </Link>
      </div>
    </div>
  );
}

export default Header;
