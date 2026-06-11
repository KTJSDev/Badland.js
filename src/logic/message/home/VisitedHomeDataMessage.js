import { LogicLong } from "../../../titan/logic/LogicLong.js";
import { PiranhaMessage } from "../../../titan/protocol/PiranhaMessage.js";
import { ByteStreamHelper } from "../../helper/ByteStreamHelper.js";
import { OwnHomeDataMessage } from "./OwnHomeDataMessage.js";
import { LogicKeyValue } from "../../home/data/LogicKeyValue.js";

export class VisitedHomeDataMessage extends PiranhaMessage {
    keyValues = [
            [
                new LogicKeyValue(5000001, 696969), // Gold
                new LogicKeyValue(5000002, 696969),
                new LogicKeyValue(5000023, 1),
                new LogicKeyValue(5000004, 0),
            ],
            [], [], [],
            [
                new LogicKeyValue(5000012, 228),
                new LogicKeyValue(5000016, 0),
                new LogicKeyValue(5000011, 676767),
                new LogicKeyValue(5000027, 676767),
                new LogicKeyValue(5000013, 1337)
            ],
            [
                new LogicKeyValue(4000030, 0),
                new LogicKeyValue(4000056, 0),
                new LogicKeyValue(4000002, 0),
                new LogicKeyValue(4000019, 0),
                new LogicKeyValue(4000016, 0),
                new LogicKeyValue(4000001, 0),
                new LogicKeyValue(4000010, 0),
                new LogicKeyValue(4000044, 0)
            ],
            []
        ]
    encode() {
        super.encode()

        this.stream.writeVInt(3)

        // LogicGameHomeVisitData
        // LogicSpellDeck
        this.stream.writeBoolean(true)
        this.stream.writeBoolean(true)
        this.stream.writeBoolean(true)
        this.stream.writeBoolean(true)
        this.stream.writeBoolean(true)
        this.stream.writeBoolean(true)
        this.stream.writeBoolean(true)
        this.stream.writeBoolean(true)

        // LogicSpell
        this.stream.writeVInt(30)
        this.stream.writeVInt(0)
        this.stream.writeVInt(0)
        this.stream.writeVInt(1)
        this.stream.writeVInt(2)
        this.stream.writeVInt(15)
        this.stream.writeVInt(15)
        this.stream.writeVInt(0)
        this.stream.writeVInt(0)
        this.stream.writeBoolean(true)
        this.stream.writeBoolean(false)
        this.stream.writeVInt(-1)
        this.stream.writeVInt(-1)
        this.stream.writeVInt(0)

        // LogicSpell
        this.stream.writeVInt(56)
        this.stream.writeVInt(1)
        this.stream.writeVInt(1)
        this.stream.writeVInt(1)
        this.stream.writeVInt(0)
        this.stream.writeVInt(15)
        this.stream.writeVInt(15)
        this.stream.writeVInt(0)
        this.stream.writeVInt(0)
        this.stream.writeBoolean(false)
        this.stream.writeBoolean(false)
        this.stream.writeVInt(-1)
        this.stream.writeVInt(-1)
        this.stream.writeVInt(0)

        // LogicSpell
        this.stream.writeVInt(2)
        this.stream.writeVInt(0)
        this.stream.writeVInt(0)
        this.stream.writeVInt(1)
        this.stream.writeVInt(2)
        this.stream.writeVInt(15)
        this.stream.writeVInt(15)
        this.stream.writeVInt(0)
        this.stream.writeVInt(0)
        this.stream.writeBoolean(true)
        this.stream.writeBoolean(false)
        this.stream.writeVInt(-1)
        this.stream.writeVInt(-1)
        this.stream.writeVInt(0)

        // LogicSpell
        this.stream.writeVInt(19)
        this.stream.writeVInt(1)
        this.stream.writeVInt(1)
        this.stream.writeVInt(1)
        this.stream.writeVInt(1)
        this.stream.writeVInt(15)
        this.stream.writeVInt(15)
        this.stream.writeVInt(0)
        this.stream.writeVInt(0)
        this.stream.writeBoolean(false)
        this.stream.writeBoolean(false)
        this.stream.writeVInt(-1)
        this.stream.writeVInt(-1)
        this.stream.writeVInt(0)

        // LogicSpell
        this.stream.writeVInt(16)
        this.stream.writeVInt(0)
        this.stream.writeVInt(0)
        this.stream.writeVInt(29680781)
        this.stream.writeVInt(3)
        this.stream.writeVInt(13)
        this.stream.writeVInt(13)
        this.stream.writeVInt(2)
        this.stream.writeVInt(0)
        this.stream.writeBoolean(true)
        this.stream.writeBoolean(false)
        this.stream.writeVInt(-1)
        this.stream.writeVInt(-1)
        this.stream.writeVInt(0)

        // LogicSpell
        this.stream.writeVInt(1)
        this.stream.writeVInt(0)
        this.stream.writeVInt(0)
        this.stream.writeVInt(29680781)
        this.stream.writeVInt(1)
        this.stream.writeVInt(12)
        this.stream.writeVInt(12)
        this.stream.writeVInt(0)
        this.stream.writeVInt(0)
        this.stream.writeBoolean(false)
        this.stream.writeBoolean(false)
        this.stream.writeVInt(-1)
        this.stream.writeVInt(-1)
        this.stream.writeVInt(0)

        // LogicSpell
        this.stream.writeVInt(10)
        this.stream.writeVInt(0)
        this.stream.writeVInt(0)
        this.stream.writeVInt(29680784)
        this.stream.writeVInt(1)
        this.stream.writeVInt(8)
        this.stream.writeVInt(8)
        this.stream.writeVInt(0)
        this.stream.writeVInt(0)
        this.stream.writeBoolean(false)
        this.stream.writeBoolean(false)
        this.stream.writeVInt(-1)
        this.stream.writeVInt(-1)
        this.stream.writeVInt(0)

        // LogicSpell
        this.stream.writeVInt(44)
        this.stream.writeVInt(0)
        this.stream.writeVInt(0)
        this.stream.writeVInt(29680784)
        this.stream.writeVInt(1)
        this.stream.writeVInt(7)
        this.stream.writeVInt(7)
        this.stream.writeVInt(0)
        this.stream.writeVInt(0)
        this.stream.writeBoolean(false)
        this.stream.writeBoolean(false)
        this.stream.writeVInt(-1)
        this.stream.writeVInt(-1)
        this.stream.writeVInt(0)
        // LogicSpellDeck end

        new LogicLong(0, 1).encode(this.stream)
        // LogicGameHomeVisitData end

        // LogicClientAvatar (OwnerLogicClientAvatar)
        ByteStreamHelper.encodeLogicLong(this.stream, new LogicLong(0, 1))
        ByteStreamHelper.encodeLogicLong(this.stream, new LogicLong(0, 1))
        ByteStreamHelper.encodeLogicLong(this.stream, new LogicLong(0, 1))

        this.stream.writeString('KTJS Enthusiast')
        this.stream.writeVInt(0)
        this.stream.writeVInt(1780850830)
        this.stream.writeVInt(1780846730)

        this.stream.writeVInt(18)   // arena
        this.stream.writeVInt(2281337) // Trophies
        this.stream.writeVInt(0)
        this.stream.writeVInt(-1)
        this.stream.writeVInt(0)
        this.stream.writeVInt(0)
        this.stream.writeVInt(0)
        this.stream.writeVInt(0)
        this.stream.writeVInt(0)
        this.stream.writeVInt(0)
        this.stream.writeVInt(0)
        this.stream.writeVInt(0)

        this.stream.writeVInt(OwnHomeDataMessage.KEY_VALUES)

        for (const entry of this.keyValues) {
            this.stream.writeVInt(entry.length)
            for (const keyV of entry) {
                keyV.encode(this.stream)
            }
        }
        this.stream.writeVInt(666) // Diamonds
        this.stream.writeVInt(666) // Free Diamonds
        this.stream.writeVInt(1337) // Exp
        this.stream.writeVInt(228) // Level
        this.stream.writeVInt(228)
        this.stream.writeVInt(0)
        this.stream.writeVInt(1780846730)

        this.stream.writeBoolean(true)
        this.stream.writeBoolean(false)
        this.stream.writeBoolean(false)
        
        // Alliance Data
        this.stream.writeBoolean(true)
        ByteStreamHelper.encodeLogicLong(this.stream, new LogicLong(0, 1))
        this.stream.writeString("t.me/ktjs_re")
        this.stream.writeVInt(0) // Alliance Thumbnail
        this.stream.writeVInt(2) // Alliance Role

        this.stream.writeVInt(3)
        this.stream.writeVInt(0)
        this.stream.writeVInt(3)
        this.stream.writeVInt(0)
        this.stream.writeVInt(0)
        this.stream.writeVInt(0)
        this.stream.writeVInt(0)

        this.stream.writeBoolean(false)
        this.stream.writeBoolean(false)
        this.stream.writeBoolean(false)

        this.stream.writeVInt(-1)
        this.stream.writeVInt(-1)
        this.stream.writeVInt(-1)
        this.stream.writeVInt(-1)
        this.stream.writeVInt(2)
        // LogicClientAvatar (OwnerLogicClientAvatar) end

        this.stream.writeBoolean(false)
    }


    getMessageType() {
        return 24113
    }
}