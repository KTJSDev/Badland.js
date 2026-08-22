export class LogicChestFree {
    static encode(stream) {
        stream.writeVInt(1)
        // LogicTimer
        stream.writeVInt(0) // till 1st chest will be available
        stream.writeVInt(288000) // till 2nd chest will be available
        stream.writeVInt(1780861633)
        stream.writeBoolean(false)
        stream.writeVInt(0)
        stream.writeVInt(-1)
    }
}