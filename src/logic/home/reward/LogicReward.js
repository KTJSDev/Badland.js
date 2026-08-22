import { LogicSpell } from "../spell/LogicSpell.js"

export class LogicReward {
    spells = []
    gold = 0
    diamonds = 0
    scroll = -1
    rune = -1
    customId = -1
    customType = -1

    encode(stream) {
        stream.writeVInt(this.spells.length ?? -1)
        if (this.spells.length !== 0)
            this.spells.forEach(e => e.encode(stream))

        stream.writeVInt(this.gold)
        stream.writeVInt(this.diamonds)
        stream.writeVInt(this.scroll)
        stream.writeVInt(this.rune)
        stream.writeVInt(this.customId)
        stream.writeVInt(this.customType)
    }

    static createExampleReward() {
        const reward = new LogicReward()

        const testSpell = LogicSpell.createExampleSpell(13)
        const testSpell2 = LogicSpell.createExampleSpell(42)

        reward.spells = [ testSpell, testSpell2 ]

        reward.gold = 1337
        reward.diamonds = 666

        return reward
    }
}