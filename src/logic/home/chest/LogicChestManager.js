export class LogicChestManager {
    static encode(stream) {
        stream.writeVInt(11)
        stream.writeBoolean(false)
        stream.writeBoolean(false)
        stream.writeBoolean(false)
        stream.writeVInt(700) // brawlpass tokens
    }
}