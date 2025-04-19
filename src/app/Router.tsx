import { BrowserRouter, Routes, Route } from 'react-router';
import { Suspense } from 'react';

const MainPage = () => <div>Главная страница</div>;
const PostPage = () => <div>Страница поста (динамический id)</div>;
const ProfilePage = () => <div>Профиль пользователя</div>;
const NotFoundPage = () => <div>404 — Страница не найдена</div>;

export const AppRouter = () => (
    <BrowserRouter>
        <Suspense fallback={<div>Загрузка...</div>}>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/post/:id" element={<PostPage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </Suspense>
    </BrowserRouter>
); 