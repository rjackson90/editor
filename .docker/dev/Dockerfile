FROM node:stretch

WORKDIR /app
RUN apt-get update \
	&& apt-get install --yes nodejs-legacy 

CMD ["npm", "start"]
EXPOSE 8080
