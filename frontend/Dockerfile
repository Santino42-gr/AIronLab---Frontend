FROM node:24-alpine

WORKDIR /app

COPY ./package.json ./

RUN npm config set registry https://registry.npmmirror.com/ # китайское зеркало npm чтобы работало на российском сервере
RUN npm install

COPY . .

RUN npm run build

CMD ["npm", "run", "start"]