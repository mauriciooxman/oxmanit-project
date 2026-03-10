# Etapa 1: Construcción
FROM maven:3.8.5-openjdk-17 AS build
WORKDIR /app
# Copiamos archivos de configuración
COPY pom.xml .
# Copiamos el código fuente
COPY src ./src
# Construimos saltando los tests
RUN mvn clean package -DskipTests

# Etapa 2: Ejecución
FROM eclipse-temurin:17-jdk-jammy
WORKDIR /app
# Copiamos el jar generado (usamos un nombre genérico para evitar fallos si el nombre cambia)
COPY --from=build /app/target/*.jar app.jar

# Exponemos el puerto
EXPOSE 8080

# Comando para arrancar la aplicación
ENTRYPOINT ["java", "-jar", "app.jar"]