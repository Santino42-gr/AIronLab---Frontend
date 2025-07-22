FROM node:24-alpine

WORKDIR /app

COPY ./package.json ./

RUN npm install

COPY . .

# Получаем аргументы из docker-compose
ARG NEXT_PUBLIC_API_URL
ENV NEXT_PUBLIC_API_URL=$NEXT_PUBLIC_API_URL

ARG REACT_APP_API_URL
ENV REACT_APP_API_URL=$REACT_APP_API_URL

RUN npm run build

CMD ["npm", "run", "start"]