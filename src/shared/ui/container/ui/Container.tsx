import {
  FC,
  MutableRefObject,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

import { AppRouter } from "@/app/providers/react-router-provider";
import { useInfiniteScroll } from "@/shared/hooks/useInfiniteScroll";
import { NUMBER_OF_REMAINING_POSTS } from "@/shared/lib/constants";

type ContainerProps = Record<string, never>;

export const Container: FC<ContainerProps> = () => {
  const [postStart, setPostStart] = useState(-1);
  const [down, setDown] = useState(true);
  const [up, setUp] = useState(false);

  useEffect(() => {
    document.body.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "center",
    });
    document.addEventListener("scroll", scrollHandler);
    return () => {
      document.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  function scrollHandler(e: any) {
    if (e.target.documentElement.scrollTop < 50) {
      setUp(true);
    }
    if (
      e.target.documentElement.scrollHeight -
        e.target.documentElement.scrollTop -
        window.innerHeight <
      50
    ) {
      setDown(true);
      window.scrollTo(
        0,
        e.target.documentElement.scrollHeight +
          e.target.documentElement.scrollTop,
      );
    }
  }

  const fetchMorePosts = useCallback(() => {
    setPostStart((prev) =>
      prev < NUMBER_OF_REMAINING_POSTS ? prev + 1 : prev,
    );
    setDown(false);
  }, []);

  const fetchLessPosts = useCallback(() => {
    setPostStart((prev) => (prev > 0 ? prev - 1 : prev));
    setUp(false);
  }, []);

  const triggerBottomRef = useRef() as MutableRefObject<HTMLDivElement>;
  const triggerUpRef = useRef() as MutableRefObject<HTMLDivElement>;

  useInfiniteScroll({
    triggerRef: triggerBottomRef,
    callback: fetchMorePosts,
    hasScroll: down,
  });

  useInfiniteScroll({
    triggerRef: triggerUpRef,
    callback: fetchLessPosts,
    hasScroll: up,
  });
  return (
    <>
      <div ref={triggerUpRef} />
      <AppRouter context={postStart} />
      <div ref={triggerBottomRef} />
    </>
  );
};
