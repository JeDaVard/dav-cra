# Choose alpine distribution of node from docker hub
FROM node:alpine as builder
#FROM node:alpine # For ex. AWS EB like numeric builders instead of named, for it's 0

# Create a workdir inside the container
WORKDIR '/app'

# Copy package.json file to /app/ folder
COPY package.json .

# Install deps
RUN npm install

# Copy the project
COPY . .

# Production build
RUN npm run build

# Run the project
CMD ["npm", "start"]

# Make another image, choose nginx distribution from docker hub
FROM nginx

# Expost the port for aws prod enviroment, (elasticBeanstalk)
EXPOSE 80

# Copy your prod build to the folder specified by NGINX (docker hub documentation)
COPY --from=builder /app/build /usr/share/nginx/html
#COPY --from=0 /app/build /usr/share/nginx/html # Here's the builder code [0]