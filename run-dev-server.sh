#!/bin/bash

# Figure out where this script is located
PROJECT_DIR=$(dirname "$(readlink -f "$0")")

# Replace the current shell with an interactive Docker container
exec docker run -it \
	-v /etc/group:/etc/group:ro \
	-v /etc/passwd:/etc/passwd:ro \
	-u $(id -u $USER):$(id -g $USER) \
	-v $PROJECT_DIR:/app \
	-p 80:8080 \
	devbox
