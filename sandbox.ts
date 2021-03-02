import { camelCase, paramCase, pascalCase, snakeCase } from "https://deno.land/x/case/mod.ts";



const camel = camelCase("test string");
const param = paramCase("test string");
const pascal = pascalCase("test string");
const snake = snakeCase("test string");

console.log(camel, param, pascal, snake);
