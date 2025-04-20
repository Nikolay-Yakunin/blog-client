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
  baseQuery: fetchBaseQuery({
    baseUrl: "https://blog-service-production-0f0d.up.railway.app/api/v1/",
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
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
    getPost: builder.query<PostResponse, string>({
      query: (id) => ({
        url: `posts/${id}`,
        method: "GET",
      }),
    }),
    // Здесь будут другие endpoints (get, update, delete)
  }),
});

export const { useCreatePostMutation, useGetPostsQuery, useGetPostQuery } =
  postApi;
