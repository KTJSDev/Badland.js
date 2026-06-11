import { PiranhaMessage } from "../../../titan/protocol/PiranhaMessage.js"
import { LogicLong } from "../../../titan/logic/LogicLong.js"

export class LoginOkMessage extends PiranhaMessage {
    id = new LogicLong(0, 0)
    passToken = ""

    encode() {
        super.encode()
        this.id.encode(this.stream)
        this.id.encode(this.stream)
        this.stream.writeString(this.passToken)
        this.stream.writeString()
        this.stream.writeString()
        this.stream.writeVInt(1)
        this.stream.writeVInt(0)
        this.stream.writeVInt(3745)
        this.stream.writeVInt(1)
        this.stream.writeString('dev')
        this.stream.writeVInt(8)
        this.stream.writeVInt(968)
        this.stream.writeVInt(0)
        this.stream.writeString()
        this.stream.writeString('1337')
        this.stream.writeString('1337')
        this.stream.writeVInt(0)
        this.stream.writeString()
        this.stream.writeString()
        this.stream.writeString()
        this.stream.writeString()
        this.stream.writeString('https://dkfwtj0h8hj32.cloudfront.net/1_0_3745')
        this.stream.writeString('0.0.0.0')
        this.stream.writeStringReference('ce5e4008b3404b04cfe8d5389e57bbe8')
    }

    getMessageType() {
        return 20104
    }
}