import { MutableRefObject, useLayoutEffect, useRef } from "react";

type UseInfiniteScroll = {
  triggerRef: MutableRefObject<HTMLDivElement>;
  callback?: () => void;
  hasScroll?: boolean;
};

export const useInfiniteScroll = ({
  callback,
  triggerRef,
  hasScroll = true,
}: UseInfiniteScroll) => {
  const observer = useRef<IntersectionObserver | null>(null);

  useLayoutEffect(() => {
    const triggerElement = triggerRef.current;

    if (callback &&  hasScroll) {
      let options = {
        root: null,
        rootMargin: "0px",
        threshold: 1.0,
      };

      observer.current = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          callback();
        }
      }, options);

      observer.current.observe(triggerElement);

      return () => {
        if (observer.current && triggerElement) {
          observer.current.unobserve(triggerElement);
        }
      };
    }
  }, [triggerRef, callback, hasScroll]);
};
