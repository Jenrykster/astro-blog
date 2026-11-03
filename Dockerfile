FROM node:lts AS build
RUN useradd --user-group --create-home --shell /bin/false appuser

ARG PUBLIC_VIEW_COUNTER_API
ARG PUBLIC_SECRET_LOL

WORKDIR /app
COPY package*.json ./
COPY patches ./patches
RUN chown -R appuser:appuser /app \
  && npm install
COPY . .
RUN npm run build

CMD ["node", "./dist/server/entry.mjs", "--host 0.0.0.0"]

EXPOSE 4321
