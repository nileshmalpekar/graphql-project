FROM node:latest as dev

# Create app directory
WORKDIR /usr/src/app


FROM dev as builder

# Install app dependencies
COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run compile

FROM node:slim as deploy

ENV NODE_ENV production
USER node

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

RUN npm ci --production

COPY --from=builder /usr/src/app/dist ./dist
COPY --from=builder /usr/src/app/*.graphql ./
COPY --from=builder /usr/src/app/books.json ./

EXPOSE 4000
CMD [ "node", "dist/index.js" ]