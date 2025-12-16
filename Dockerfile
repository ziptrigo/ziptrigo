# Build stage
FROM node:22-alpine AS build

WORKDIR /app

# Enable corepack to use the Yarn version pinned in package.json
RUN corepack enable

COPY package.json yarn.lock .yarnrc.yml ./
COPY .yarn/ .yarn/

RUN corepack yarn install --immutable

COPY . .

RUN corepack yarn generate

# Runtime stage (static)
FROM nginx:1.27-alpine AS runtime

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/.output/public /usr/share/nginx/html

EXPOSE 8005

CMD ["nginx", "-g", "daemon off;"]
