# Use a lighter version of Node as a parent image 
FROM node:14-slim
#creates a folder inside container to place the project
RUN mkdir -p /usr/src/app
# Set the working directory to /client_music_react
WORKDIR /usr/src/app
# copies package.json into the container at /usr/src/client_music_react
COPY package*.json ./
# install dependencies and creates folder "node_modules"
RUN npm install -g npm
RUN npm install --legacy-peer-deps
# Copy the current directory (client_music_react folder, node_modules is ignored thanks dockerignore) contents into the workdir folder
COPY . .
# Make port 3000 available to the world outside this container
EXPOSE 3000
# Run the app when the container launches
CMD ["npm", "start"]