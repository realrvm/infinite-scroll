import { FC, memo } from "react";

import styles from "./styles.module.scss";

type LoaderProps = Record<string, never>;

export const Loader: FC<LoaderProps> = memo(() => {
  return <div className={styles.loader}></div>;
});
