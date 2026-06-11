import { PiranhaMessage } from "../../../titan/protocol/PiranhaMessage.js"
import { ByteStreamHelper } from "../../helper/ByteStreamHelper.js";
import { LogicKeyValue } from "../../home/data/LogicKeyValue.js";
import { LogicLong } from "../../../titan/logic/LogicLong.js";
import { LogicEventManager } from "../../home/events/LogicEventManager.js";
import { LogicLiveGlobalManager } from "../../home/global/LogicLiveGlobalManager.js";
import { LogicRewardManager } from "../../home/reward/LogicRewardManager.js";
import { LogicCreatorSupport } from "../../home/creator/LogicCreatorSupport.js";
import { LogicTutorial } from "../../home/tutorial/LogicTutorial.js";
import { LogicAchievements } from "../../home/achievements/LogicAchievements.js";
import { LogicShop } from "../../home/shop/LogicShop.js";
import { LogicSpellDeck } from "../../home/spell/LogicSpellDeck.js";
import { LogicSpellCollection } from "../../home/spell/LogicSpellCollection.js";
import { LogicGameChestManager } from "../../home/chest/LogicGameChestManager.js";
import { LogicDonationManager } from "../../home/donation/LogicDonationManager.js";
import { LogicSurvival } from "../../home/survival/LogicSurvival.js";
import { LogicGlobalEvent } from "../../home/events/LogicGlobalEvent.js";
import { LogicCampaignDonationManager } from "../../home/donation/LogicCampaignDonationManager.js";
import { LogicStory } from "../../home/story/LogicStory.js";
import { ByteStream } from "../../../titan/stream/ByteStream.js";

export class OwnHomeDataMessage extends PiranhaMessage {
    static KEY_VALUES = 7
    keyValues = [
        [
            new LogicKeyValue(5000001, 696969), // Gold
            new LogicKeyValue(5000002, 696969),
            new LogicKeyValue(5000023, 1),
            new LogicKeyValue(5000004, 0),
        ],
        [], [], [],
        [
            new LogicKeyValue(5000012, 228),
            new LogicKeyValue(5000016, 0),
            new LogicKeyValue(5000011, 676767),
            new LogicKeyValue(5000027, 676767),
            new LogicKeyValue(5000013, 1337)
        ],
        [
            new LogicKeyValue(4000030, 0),
            new LogicKeyValue(4000056, 0),
            new LogicKeyValue(4000002, 0),
            new LogicKeyValue(4000019, 0),
            new LogicKeyValue(4000016, 0),
            new LogicKeyValue(4000001, 0),
            new LogicKeyValue(4000010, 0),
            new LogicKeyValue(4000044, 0)
        ],
        []
    ]

    encode() {
        super.encode()
        // LogicGameMode
        // LogicHome
        // LogicTimer
        this.stream.writeVInt(0)
        this.stream.writeVInt(0)
        this.stream.writeVInt(-1)

        this.stream.writeInt(1780847366)
        this.stream.writeVInt(0)

        // spells (LogicSpellStat[])
        this.stream.writeVInt(0)

        LogicEventManager.encode(this.stream)
        LogicLiveGlobalManager.encode(this.stream)
        LogicRewardManager.encode(this.stream)

        LogicCreatorSupport.encode(this.stream)

        this.stream.writeVInt(-1)

        this.stream.writeLong(0, 1)

        this.stream.writeVInt(0)
        this.stream.writeVInt(11670)
        this.stream.writeVInt(-1)
        this.stream.writeVInt(0)

        // deck related?
        this.stream.writeVInt(5)

        this.stream.writeVInt(8) // always 8 btw
        this.stream.writeVInt(30)
        this.stream.writeVInt(56)
        this.stream.writeVInt(2)
        this.stream.writeVInt(19)
        this.stream.writeVInt(16)
        this.stream.writeVInt(1)
        this.stream.writeVInt(10)
        this.stream.writeVInt(44)

        this.stream.writeVInt(8)
        this.stream.writeVInt(-1)
        this.stream.writeVInt(-1)
        this.stream.writeVInt(-1)
        this.stream.writeVInt(-1)
        this.stream.writeVInt(-1)
        this.stream.writeVInt(0)
        this.stream.writeVInt(0)
        this.stream.writeVInt(0)

        this.stream.writeVInt(8)
        this.stream.writeVInt(-1)
        this.stream.writeVInt(-1)
        this.stream.writeVInt(-1)
        this.stream.writeVInt(-1)
        this.stream.writeVInt(-1)
        this.stream.writeVInt(0)
        this.stream.writeVInt(0)
        this.stream.writeVInt(0)

        this.stream.writeVInt(8)
        this.stream.writeVInt(-1)
        this.stream.writeVInt(-1)
        this.stream.writeVInt(-1)
        this.stream.writeVInt(-1)
        this.stream.writeVInt(-1)
        this.stream.writeVInt(0)
        this.stream.writeVInt(0)
        this.stream.writeVInt(0)

        this.stream.writeVInt(8)
        this.stream.writeVInt(-1)
        this.stream.writeVInt(-1)
        this.stream.writeVInt(-1)
        this.stream.writeVInt(-1)
        this.stream.writeVInt(-1)
        this.stream.writeVInt(0)
        this.stream.writeVInt(0)
        this.stream.writeVInt(0)

        LogicTutorial.encode(this.stream)
        LogicAchievements.encode(this.stream)
        LogicSurvival.encode(this.stream)
        LogicGlobalEvent.encode(this.stream)
        LogicStory.encode(this.stream)
        LogicShop.encode(this.stream)

        LogicSpellDeck.encode(this.stream)
        LogicSpellDeck.encode2(this.stream)
        LogicSpellCollection.encode(this.stream)

        LogicGameChestManager.encode(this.stream)

        LogicDonationManager.encode(this.stream)
        LogicCampaignDonationManager.encode(this.stream)

        // BitList 1
        this.stream.writeVInt(2)
        this.stream.writeVInt(0)
        this.stream.writeVInt(0)

        // BitList 2
        this.stream.writeVInt(4)
        this.stream.writeVInt(0)
        this.stream.writeVInt(0)
        this.stream.writeVInt(0)
        this.stream.writeVInt(0)

        // BitList 3
        this.stream.writeVInt(8)
        this.stream.writeVInt(0)
        this.stream.writeVInt(0)
        this.stream.writeVInt(0)
        this.stream.writeVInt(0)
        this.stream.writeVInt(0)
        this.stream.writeVInt(0)
        this.stream.writeVInt(0)
        this.stream.writeVInt(0)

        this.stream.writeVInt(18088014)
        this.stream.writeVInt(0)
        this.stream.writeVInt(0)
        this.stream.writeVInt(0)
        this.stream.writeVInt(0)

        // VintArr 1
        this.stream.writeVInt(0)

        // VintArr 2
        this.stream.writeVInt(0)

        this.stream.writeVInt(1)
        this.stream.writeVInt(0)

        // CustomDeck[]
        this.stream.writeVInt(2)
        this.stream.writeBoolean(true)
        // CustomDeck
        this.stream.writeBoolean(true)
        this.stream.writeBoolean(true)
        this.stream.writeBoolean(true)
        this.stream.writeBoolean(true)
        this.stream.writeBoolean(true)
        this.stream.writeBoolean(true)

        // CustomObject
        this.stream.writeVInt(1)
        this.stream.writeVInt(0)
        this.stream.writeVInt(-1)
        this.stream.writeVInt(0)
        this.stream.writeBoolean(false)

        // CustomObject
        this.stream.writeVInt(1)
        this.stream.writeVInt(1)
        this.stream.writeVInt(-1)
        this.stream.writeVInt(0)
        this.stream.writeBoolean(false)

        // CustomObject
        this.stream.writeVInt(1)
        this.stream.writeVInt(2)
        this.stream.writeVInt(-1)
        this.stream.writeVInt(0)
        this.stream.writeBoolean(false)

        // CustomObject
        this.stream.writeVInt(1)
        this.stream.writeVInt(3)
        this.stream.writeVInt(-1)
        this.stream.writeVInt(0)
        this.stream.writeBoolean(false)

        // CustomObject
        this.stream.writeVInt(1)
        this.stream.writeVInt(4)
        this.stream.writeVInt(-1)
        this.stream.writeVInt(0)
        this.stream.writeBoolean(false)

        // CustomObject
        this.stream.writeVInt(1)
        this.stream.writeVInt(1) // somehow related to trophies idk didn't mined it
        this.stream.writeVInt(-1)
        this.stream.writeVInt(0)
        this.stream.writeBoolean(false)
        this.stream.writeBoolean(true)
        // CustomDeck
        this.stream.writeBoolean(true)
        this.stream.writeBoolean(true)
        this.stream.writeBoolean(false)
        this.stream.writeBoolean(false)
        this.stream.writeBoolean(false)
        this.stream.writeBoolean(false)

        // CustomObject
        this.stream.writeVInt(2)
        this.stream.writeVInt(0)
        this.stream.writeVInt(-1)
        this.stream.writeVInt(0)
        this.stream.writeBoolean(false)

        // CustomObject
        this.stream.writeVInt(2)
        this.stream.writeVInt(1000)
        this.stream.writeVInt(-1)
        this.stream.writeVInt(0)
        this.stream.writeBoolean(false)

        // CustomCollection[]
        this.stream.writeVInt(3)
        this.stream.writeBoolean(true)
        // CustomCollection
        this.stream.writeVInt(1)
        this.stream.writeVInt(1)

        // CustomObject
        this.stream.writeVInt(1)
        this.stream.writeVInt(14)
        this.stream.writeVInt(-1)
        this.stream.writeVInt(0)
        this.stream.writeBoolean(false)
        this.stream.writeBoolean(false)

        this.stream.writeBoolean(true)
        // CustomCollection
        this.stream.writeVInt(2)
        this.stream.writeVInt(0)
        this.stream.writeBoolean(false)

        this.stream.writeBoolean(true)
        // CustomCollection
        this.stream.writeVInt(4)
        this.stream.writeVInt(0)
        this.stream.writeBoolean(true)

        this.stream.writeStringReference('')
        this.stream.writeStringReference('')
        this.stream.writeBoolean(false)
        this.stream.writeVInt(0)

        // LogicGameHome end
        // LogicClientAvatar
        ByteStreamHelper.encodeLogicLong(this.stream, new LogicLong(0, 1))
        ByteStreamHelper.encodeLogicLong(this.stream, new LogicLong(0, 1))
        ByteStreamHelper.encodeLogicLong(this.stream, new LogicLong(0, 1))

        this.stream.writeString('KTJS Enthusiast')
        this.stream.writeVInt(0)
        this.stream.writeVInt(1780850830)
        this.stream.writeVInt(1780846730)

        this.stream.writeVInt(18)   // arena
        this.stream.writeVInt(2281337) // Trophies
        this.stream.writeVInt(0)
        this.stream.writeVInt(-1)
        this.stream.writeVInt(0)
        this.stream.writeVInt(0)
        this.stream.writeVInt(0)
        this.stream.writeVInt(0)
        this.stream.writeVInt(0)
        this.stream.writeVInt(0)
        this.stream.writeVInt(0)
        this.stream.writeVInt(0)

        this.stream.writeVInt(OwnHomeDataMessage.KEY_VALUES)

        for (const entry of this.keyValues) {
            this.stream.writeVInt(entry.length)
            for (const keyV of entry) {
                keyV.encode(this.stream)
            }
        }
        this.stream.writeVInt(666) // Diamonds
        this.stream.writeVInt(666) // Free Diamonds
        this.stream.writeVInt(1337) // Exp
        this.stream.writeVInt(228) // Level
        this.stream.writeVInt(228)
        this.stream.writeVInt(0)
        this.stream.writeVInt(1780846730)

        this.stream.writeBoolean(true)
        this.stream.writeBoolean(false)
        this.stream.writeBoolean(false)
        
        // Alliance Data
        this.stream.writeBoolean(true)
        ByteStreamHelper.encodeLogicLong(this.stream, new LogicLong(0, 1))
        this.stream.writeString("t.me/ktjs_re")
        this.stream.writeVInt(0) // Alliance Thumbnail
        this.stream.writeVInt(2) // Alliance Role

        this.stream.writeVInt(3)
        this.stream.writeVInt(0)
        this.stream.writeVInt(3)
        this.stream.writeVInt(0)
        this.stream.writeVInt(0)
        this.stream.writeVInt(0)
        this.stream.writeVInt(0)

        this.stream.writeBoolean(false)
        this.stream.writeBoolean(false)
        this.stream.writeBoolean(false)

        this.stream.writeVInt(-1)
        this.stream.writeVInt(-1)
        this.stream.writeVInt(-1)
        this.stream.writeVInt(-1)
        this.stream.writeVInt(2)
        // ClientAvatar end

        this.stream.writeVInt(-1564061427)
    }

    getMessageType() {
        return 24101
    }
}