# study-project

Сайт с кулинарными рецептами.

-   [Деплой](https://effulgent-kashata-524844.netlify.app/)
-   [dummyJSON API](https://dummyjson.com/docs/recipes)
-   Стек: TS, React, Redux, RTK Query, Firestore.

---

## Функционал

-   Регистрация и авторизация пользователей;
-   Поиск по названиям блюд (с сохранением истории поиска для зарегистрированных пользователей);
-   Избранное для зарегистрированных пользователей;

---

## Реализация требований

### 1 уровень (обязательный - необходимый минимум)

-   [x] Реализованы Требования к функциональности.
-   [x] Для хранения учётных записей пользователей использован firestore.
-   [x] Только функциональные компоненты c хуками.
-   [ ] В работе отсутствует намеренное разделение на умные и глупые компоненты.
-   [x] Есть [рендеринг списков](src/components/recipe-list/recipe-list.tsx).
-   [x] Реализована [форма](src/pages/authorization/sign-up.tsx).
-   [x] Есть применение [Context](src/App.tsx).
-   [x] Есть применение [ErrorBoundary](src/App.tsx).
-   [x] Есть кастомный хук: [useStorage](src/hooks/useStorage.ts).
-   [x] Есть использование [prop-types](src/components/recipe-card/recipe-card.tsx) в двух местах.
-   [x] Есть [debounce](src/components/search-bar/search-bar.tsx).
-   [ ] Правильной работы Suspense + lazy добиться не удалось.
-   [x] Redux Toolkit [store](src/providers/store/store.ts).
-   [x] [Слайсы](src/providers/store/slices/user-slice.ts).
-   [x] Есть кастомная [мидлвара](src/providers/store/middleware.ts).
-   [x] Используется [RTK Query](src/providers/store/services/recipes.ts).
-   [x] Там же для вида используется Transforming Responses.

### 2 уровень (необязательный)

-   [x] Используется TypeScript.
-   [x] Настроен [CI/CD](.github/workflows/devel.yml).
