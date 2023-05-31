# syntax=docker/dockerfile:1
FROM mcr.microsoft.com/playwright:v1.34.3-jammy

COPY . $HOME/src
WORKDIR $HOME/src

RUN npm install
RUN npx playwright test