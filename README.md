# Свои Люди - Сайт компании по переездам

Профессиональный сайт для компании по переездам "Свои Люди", разработанный на Node.js с использованием Express и EJS.

## Требования

- Node.js (версия 14 или выше)
- npm (Node Package Manager)

## Установка

1. Клонируйте репозиторий:
```bash
git clone https://github.com/your-username/svoiludi.git
cd svoiludi
```

2. Установите зависимости:
```bash
npm install
```

3. Создайте файл .env в корневой директории проекта и добавьте следующие переменные:
```
PORT=3000
```

## Запуск

Для разработки:
```bash
npm run dev
```

Для продакшена:
```bash
npm start
```

Сайт будет доступен по адресу: http://localhost:3000

## Структура проекта

```
svoiludi/
├── public/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── main.js
│   └── images/
├── views/
│   ├── layout.ejs
│   ├── index.ejs
│   ├── services.ejs
│   ├── about.ejs
│   ├── contacts.ejs
│   └── error.ejs
├── app.js
├── package.json
└── README.md
```

## Технологии

- Node.js
- Express.js
- EJS (Embedded JavaScript)
- CSS3
- JavaScript
- Font Awesome
- Google Fonts

## Лицензия

MIT 