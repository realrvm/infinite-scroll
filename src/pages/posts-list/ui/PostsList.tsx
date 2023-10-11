import { FC } from "react";
import { useOutletContext } from "react-router-dom";

import { Post } from "@/features/create-post";
import { Loader } from "@/shared/ui/loader";

import { useGetPostsList } from "@/app/providers/rtk-query-provider";
import { NUMBER_OF_POSTS_PER_PAGE } from "@/shared/lib/constants";

import styles from "./styles.module.scss";

type PostsListProps = Record<string, never>;

export const PostsList: FC<PostsListProps> = () => {
  const postStart = useOutletContext() as number;
  const { data, isLoading } = useGetPostsList({
    limit: NUMBER_OF_POSTS_PER_PAGE,
    start: postStart,
  });

  if (isLoading) {
    return (
      <div className={styles.loading}>
        <Loader />
      </div>
    );
  }

  return (
    <div className={styles.list}>
      {data ? (
        data.map((post) => {
          return <Post key={post.id} {...post} />;
        })
      ) : (
        <p>Данные не загружены. Обновите страницу позже</p>
      )}
    </div>
  );
};
