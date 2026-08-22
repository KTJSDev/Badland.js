export class LogicWelcomeBack {
    static encode(stream) {
        stream.writeVInt(3)
        stream.writeVInt(3162)
        stream.writeVInt(1)
        stream.writeVInt(3162)
        stream.writeVInt(1)
        stream.writeVInt(-1)
        stream.writeBoolean(false)
        stream.writeVInt(3162)
        stream.writeVInt(26763)
        stream.writeInt(1787409236)
        
        // Should be 16
        stream.writeVInt(4)
        stream.writeVInt(0)
        stream.writeVInt(60)

        stream.writeVInt(-1)
        stream.writeVInt(-1)
        stream.writeVInt(0)

        stream.writeVInt(0)
        stream.writeVInt(5)
        stream.writeVInt(0)

        stream.writeVInt(-1)
        stream.writeVInt(-1)
        stream.writeVInt(0)

        stream.writeVInt(5)
        stream.writeVInt(0)
        stream.writeVInt(35)

        stream.writeVInt(-1)
        stream.writeVInt(-1)
        stream.writeVInt(0)

        stream.writeVInt(0)
        stream.writeVInt(8)
        stream.writeVInt(0)

        stream.writeVInt(-1)
        stream.writeVInt(-1)
        stream.writeVInt(0)

        stream.writeVInt(4)
        stream.writeVInt(0)
        stream.writeVInt(360)

        stream.writeVInt(-1)
        stream.writeVInt(-1)
        stream.writeVInt(0)

        stream.writeVInt(3)
        stream.writeVInt(2)
        stream.writeVInt(1)

        stream.writeVInt(-1)
        stream.writeVInt(-1)
        stream.writeVInt(0)

        stream.writeVInt(3)
        stream.writeVInt(3)
        stream.writeVInt(1)

        stream.writeVInt(0)
        stream.writeVInt(6)
        stream.writeVInt(0)

        stream.writeVInt(5)
        stream.writeVInt(0)
        stream.writeVInt(20)

        stream.writeVInt(-1)
        stream.writeVInt(-1)
        stream.writeVInt(0)
    }
}