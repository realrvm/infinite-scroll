import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { Post } from "../types";
import { URL } from "@/shared/lib/constants";

const postApi = createApi({
  reducerPath: "post",
  baseQuery: fetchBaseQuery({
    baseUrl: URL,
  }),
  endpoints: (build) => ({
    fetchPostsList: build.query<Post[], { limit: number; start: number }>({
      query: ({ limit = 5, start = 0 }) => ({
        url: "/posts",
        params: {
          _limit: limit,
          _start: start,
        },
      }),
    }),
    fetchPostById: build.query<Post, number>({
      query: (id: number = 1) => ({
        url: `/posts/${id}`,
      }),
    }),
  }),
});

export { postApi };
