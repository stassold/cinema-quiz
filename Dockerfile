# Используем рантайм-образ с установленным Node.js
FROM node:latest

# Установите рабочую директорию в /app
WORKDIR /app

# Скопируйте package.json и package-lock.json в /app
COPY package*.json ./

# Установите зависимости
RUN npm install

# Скопируйте все файлы проекта в /app
COPY . .

# Выполните команду сборки проекта
RUN npm run build:prod

# Установите переменную окружения для порта приложения
ENV PORT=3000

# Откройте порт 3000
EXPOSE 3000

# Запустите приложение при запуске контейнера
CMD ["npm", "start"]