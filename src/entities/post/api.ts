import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface PostCreateRequest {
  title: string;
  description: string;
  raw_content: string;
  tags: string[];
  status: "draft" | "published";
}

export interface PostResponse {
  id: string;
  title: string;
  slug: string;
  description: string;
  raw_content: string;
  html_content: string;
  status: "draft" | "published" | "archived";
  tags: string[];
  view_count: number;
  created_at: string;
  updated_at: string;
  published_at?: string;
  author_id: string;
}

export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://blog-service-production-0f0d.up.railway.app/api/v1/" }),
  endpoints: (builder) => ({
    createPost: builder.mutation<PostResponse, PostCreateRequest>({
      query: (body) => ({
        url: "posts",
        method: "POST",
        body,
      }),
    }),
    getPosts: builder.query<
      PostResponse[],
      { offset?: number; limit?: number }
    >({
      query: ({ offset = 0, limit = 10 } = {}) => ({
        url: `posts?offset=${offset}&limit=${limit}`,
        method: "GET",
      }),
    }),
    // Здесь будут другие endpoints (get, update, delete)
  }),
});

export const { useCreatePostMutation, useGetPostsQuery } = postApi;
