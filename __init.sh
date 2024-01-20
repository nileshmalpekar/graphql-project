docker run -it \
    -v ${PWD}:/app \
    -w /app node:latest \
    bash -c 'npm init --yes && \
        npm pkg set type="module" && \
        npm i @apollo/server graphql graphql-scalars && \
        npm i --save-dev typescript @types/node && \
        npm i -D @graphql-codegen/cli @graphql-codegen/typescript @graphql-codegen/typescript-resolvers'
