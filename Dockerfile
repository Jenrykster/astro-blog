FROM node:lts AS build
RUN useradd --user-group --create-home --shell /bin/false appuser


WORKDIR /app
COPY package*.json ./
COPY patches ./patches
RUN chown -R appuser:appuser /app \
  && npm install
COPY . .
RUN npm run build

FROM nginx:alpine AS runtime
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 8080