Переробити скрипт з уроку 32. Зробити наступне:

1. Отримати токен на https://github.com/settings/tokens.

2. Створити клас для роботи з api github. Даний клас має приймати токен з п1 та ім'я користувача в конструкторі.

3. Написати метод getRepos(), який буде робити запит на сервер та повертати результат. В запиті потрібно додати заголовок з вашим токеном (https://docs.github.com/en/rest/overview/authenticating-to-the-rest-api?apiVersion=2022-11-28#basic-authentication). Документація, як використовувати header в fetch (https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch).

4. Створити новий екземпляр класу та використати метод з п3 при завантаженні сторінки.
