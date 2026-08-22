export class LogicChestBattle {
    static encode(stream) {
        stream.writeVInt(4)
        stream.writeBoolean(false)
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