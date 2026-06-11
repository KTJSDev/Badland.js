export class LogicCreatorSupport {
    static encode(stream) {
        stream.writeStringReference('KTJS')
        stream.writeVInt(1780847333)
        stream.writeStringReference('')
        stream.writeStringReference('')
    }
}