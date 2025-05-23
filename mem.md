 Базовая инфраструктура и каркас приложения
Роутинг: Настроить маршруты для главных страниц (главная, пост, профиль, 404).
Глобальные провайдеры: Подключить Redux Toolkit, RTK Query, React Router, темы, локализацию (RU).
Макет layout: Сделать базовый layout (header, main, footer), добавить переключение темы.
2. Аутентификация (OAuth)
UI: Кнопки входа через GitHub/Google/VK.
Логика: Имитация или интеграция с OAuth (можно начать с mock).
Хранение токена: JWT в localStorage/sessionStorage.
Состояние пользователя: Слайс user, хранение роли, логика выхода.
3. Главная страница (список постов)
RTK Query: Базовый запрос на получение постов (mock или реальный API).
UI: Список постов, skeleton-загрузка, пагинация (offset/limit).
Фильтрация: Поиск/фильтр по тегам (можно позже).
4. Страница поста
Просмотр поста: Отображение текста, тегов, автора, даты.
Комментарии: Список комментариев (без вложенности на первом этапе).
Счётчик просмотров: Просто отображение (реализация логики позже).
5. Создание/редактирование поста
Доступ: Только для verified.
UI: Форма с markdown-редактором, выбор тегов, статус (черновик/опубликовано).
RTK Query: Запросы на создание/редактирование (mock/реальный API).
6. Профиль пользователя
Просмотр: Аватар, bio, роль, last_login.
Редактирование: Только аватар и bio.
Заявка на верификацию: Форма для отправки контакта.
7. Базовая модерация (минимум)
Удаление постов/комментариев: Только для модератора/админа.
UI: Кнопки удаления, подтверждение действия.
8. Ошибки, загрузки, уведомления
Toast/snackbar: Для ошибок и успешных операций.
Индикаторы загрузки: Skeletons, спиннеры.
9. Страницы 404, 500 и индикатор статуса API
Рекомендация по старту:
Начни с инфраструктуры (app, роутинг, провайдеры, layout), затем реализуй аутентификацию и главную страницу с постами. Это даст быстрый видимый результат и позволит постепенно наращивать функционал.
Если хочешь, могу расписать пример структуры файлов для первого этапа или предложить шаблон кода для старта!
