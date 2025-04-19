import { BrowserRouter, Routes, Route } from 'react-router';
import { Suspense } from 'react';
import Layout from '@shared/ui/Layout/Layout';
import AuthPage from '@pages/AuthPage/AuthPage';
import OAuthCallbackPage from '@pages/OAuthCallbackPage/OAuthCallbackPage';
import { QueryAuthHandler } from '@pages/MainPage/QueryAuthHandler';
import { CreatePostPage } from '@pages/CreatePostPage';
import { PostsPage } from '@pages/PostsPage';

const MainPage = () => <><QueryAuthHandler /><div>Главная страница</div></>;
const PostPage = () => <div>Страница поста (динамический id)</div>;
const ProfilePage = () => <div>Профиль пользователя</div>;
const NotFoundPage = () => <div>404 — Страница не найдена</div>;

export const AppRouter = () => (
    <BrowserRouter basename='/blog-client'>
        <Suspense fallback={<div>Загрузка...</div>}>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<MainPage />} />
                    <Route path="posts" element={<PostsPage />} />
                    <Route path="post/create" element={<CreatePostPage />} />
                    <Route path="post/:id" element={<PostPage />} />
                    <Route path="profile" element={<ProfilePage />} />
                    <Route path="auth" element={<AuthPage />} />
                    <Route path="oauth/callback" element={<OAuthCallbackPage />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Route>
            </Routes>
        </Suspense>
    </BrowserRouter>
); 