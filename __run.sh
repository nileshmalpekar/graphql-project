#!/bin/bash
source settings

# dev or deploy
TARGET="deploy" # "dev"

for i in "$@"; do
  case $i in
    -t=*|--target=*)
      TARGET="${i#*=}"
      shift # past argument=value
      ;;
    -*|--*)
      echo "Unknown option $i"
      exit 1
      ;;
    *)
      ;;
  esac
done

IMG_NAME="${PROJECT_NAME}:${TARGET}_${PROJECT_VERSION}"

if [ $TARGET == "dev" ]
then
    docker run \
        -it \
        --rm \
        -p 4000:4000 \
        -v $(PWD):/usr/src/app \
        ${IMG_NAME} \
        npm ci && npm run start
else
    docker run \
        -it \
        --rm \
        -p 4000:4000 \
        $IMG_NAME
fi