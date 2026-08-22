export class LogicStreak {
    static encode(stream) {
        stream.writeVInt(1)
        stream.writeVInt(1)
        stream.writeVInt(20687)
        stream.writeVInt(1)
        stream.writeVInt(-1)
        stream.writeVInt(-1)
    }
}