import { postApi } from "@/entities/posts";

export const useGetPostsList = postApi.endpoints.fetchPostsList.useQuery;
export const useGetPostById = postApi.endpoints.fetchPostById.useQuery;
