# Use Node.js official image
FROM node:20-alpine

# Set working directory inside container
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the project files
COPY . .

# Build Next.js app
RUN npm run build

# Expose port 3000
EXPOSE 3000

# Run the app
CMD ["npm", "start"]
