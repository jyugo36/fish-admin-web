FROM public-cn-beijing.cr.volces.com/public/nginx:latest

WORKDIR /dist

COPY run.sh /opt/application/

COPY nginx.conf /etc/nginx/conf.d/default.conf

RUN chmod -R 777 /opt/application/run.sh

# 拷贝静态资源
COPY dist  .

EXPOSE 8000

CMD /opt/application/run.sh