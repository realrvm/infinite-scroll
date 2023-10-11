import { FC } from "react";
import { useParams } from "react-router-dom";

import { AppLink } from "@/shared/ui/app-link";
import { Loader } from "@/shared/ui/loader";

import styles from "./styles.module.scss";
import { useGetPostById } from "@/app/providers/rtk-query-provider";

type PostDetailsProps = Record<string, never>;

export const PostDetails: FC<PostDetailsProps> = () => {
  const { id: taskId } = useParams();
  const { data, isLoading } = useGetPostById(Number(taskId));

  if (isLoading) {
    return (
      <div className={styles.loading}>
        <Loader />
      </div>
    );
  }

  return (
    <div className={styles.details}>
      {data ? (
        <>
          <p>Post {data.id}</p>
          <h2>{data.title}</h2>
          <p>{data.body}</p>
        </>
      ) : (
        <p>Запись не обнаружена</p>
      )}
      <AppLink path="/" caption="Назад" />
    </div>
  );
};
