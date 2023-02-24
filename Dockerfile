FROM amazoncorretto:8
MAINTAINER Egerino
COPY target/Gerino-0.0.1-SNAPSHOT.jar gerino-app.jar
ENTRYPOINT ["java","-jar","/gerino-app.jar"]
