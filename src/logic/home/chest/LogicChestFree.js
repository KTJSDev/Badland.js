export class LogicChestFree {
    static encode(stream) {
        stream.writeVInt(1)
        // LogicTimer
        stream.writeVInt(285340)
        stream.writeVInt(288000)
        stream.writeVInt(1780861633)
        stream.writeBoolean(false)
        stream.writeVInt(0)
        stream.writeVInt(-1)
    }
}