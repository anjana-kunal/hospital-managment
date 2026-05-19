FROM node:22-bookworm-slim

WORKDIR /app

COPY package*.json ./
COPY prisma ./prisma

RUN apt-get update \
  && apt-get install -y --no-install-recommends ca-certificates openssl \
  && rm -rf /var/lib/apt/lists/*

RUN npm ci --include=dev && npx prisma generate

COPY src ./src

RUN chown -R node:node /app

USER node

ENV NODE_ENV=production

EXPOSE 5000

CMD ["node", "src/server.js"]
