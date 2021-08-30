From ubuntu:18.04

WORKDIR /app
COPY . .
RUN apt-get update && apt-get upgrade -y && \
    apt-get install -y nodejs \
    npm
RUN npm install
RUN npm install path
EXPOSE 2000
CMD ["node","app.js"]



