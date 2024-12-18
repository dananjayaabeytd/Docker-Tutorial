# use the base image from Docker Hub
FROM node:20-alpine

# Set the working directory
WORKDIR /app

# Copy the package.json file and package-lock.json file
COPY package*.json ./

# Install the dependencies
RUN npm install

# copy the rest of the files
COPY . .

# Expose the port
EXPOSE 5173

# Start the application
CMD [ "npm", "run" , "dev" ]