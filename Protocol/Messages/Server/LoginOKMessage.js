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
    this.writeHex(`0100000000003c4b3700000000003c4b370000002874646b6579777a37637834386b336d636262736a396e61646e736a39327a62743261743766796372ffffffffffffffff0100ae39010000000470726f6403bb0900000000000000000d313639343937393831303236350000000d3136393439373930383230303000ffffffffffffffffffffffffffffffff0000002d68747470733a2f2f646b6677746a306838686a33322e636c6f756466726f6e742e6e65742f315f305f33363934`)
    this.writeString("0.0.0.0")
    /*this.writeLong(0, this.lowID) //accountid
    this.writeLong(0, this.lowID) //homeid
    this.writeString(this.token) //token
    this.writeString() //facebook id
    this.writeString() //gamecenter id
    this.writeVInt(2) //major
    this.writeVInt(2) //minor
    this.writeVInt(1) //bild
    this.writeVInt(1) //content
    this.writeString("dev") //env
    this.writeVInt(0)
    this.writeVInt(0) //play time sec
    this.writeVInt(0) //days since start playing hello my name is l-wr-ol-wrfgi00iro0
    this.writeString()
    this.writeString()
    this.writeString()
    this.writeVInt(0)
    this.writeString()
    this.writeString()
    this.writeString()
    this.writeString()
    this.writeString()
    this.writeString("0.0.0.0")*/
  }
}

module.exports = LoginOKMessage
