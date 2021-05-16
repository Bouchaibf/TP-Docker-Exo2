FROM node:14-alpine 

COPY datehorloge.js /

CMD [ "node", "datehorloge.js" ]