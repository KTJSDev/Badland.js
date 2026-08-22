export class LogicShop {
    static encode(stream) {
        stream.writeBoolean(true)
        stream.writeVInt(1)
        stream.writeVInt(0)
        stream.writeBoolean(false)
        stream.writeVInt(944463346)
        stream.writeVInt(29)
        stream.writeVInt(7)
        stream.writeVInt(3)
        stream.writeVInt(0)
        stream.writeVInt(6389)
        stream.writeVInt(-1)
        stream.writeVInt(-1)
        stream.writeVInt(0)
        stream.writeVInt(0)

        // LogicTimer
        stream.writeVInt(535260)
        stream.writeVInt(535260)
        stream.writeVInt(1787435999)

        stream.writeBoolean(false)

        stream.writeBoolean(true)
        stream.writeVInt(8)

        // LogicShopItemInfo
        stream.writeVInt(72002)
        stream.writeVInt(0)
        stream.writeVInt(6558)
        stream.writeVInt(1787358600)
        stream.writeVInt(1787529540)
        stream.writeVInt(0)
        stream.writeVInt(1)
        stream.writeBoolean(false)
        stream.writeBoolean(false)
        // LogicShopItemInfoSpecialOfferChronos
        stream.writeVInt(-1)
        stream.writeVInt(0)
        stream.writeVInt(0)
        stream.writeStringReference('TID_SPECIAL_OFFER_CHOCOLATE_2')


        // VintArr 1
        stream.writeVInt(61)
        stream.writeVInt(72010)
        stream.writeVInt(72002)
        stream.writeVInt(72002)
        stream.writeVInt(72003)
        stream.writeVInt(72005)
        stream.writeVInt(72005)
        stream.writeVInt(72007)
        stream.writeVInt(72007)
        stream.writeVInt(72010)
        stream.writeVInt(72010)
        stream.writeVInt(72010)
        stream.writeVInt(-1)
        stream.writeVInt(-1)
        stream.writeVInt(-1)
        stream.writeVInt(-1)
        stream.writeVInt(72015)
        stream.writeVInt(-1)
        stream.writeVInt(-1)
        stream.writeVInt(-1)
        stream.writeVInt(-1)
        stream.writeVInt(72020)
        stream.writeVInt(-1)
        stream.writeVInt(-1)
        stream.writeVInt(-1)
        stream.writeVInt(-1)
        stream.writeVInt(-1)
        stream.writeVInt(-1)
        stream.writeVInt(-1)
        stream.writeVInt(-1)
        stream.writeVInt(-1)
        stream.writeVInt(-1)
        stream.writeVInt(-1)
        stream.writeVInt(-1)
        stream.writeVInt(-1)
        stream.writeVInt(-1)
        stream.writeVInt(-1)
        stream.writeVInt(-1)
        stream.writeVInt(-1)
        stream.writeVInt(-1)
        stream.writeVInt(-1)
        stream.writeVInt(-1)
        stream.writeVInt(-1)
        stream.writeVInt(-1)
        stream.writeVInt(-1)
        stream.writeVInt(-1)
        stream.writeVInt(-1)
        stream.writeVInt(-1)
        stream.writeVInt(-1)
        stream.writeVInt(-1)
        stream.writeVInt(-1)
        stream.writeVInt(72050)
        stream.writeVInt(-1)
        stream.writeVInt(-1)
        stream.writeVInt(-1)
        stream.writeVInt(-1)
        stream.writeVInt(-1)
        stream.writeVInt(-1)
        stream.writeVInt(-1)
        stream.writeVInt(-1)
        stream.writeVInt(-1)
        stream.writeVInt(72060)


        stream.writeVInt(30)
        stream.writeVInt(100)
        stream.writeBoolean(false)
        stream.writeBoolean(true)
        stream.writeBoolean(false)
        stream.writeBoolean(false)
        stream.writeVInt(1)
        stream.writeVInt(1)
        // VintArr 2
        stream.writeVInt(0)

        // VintArr 3
        stream.writeVInt(0)

        // VintArr 4
        stream.writeVInt(0)

        // VintArr 5
        stream.writeVInt(0)


        stream.writeVInt(1787409189)
        stream.writeVInt(1787409236)
        stream.writeVInt(1787409063)
        stream.writeBoolean(false)
        stream.writeVInt(3162)
        stream.writeVInt(0)
        stream.writeVInt(-1)
        stream.writeVInt(0)
        stream.writeVInt(-1)
        stream.writeVInt(-1)
        stream.writeVInt(0)
        stream.writeVInt(0)

        // LogicShopCycleManager
        stream.writeVInt(3)
        stream.writeVInt(1)
        // LogicShopCycleItem
        stream.writeVInt(0)
        stream.writeVInt(0)
        stream.writeVInt(3162)
        stream.writeVInt(50)
        stream.writeVInt(0)
        stream.writeVInt(1)
        stream.writeBoolean(false)
        stream.writeBoolean(false)
        // Spell
        stream.writeVInt(44)
        stream.writeVInt(5)
        stream.writeVInt(0)
        stream.writeBoolean(false)
        stream.writeVInt(800)
        stream.writeVInt(0)

        stream.writeVInt(1)
        // LogicShopCycleItem
        stream.writeVInt(0)
        stream.writeVInt(1)
        stream.writeVInt(3162)
        stream.writeVInt(100)
        stream.writeVInt(0)
        stream.writeVInt(1)
        stream.writeBoolean(false)
        stream.writeBoolean(false)
        // Spell
        stream.writeVInt(2)
        stream.writeVInt(2)
        stream.writeVInt(1)
        stream.writeBoolean(false)
        stream.writeVInt(800)
        stream.writeVInt(0)

        stream.writeVInt(1)
        // LogicShopCycleItem
        stream.writeVInt(0)
        stream.writeVInt(2)
        stream.writeVInt(3162)
        stream.writeVInt(250)
        stream.writeVInt(0)
        stream.writeVInt(1)
        stream.writeBoolean(false)
        stream.writeBoolean(false)
        // Spell
        stream.writeVInt(2)
        stream.writeVInt(5)
        stream.writeVInt(1)
        stream.writeBoolean(false)
        stream.writeVInt(800)
        stream.writeVInt(0)


        // BoolArr 1
        stream.writeVInt(3)
        stream.writeBoolean(false)
        stream.writeBoolean(false)
        stream.writeBoolean(false)


        stream.writeVInt(0)
        // BoolArr 2
        stream.writeVInt(0)


        stream.writeVInt(3)
        // VintArr 6 (Purchased battlepasses)
        stream.writeVInt(1)
        stream.writeVInt(70091)

        stream.writeVInt(-1)
    }
}