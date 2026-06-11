export class LogicDonationManager {
    static encode(stream) {
        // LogicTimer
        stream.writeVInt(0)
        stream.writeVInt(0)
        stream.writeVInt(-1)
        // LogicTimer
        stream.writeVInt(419300)
        stream.writeVInt(432000)
        stream.writeVInt(1780868331)
        // LogicTimer
        stream.writeVInt(0)
        stream.writeVInt(0)
        stream.writeVInt(-1)
    }
}