import { Server } from "node:net"
import { Session } from "./server/session/Session.js";

class PrimitiveTitanCore {
    static PORT = 9339;
    static instance;
    constructor() {
        this.server = new Server()
        PrimitiveTitanCore.instance = this
    }

    init() {
        this.server.on('connection', (client) => {
            const session = new Session(client)
            console.log("A wild connection appeard!")
            session.init()
        })

        this.server.once('listening', () => console.log(`Server started on ${PrimitiveTitanCore.PORT} port!`))
        this.server.listen(PrimitiveTitanCore.PORT)
    }
}

const server = new PrimitiveTitanCore()
server.init()

process.on("uncaughtException", e => console.log(e));
process.on("unhandledRejection", e => console.log(e));