## Build the Docker Image
After creating the Dockerfile and index.html, you need to build the Docker image. Run this command in the directory where the Dockerfile and index.html are located:

```
docker build -t nginx-static-webpage .
```

This will build a Docker image named nginx-static-webpage.

## Run the Docker Container
Now, run the Docker container and map port 80 on the container to port 8080 on your host:

```
docker run -p 8080:80 nginx-static-webpage
```
This command maps port 8080 on your local machine to port 80 on the container where Nginx is serving the webpage.

## Access the Static Webpage
Once the container is running, open your browser and visit:


```
http://localhost:8080
```
You should see the static webpage with the message "Welcome to My Dockerland by Nginx!" served by the Nginx container.