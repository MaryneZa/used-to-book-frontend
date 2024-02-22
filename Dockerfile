# Use a base image with Node.js and npm
FROM node:alpine

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json into the container
COPY package.json ./

COPY package-lock.json ./

# Install dependencies using npm
RUN npm install

# Copy the rest of the application code into the container
COPY . .

# Build the Next.js application
RUN npm run build

# Expose the port on which the Next.js application will run
EXPOSE 3000

# Specify the command to start the Next.js application
CMD ["npm", "start"]
