# Use an official Python runtime as a parent image
FROM python:3.10

# Set the working directory in the container
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . .

# Install any dependencies specified in requirements.txt
# RUN python3 -m http.server

# Make port 5000 available to the world outside this container
EXPOSE 8000

# Define environment variable
ENV FLASK_APP=main.py

# Run main.py when the container launches
CMD ["python3", "-m", "http.server"]
