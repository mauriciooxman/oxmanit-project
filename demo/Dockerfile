# Etapa 1: Construcción
FROM maven:3.8.5-openjdk-17 AS build
WORKDIR /app

# Buscamos el pom.xml donde sea que esté y lo traemos a la raíz
COPY **/pom.xml ./pom.xml
# Buscamos la carpeta src donde sea que esté y la traemos
COPY **/src ./src

# Verificamos qué se copió (para ver en logs)
RUN ls -R

# Construimos
RUN mvn clean package -DskipTests

# Etapa 2: Ejecución
FROM eclipse-temurin:17-jdk-jammy
WORKDIR /app

# Copiamos el jar que acaba de nacer
COPY --from=build /app/target/*.jar app.jar

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "app.jar"]