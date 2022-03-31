FROM yarn:1

WORKDIR /app

COPY package*.json .

RUN yarn add

COPY . .

ENV PORT=3000

EXPOSE 3000

CMD ["yarn", "start"]