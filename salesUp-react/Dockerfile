FROM node:20-alpine

RUN npm install -g pnpm

WORKDIR /app

COPY package*.json pnpm-lock.yaml ./

RUN npm config set "@fortawesome:registry" https://npm.fontawesome.com/
RUN npm config set "//npm.fontawesome.com/:_authToken" "ACD8E307-D40D-4B58-932B-141270D5BF98"

RUN pnpm install

COPY . .

RUN pnpm i zod

RUN pnpm build

CMD ["pnpm", "dev"]