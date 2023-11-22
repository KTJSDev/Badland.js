const PiranhaMessage = require('../../PiranhaMessage')
// const LogicClaimRewardCommand = require('../Server/LogicClaimRewardCommand')

class EndClientTurnMessage extends PiranhaMessage {
  constructor (client, bytes) {
    super(bytes)
    this.client = client
    this.id = 14102
    this.version = 0
  }

  decode () {
    this.readBoolean()
    this.tick = this.readVInt()
    this.checksum = this.readVInt()
    this.count = this.readVInt()

    //i'm lazy todo commands, maybe later
    this.command = this.readVInt()

  }

  process () {
    /*switch(this.command){
      case 503:
        console.log(this.command)
        return new LogicClaimRewardCommand(this.client).send()
    }*/
  }
}

module.exports = EndClientTurnMessage
