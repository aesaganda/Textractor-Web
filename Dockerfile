FROM node:20-alpine

# Create app directory

WORKDIR /usr/src/app

# Install app dependencies

COPY package*.json ./

RUN npm install yarn

RUN yarn install

# Bundle app source

COPY . .

EXPOSE 5173

CMD [ "yarn", "dev", "--host"]