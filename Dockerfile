# Etap budowania aplikacji
FROM --platform=$BUILDPLATFORM node:20 AS builder
WORKDIR /app
COPY package*.json ./
RUN --mount=type=cache,target=/root/.npm \
    npm install
COPY . .

# Etap końcowy - tworzymy lekki obraz oparty na node:alpine i kopiujemy tylko potrzebne pliki
FROM --platform=$TARGETPLATFORM node:20-alpine3.16
LABEL author="Marcin Garbacz"
WORKDIR /app
COPY package*.json index.js ./

RUN --mount=type=cache,target=/root/.npm \
    npm install --production

CMD [ "npm", "start" ]

HEALTHCHECK --interval=30s --timeout=5s --start-period=5s \
    CMD wget --quiet --spider --tries=1 http://localhost:3000/healthcheck || exit 1
