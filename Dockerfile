FROM node:16.13.1-alpine as builder

# Create app directory
RUN mkdir -p /usr/src/leads2b-test
WORKDIR /usr/src/leads2b-test

# Install app dependencies
RUN apk update && apk upgrade
RUN apk add git

# copy the app, note, .dockerignore
COPY . /usr/src/leads2b-test/
RUN npm install

# build necessary, even if no static files are needed
# since it builds the server as well
RUN npm run build

# expose to 5000 on container
EXPOSE 5000

# nuxt env variables
# ENV API_PUBLIC_KEY=${API_PUBLIC_KEY}
# ENV API_PRIVATE_KEY=${API_PRIVATE_KEY}

# set app serving to permissive / assigned
ENV NUXT_HOST=0.0.0.0
# set app port
ENV NUXT_PORT=5000

# start the app
CMD ["npm", "start"]
