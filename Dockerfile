FROM node:16.2.0-alpine
LABEL maintainer="julieth15gomez@gmail.com"
WORKDIR /code

COPY package.json .
RUN npm i
RUN npm install -g webpack-cli
ENV PATH="/code/node_modules/.bin:$PATH"
ENV PATH=$PATH:/home/node/.npm-global/bin

RUN apk update && apk add --update --no-cache git zsh curl
RUN sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
COPY . .

CMD ["npm", "run" , "serve"]
