docker run -it \
    -v ${PWD}:/app \
    -w /app node:latest \
    bash -c 'npm init --yes && npm pkg set type="module" && npm install @apollo/server graphql && npm install --save-dev typescript @types/node'