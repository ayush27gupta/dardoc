# Use the official Node.js image to build the React app
FROM node:18-alpine as build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your React app's code
COPY . .

# Build the React app for production
RUN npm start

# Serve the build using the 'serve' package
RUN npm install -g serve

# Expose the port the app will run on
EXPOSE 5000

# Run the app using the serve command
CMD ["serve", "-s", "build", "-l", "5000"]
