export class LogicSpellCollection {
    static encode(stream) {
        stream.writeVInt(1)

        // LogicSpell
        stream.writeVInt(23)
        stream.writeVInt(0)
        stream.writeVInt(0)
        stream.writeVInt(29790151)
        stream.writeVInt(1)
        stream.writeVInt(0)
        stream.writeVInt(0)
        stream.writeVInt(1)
        stream.writeVInt(0)
        stream.writeBoolean(false)
        stream.writeBoolean(true)
        stream.writeVInt(-1)
        stream.writeVInt(-1)
        stream.writeVInt(0)
    }
}