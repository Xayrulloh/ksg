import swagger from "@fastify/swagger";
import swaggerUI from "@fastify/swagger-ui";
import type { FastifyInstance } from "fastify";

export async function registerSwagger(fastify: FastifyInstance) {
  await fastify.register(swagger, {
      openapi: {
          info: {
              title: "KSG API",
              version: process.env.npm_package_version as string,
          }
      },
  });

  await fastify.register(swaggerUI, {
      routePrefix: "docs",
      uiConfig: {
          docExpansion: "none",
          persistAuthorization: true,
      },
  });
}