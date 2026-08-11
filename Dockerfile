FROM node:20-alpine
WORKDIR /app
COPY backend-node/package*.json ./
RUN npm ci --omit=dev
COPY backend-node/src ./src
EXPOSE 8080
CMD ["npm", "start"]
