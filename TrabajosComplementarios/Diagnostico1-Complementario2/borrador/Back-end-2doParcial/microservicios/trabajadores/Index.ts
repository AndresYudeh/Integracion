
import { config } from "dotenv"
config()

import{ Server } from './src/Server'

const server = new Server();
server.listen()
