import { FC, memo } from "react";

import styles from "./styles.module.scss";
import { AppLink } from "@/shared/ui/app-link";

type PostProps = {
  id: number;
  body: string;
  title: string;
};

export const Post: FC<PostProps> = memo(({ id, body, title }) => {
  return (
    <div className={styles.post}>
      <span>{id}.</span>
      <span className={styles.postTitle}>{title}</span>
      <span>{body}</span>
      <AppLink path={`/${id}`} caption="Просмотр" />
    </div>
  );
});
