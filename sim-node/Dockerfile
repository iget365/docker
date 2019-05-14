FROM qcidocker/qci_base:latest
RUN rpm --rebuilddb; yum -y install python-pip
RUN pip install qcicli -i http://pypi.dq.oa.com/simple/ --trusted-host=pypi.dq.oa.com
ARG NODE_VERSION=10.15.3
ENV NODE_VERSION=${NODE_VERSION}
ENV NODE_HOME /usr/local/nodejs
ENV NODE_PATH $NODE_HOME/lib/node_modules
RUN mkdir -p $NODE_HOME
WORKDIR $NODE_HOME
RUN wget http://nodejs.org/dist/v$NODE_VERSION/node-v$NODE_VERSION-linux-x64.tar.xz
RUN tar -xvf node-v$NODE_VERSION-linux-x64.tar.xz
RUN mv node-v$NODE_VERSION-linux-x64/* .
RUN rm -fr node-v$NODE_VERSION-linux-x64.tar.xz
RUN rm -fr node-v$NODE_VERSION-linux-x64
ENV PATH="${PATH}:$NODE_HOME/bin"
RUN node -v && npm -v
WORKDIR /
