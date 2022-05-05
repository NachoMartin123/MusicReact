# Use a lighter version of Node as a parent image 
FROM node:17
#creates a folder inside container to place the project
RUN mkdir -p /app
# Set the working directory to /app
# Any RUN, CMD, ADD, COPY, or ENTRYPOINT command will be executed in WORKDIR.
WORKDIR /app
# copies package.json into the container at WORKDIR
COPY package*.json .
# install dependencies and creates folder "node_modules"
# legacy-peer-deps solves problems between dependency versions,  EJ slider uses react15 and nav react17
RUN npm install --legacy-peer-deps
# Copy the current directory (WORKDIR=usr/src/app folder, node_modules is ignored thanks dockerignore) contents into the workdir folder
COPY . .
# Make port 3000 available to the world outside this container
EXPOSE 3000
# Run the app when the container launches (path = WORKDIR)
CMD ["npm", "start", "--reload"]