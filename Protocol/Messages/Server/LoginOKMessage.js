const PiranhaMessage = require('../../PiranhaMessage')

class LoginOKMessage extends PiranhaMessage {
  constructor (client, lowID, token) {
    super()
    this.id = 20104
    this.client = client
    this.version = 1

    this.lowID = lowID
    this.token = token
  }

  encode () {
    this.writeBoolean(true)
    this.writeInt(0)
    this.writeInt(1)
    this.writeInt(0)
    this.writeInt(1)
    this.writeString('t.me/ktjs_re')
    this.writeString()
    this.writeString()
    this.writeVInt(1)
    this.writeVInt(0)
    this.writeVInt(3745)
    this.writeVInt(1)
    this.writeString('prod')
    this.writeVInt(8)
    this.writeVInt(968)
    this.writeVInt(0)
    this.writeString()
    this.writeString('1337')
    this.writeString('1337')
    this.writeVInt(0)
    this.writeString()
    this.writeString()
    this.writeString()
    this.writeString()
    this.writeString('https://dkfwtj0h8hj32.cloudfront.net/1_0_3745')
    this.writeString('0.0.0.0')
    this.writeStringReference('ce5e4008b3404b04cfe8d5389e57bbe8')
  }
}

module.exports = LoginOKMessage
