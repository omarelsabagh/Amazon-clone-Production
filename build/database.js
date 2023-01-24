"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const pg_1 = require("pg");
dotenv_1.default.config();
//destructing env variables
const { POSTGRES_HOST, POSTGRES_DB, POSTGRES_USER, POSTGRES_PASSWORD, PG_PORT } = process.env;
const devComfig = `postgresql://${POSTGRES_USER}:${POSTGRES_PASSWORD}@${POSTGRES_HOST}:${PG_PORT}/${POSTGRES_DB}`;
const proConfig = `postgresql://postgres:C1W98qUI7YZOGhxTTs1W@containers-us-west-90.railway.app:7758/railway`;
// `postgres://jmibpuccodogbq:288d25855c1a39eb5e2fe663f92bafec37d5bdd4db9b0bb695f55907dfb00c24@ec2-54-91-223-99.compute-1.amazonaws.com:5432/dckfpem231vnaf`
//creating connection
const Client = new pg_1.Pool({
    connectionString: proConfig,
});
exports.default = Client;
