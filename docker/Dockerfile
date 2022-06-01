# Dockerfile for peopledata.org.cn/uni-resolver-driver-did-peopledata

FROM node:10
MAINTAINER jerry zhang<jerry.zhang.bill@gmail.com>

# build uni-resolver-driver-did-peopledata

WORKDIR /usr/src/app
COPY package.json ./
RUN npm install
COPY . .

# variables

ENV uniresolver_driver_did_peopledata_Setting= Setting

# done

EXPOSE 8088

CMD [ "node", "index.js" ]
