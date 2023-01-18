FROM amazoncorretto:11-alpine-jdk
MAINTAINER Gerino Enzo
COPY target/Gerino-0.0.1-SNAPSHOT portfoliogerino-app.jar
ENTRYPOINT ["java","-jar","/portfoliogerino-app.jar"]
