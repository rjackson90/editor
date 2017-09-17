FROM node:stretch

WORKDIR /app
RUN apt-get update \
	&& apt-get install --yes nodejs-legacy vim

CMD ['/bin/bash']
EXPOSE 8080
