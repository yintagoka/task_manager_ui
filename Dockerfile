FROM node:16.16.0-alpine3.15
WORKDIR /app
EXPOSE 3000 
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json ./
COPY package-lock.json ./
COPY ./ ./
RUN npm install
CMD ["npm", "start"]
# CMD tail -f /dev/null