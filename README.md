## Области хранения данных:

-   БД на json-server
-   BFF
-   redux store

## Сущности приложения:

-   пользователь: БД (список пользователей), BFF (сессия текущего), стор (отображение в браузере)
-   роль пользователя: БД (список ролей), BFF (сессия пользователя с ролью), столр (использование на клиенте)
-   статья: БД (список статей), стор (отображение в браузере)
-   комментарий: БД (список комментариев), стор (отображение в браузере)

## Таблицы БД::

-   пользователи - users: id / login / password / register_at / role_id
-   роли - roles: id / name
-   статьи - posts: id / title / image_url / content / published_at
-   комментарии - comments: id / author_id / post_id / content

## Схема состояния на BFF:

-   сессия текуущего пользователя: login / password / roles

## Схема для Redux Store (на клиенте):

-   user: id / login / roleId
-   posts: массив post: id / title / imageUrl / publishedAt / commentsCount
-   post: id / title / imageUrl / content / publishedAt / comments: массив comment: id / author / content / publishedAt
-   users: массив user: id / login / registerAt / role
