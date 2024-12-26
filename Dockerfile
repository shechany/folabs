FROM node:16-alpine

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package.json .

# Install the dependencies
RUN npm install

# Copy the app source code
COPY . .

# Expose the port that your app will run on
EXPOSE 8080

# Start the app when the container starts
CMD ["npm","start"]