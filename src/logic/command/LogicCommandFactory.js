import { LogicCollectFreeChestCommand } from "./chest/LogicCollectFreeChestCommand.js";
import { LogicCommand } from "./LogicCommand.js";

export class LogicCommandFactory {
    static createCommandByType(commandType) {
        switch(commandType) {
            case 509:
                return new LogicCollectFreeChestCommand()
            default: return new LogicCommand()
        }
    }
}