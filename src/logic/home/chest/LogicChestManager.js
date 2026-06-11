export class LogicChestManager {
    static encode(stream) {
        stream.writeVInt(6)
        stream.writeBoolean(false)
        stream.writeBoolean(false)
        stream.writeBoolean(false)
        stream.writeVInt(0)
    }
}