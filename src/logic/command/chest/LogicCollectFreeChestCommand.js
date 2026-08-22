import { LogicCommand } from "../LogicCommand.js";
import { LogicClaimRewardCommand } from "../reward/LogicClaimRewardCommand.js";
import { LogicReward } from "../../home/reward/LogicReward.js";

export class LogicCollectFreeChestCommand extends LogicCommand {
    execute(session) {
        const claimReward = new LogicClaimRewardCommand()

        claimReward.reward = LogicReward.createExampleReward()
        claimReward.chestType = 2
        claimReward.locationId = 12

        session.addCommand(claimReward)
    }

    getCommandType() {
        return 509
    }
}