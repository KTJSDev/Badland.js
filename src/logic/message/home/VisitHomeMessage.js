import { PiranhaMessage } from "../../../titan/protocol/PiranhaMessage.js";

export class VisitHomeMessage extends PiranhaMessage {
    getMessageType() {
        return 14113
    }
}