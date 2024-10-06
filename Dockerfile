# Use Node 22 as the base image
FROM node:22-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package.json package-lock.json ./

# Install dependencies using npm
RUN npm install --registry=https://registry.npmmirror.com/

# Copy the rest of the project files, including app and pages folders
COPY . .

# Build the Next.js app, including both frontend (app) and backend (pages/api)
RUN npm run build

# Expose port 3000 for the Next.js app
EXPOSE 3002

# Start the application in production mode
CMD ["npm", "start"]