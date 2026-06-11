export class LogicChestBattle {
    static encode(stream) {
        stream.writeVInt(4)
        stream.writeBoolean(true)
        // LogicChest
        stream.writeVInt(1)
        stream.writeVInt(3)
        stream.writeVInt(0)
        stream.writeVInt(100)
        stream.writeBoolean(true)
        stream.writeVInt(0)
        stream.writeVInt(0)
        stream.writeBoolean(false)
        stream.writeBoolean(false)
        stream.writeBoolean(true)
        stream.writeBoolean(false)
        stream.writeBoolean(false)

        stream.writeBoolean(true)
        // LogicTimer
        stream.writeVInt(213080)
        stream.writeVInt(216000)
        stream.writeVInt(1780858020)

        stream.writeVInt(5)
        stream.writeVInt(6)
        stream.writeVInt(0)
        stream.writeVInt(0)
        stream.writeVInt(0)

        stream.writeBoolean(false)

        // LogicSpell arr
        stream.writeBoolean(false)

        stream.writeVInt(0)
        stream.writeBoolean(true)

        stream.writeBoolean(false)
        stream.writeBoolean(false)
        stream.writeBoolean(false)

        stream.writeVInt(-1)
        stream.writeVInt(3)
        stream.writeVInt(0)
        stream.writeVInt(0)
        stream.writeVInt(11)
        stream.writeVInt(4)
        stream.writeVInt(0)
        stream.writeVInt(0)
        stream.writeVInt(3)
    }
}