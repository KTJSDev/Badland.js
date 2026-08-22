export class LogicDonationManager {
    static encode(stream) {
        // LogicTimer
        stream.writeVInt(0)
        stream.writeVInt(0)
        stream.writeVInt(-1)
        // LogicTimer
        stream.writeVInt(428540)
        stream.writeVInt(432000)
        stream.writeVInt(1787430663)
        // LogicTimer
        stream.writeVInt(0)
        stream.writeVInt(0)
        stream.writeVInt(-1)
    }
}