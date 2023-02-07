FROM amazoncorretto:11
MAINTAINER Egerino
COPY target/Gerino-0.0.1-SNAPSHOT.jar Gerino-0.0.1-SNAPSHOT.jar
ENTRYPOINT ["java","-jar","/Gerino-0.0.1-SNAPSHOT.jar"]
