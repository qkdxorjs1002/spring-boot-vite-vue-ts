FROM maven:3-jdk-11

ADD . /springbootvuejs
WORKDIR /springbootvuejs

RUN ls -l

RUN mvn clean install

FROM openjdk:17.0.2-jdk

MAINTAINER paragonnov

VOLUME /tmp

COPY --from=0 "/springbootvuejs/backend/target/backend-0.0.1-SNAPSHOT.jar" app.jar

ENV JAVA_OPTS=""

ENTRYPOINT [ "sh", "-c", "java $JAVA_OPTS -Djava.security.egd=file:/dev/./urandom -jar /app.jar" ]