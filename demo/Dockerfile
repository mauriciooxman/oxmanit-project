# Etapa 1: Construcción
FROM maven:3.8.5-openjdk-17 AS build
WORKDIR /app

# Copiamos TODO el contenido de la carpeta demo a la raíz de /app
COPY demo/ .

# Verificamos qué hay en la carpeta (ayuda a ver errores en logs)
RUN ls -l

# Construimos saltando tests
RUN mvn clean package -DskipTests

# Etapa 2: Ejecución
FROM eclipse-temurin:17-jdk-jammy
WORKDIR /app

# Copiamos el jar generado desde target
COPY --from=build /app/target/*.jar app.jar

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "app.jar"]