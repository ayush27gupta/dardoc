# Use the official Node.js image to build and run the React app
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your React app's code
COPY . .

# Expose the port the app will run on (default for React dev server is 3000)
EXPOSE 3000

# Run the React development server
CMD ["npm", "start"]
