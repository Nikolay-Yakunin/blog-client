import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface User {
  id: string;
  username: string;
  email: string;
  provider: string;
  provider_id: string;
  avatar: string;
  bio: string;
  role: string;
  is_active: boolean;
  last_login: string;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
}

export interface OAuthCallbackResponse {
  token: string;
  user: User;
}

export const oauthApi = createApi({
  reducerPath: "oauthApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://blog-service-production-0f0d.up.railway.app/api/v1/auth/",
  }),
  endpoints: (builder) => ({
    googleCallback: builder.query<
      OAuthCallbackResponse,
      { code: string; state?: string }
    >({
      query: ({ code, state }) => {
        let url = `callback/google?code=${encodeURIComponent(code)}`;
        if (state) url += `&state=${encodeURIComponent(state)}`;
        return {
          url,
          method: "GET",
          credentials: "include",
        };
      },
    }),
  }),
});

export const { useGoogleCallbackQuery } = oauthApi;
