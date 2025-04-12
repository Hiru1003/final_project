# frontend/Dockerfile

# Stage 1: Build React app
FROM node:18-alpine AS build

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .
RUN npm run build

# Stage 2: Serve with nginx
FROM nginx:alpine

COPY --from=build /app/build /usr/share/nginx/html

# Remove default nginx static config if needed
RUN rm /etc/nginx/conf.d/default.conf

# Add your own nginx config (optional)
# COPY nginx.conf /etc/nginx/conf.d

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
