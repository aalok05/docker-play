
# stage: 1 — the build environment
FROM node:latest as react-build
WORKDIR /app
COPY . ./
RUN npm i
RUN npm run build

# stage: 2 — the production environment
FROM nginx:alpine  as react-runtime
COPY --from=react-build /app/build /usr/share/nginx/html/
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]