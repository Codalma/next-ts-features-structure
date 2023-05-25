# Base stage
FROM node:alpine as base

WORKDIR /usr/src/app/next

RUN npm cache clean --force

COPY package*.json ./
COPY tsconfig.json ./

RUN npm install

COPY . .

# Development stage
FROM base as dev

CMD ["npm", "run", "dev"]

# Test stage
FROM base as test

CMD ["npm", "run", "test:coverage"]

# Build stage
FROM base as build

RUN ["npm", "run", "build"]

# Production state
FROM nginx:1.12-alpine as prod

COPY --from=build /usr/src/app/next/out /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]
