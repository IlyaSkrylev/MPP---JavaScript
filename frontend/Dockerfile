# Используем официальный Node.js образ для сборки
FROM node:18-alpine AS build

WORKDIR /app

# Копируем package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем исходники
COPY . .

# Собираем проект
RUN npm run build

# Используем nginx для сервировки собранного приложения
FROM nginx:alpine

# Копируем собранные файлы из предыдущего шага
COPY --from=build /app/dist /usr/share/nginx/html

# Копируем конфигурацию nginx (опционально)
# COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
