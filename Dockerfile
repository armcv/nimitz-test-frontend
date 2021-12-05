
FROM node:16.13.0-alpine

WORKDIR /usr/src/app
COPY . .
RUN npm && npm build

# Step 2: Use build output from 'builder'
FROM nginx:latest
LABEL version="1.0"

COPY nginx.conf /etc/nginx/nginx.conf

WORKDIR /usr/share/nginx/html
COPY --from=builder /usr/src/app/dist/my-angular-app/ .