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

docker build \
    -t ${IMG_NAME} \
    --target ${TARGET} \
    -f Dockerfile \
    .

if [ $TARGET == "dev" ]
then
    docker run \
        -v $(PWD):/usr/src/app \
        ${IMG_NAME} \
        npm ci
fi
