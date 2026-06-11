export class LogicTutorial {
    static encode(stream) {
        stream.writeVInt(32)
        stream.writeVInt(40)
        stream.writeVInt(1)
    }
}