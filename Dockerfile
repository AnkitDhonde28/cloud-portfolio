# 1. Use official Node.js image
FROM node:18

# 2. Set working directory inside container
WORKDIR /app

# 3. Copy dependency files
COPY package*.json ./

# 4. Install dependencies
RUN npm install

# 5. Copy the rest of the app
COPY . .

# 6. Start the app
CMD ["npm", "start"]
