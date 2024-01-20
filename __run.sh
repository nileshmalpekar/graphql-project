docker run -it \
    -p 4000:4000 \
    -v ${PWD}:/app \
    -w /app node:latest npm start