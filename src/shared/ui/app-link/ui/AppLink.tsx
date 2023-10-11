import { FC, memo } from "react";
import { Link } from "react-router-dom";

import styles from "./styles.module.scss";

type AppLinkProps = {
  caption: string;
  path: string;
};

export const AppLink: FC<AppLinkProps> = memo(({ caption, path }) => {
  return (
    <Link to={path} className={styles.appLink}>
      {caption}
    </Link>
  );
});
