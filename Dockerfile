FROM joonas/alpine:f4fddc471ec2-nodejs

RUN npm install -g po2json@0.4.4 minimist@1.2.0

# stupid nodejs
ENV NODE_PATH=/usr/lib/node_modules

ADD main.js /main.js

ENTRYPOINT ["node", "/main.js"]
