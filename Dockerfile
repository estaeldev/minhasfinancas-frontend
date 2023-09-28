FROM node:18-alpine
EXPOSE 3000
COPY . .
ENTRYPOINT ["yarn", "start"]
