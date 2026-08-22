export class ByteStream {
  constructor (data) {
    // eslint-disable-next-line new-cap
    this.buffer = data instanceof Buffer ? data : Buffer.alloc(0)
    this.length = 0
    this.offset = 0
    this.bitOffset = 0
  }

   /**
   *  Reading Int from Bytes
   * @returns { Number } Int
   */
   readInt () {
    this.bitOffset = 0
    return (this.buffer[this.offset++] << 24 |
            (this.buffer[this.offset++] << 16 |
                (this.buffer[this.offset++] << 8 |
                    this.buffer[this.offset++])))
  }

  getUsedHex(offset = 0) {
        return Buffer.from(this.buffer.slice(0, this.offset - offset)).toString("hex").toUpperCase().match(/.{0,2}/g).filter(e => e != "").join("-")

    }

    toHex() {
        return Buffer.from(this.buffer).toString("hex").toUpperCase().match(/.{0,2}/g).filter(e => e != "").join("-")

    }

    toHexOffset(offset) {
        return Buffer.from(this.buffer.slice(offset)).toString("hex").toUpperCase().match(/.{0,2}/g).filter(e => e != "").join("-")

    }

  skip (len) {
    this.bitOffset += len
  }

  /**
   *  Reading Short from Bytes (`commonly isn't used.`)
   * @returns { Number } Short
   */
  readShort () {
    this.bitOffset = 0
    return (this.buffer[this.offset++] << 8 |
            this.buffer[this.offset++])
  }

  /**
   * Writing value to Bytes as Short (c`ommonly isn't used`)
   * @param {Number} value Your value to write.
   */
  writeShort (value) {
    this.bitOffset = 0
    this.ensureCapacity(2)
    this.buffer[this.offset++] = (value >> 8)
    this.buffer[this.offset++] = (value)
  }


  /**
   * Writing value to Bytes as Int
   * @param {Number} value Your value to write.
   */
  writeInt (value) {
    this.bitOffset = 0
    this.ensureCapacity(4)
    this.buffer[this.offset++] = (value >> 24)
    this.buffer[this.offset++] = (value >> 16)
    this.buffer[this.offset++] = (value >> 8)
    this.buffer[this.offset++] = (value)
  }

  /**
   *  Reading String from Bytes
   * @returns { String } String
   */
  readString () {
    const length = this.readInt()

    if (length > 0 && length < 90000) {
      const stringBytes = this.buffer.slice(this.offset, this.offset + length)
      const string = stringBytes.toString('utf8')
      this.offset += length
      return string
    }
    return ''
  }

  /**
   * Reading VarInt from Bytes
   * @returns { Number } VarInt
   */
  readVInt () {
    this.bitOffset = 0;
    let value = 0;
    let byteValue = this.buffer[this.offset++];

    if ((byteValue & 0x40) != 0)
    {
        value |= byteValue & 0x3F;

        if ((byteValue & 0x80) != 0)
        {
            value |= ((byteValue = this.buffer[this.offset++]) & 0x7F) << 6;

            if ((byteValue & 0x80) != 0)
            {
                value |= ((byteValue = this.buffer[this.offset++]) & 0x7F) << 13;

                if ((byteValue & 0x80) != 0)
                {
                    value |= ((byteValue = this.buffer[this.offset++]) & 0x7F) << 20;

                    if ((byteValue & 0x80) != 0)
                    {
                        value |= ((byteValue = this.buffer[this.offset++]) & 0x7F) << 27;
                        return (value | 0x80000000);
                    }

                    return (value | 0xF8000000);
                }

                return (value | 0xFFF00000);
            }

            return (value | 0xFFFFE000);
        }

        return (value | 0xFFFFFFC0);
    }

    value |= byteValue & 0x3F;

    if ((byteValue & 0x80) != 0)
    {
        value |= ((byteValue = this.buffer[this.offset++]) & 0x7F) << 6;

        if ((byteValue & 0x80) != 0)
        {
            value |= ((byteValue = this.buffer[this.offset++]) & 0x7F) << 13;

            if ((byteValue & 0x80) != 0)
            {
                value |= ((byteValue = this.buffer[this.offset++]) & 0x7F) << 20;

                if ((byteValue & 0x80) != 0)
                {
                    value |= ((byteValue = this.buffer[this.offset++]) & 0x7F) << 27;
                }
            }
        }
    }

    return value;
  }

  /**
   * Reading 2 VarInts from Bytes
   * @returns { Array<Number> } Commonly CSVID and ReferenceID
   */
  readDataReference(){
    const a1 = this.readVInt()
    return [ a1, a1 == 0 ? 0 : this.readVInt() ]
  }

  /**
   * Writing values to Bytes as VarInts
   * If value1 is 0, then 2nd value doesn't used
   * 
   * @param {Number} value1 Your value to write. Commonly it's a CSVID
   * @param {Number} value2 Your value to write. Commonly it's a ReferenceID
   */
  writeDataReference (value1, value2) {
    if(value1 < 1){
      this.writeVInt(0)
    }else{
      this.writeVInt(value1)
      this.writeVInt(value2)
    }
  }

  /**
   * Writing value to Bytes as VarInt
   * @param {Number} value Your value to write.
   */
  writeVInt(value) {
    value |= 0
    this.ensureCapacity(5)

    this.bitOffset = 0

    if (value >= 0) {
        if (value >= 64) {
            if (value >= 0x2000) {
                if (value >= 0x100000) {
                    if (value >= 0x8000000) {
                        this.buffer[this.offset++] = ((value & 0x3F) | 0x80)
                        this.buffer[this.offset++] = (((value >> 6) & 0x7F) | 0x80)
                        this.buffer[this.offset++] = (((value >> 13) & 0x7F) | 0x80)
                        this.buffer[this.offset++] = (((value >> 20) & 0x7F) | 0x80)
                        this.buffer[this.offset++] = ((value >> 27) & 0x7F)
                    } else {
                        this.buffer[this.offset++] = ((value & 0x3F) | 0x80)
                        this.buffer[this.offset++] = (((value >> 6) & 0x7F) | 0x80)
                        this.buffer[this.offset++] = (((value >> 13) & 0x7F) | 0x80)
                        this.buffer[this.offset++] = ((value >> 20) & 0x7F)
                    }
                } else {
                    this.buffer[this.offset++] = ((value & 0x3F) | 0x80)
                    this.buffer[this.offset++] = (((value >> 6) & 0x7F) | 0x80)
                    this.buffer[this.offset++] = ((value >> 13) & 0x7F)
                }
            } else {
                this.buffer[this.offset++] = ((value & 0x3F) | 0x80)
                this.buffer[this.offset++] = ((value >> 6) & 0x7F)
            }
        } else {
            this.buffer[this.offset++] = (value & 0x3F)
        }
    } else {
        if (value <= -0x40) {
            if (value <= -0x2000) {
                if (value <= -0x100000) {
                    if (value <= -0x8000000) {
                        this.buffer[this.offset++] = ((value & 0x3F) | 0xC0)
                        this.buffer[this.offset++] = (((value >> 6) & 0x7F) | 0x80)
                        this.buffer[this.offset++] = (((value >> 13) & 0x7F) | 0x80)
                        this.buffer[this.offset++] = (((value >> 20) & 0x7F) | 0x80)
                        this.buffer[this.offset++] = ((value >> 27) & 0x0F)
                    } else {
                        this.buffer[this.offset++] = ((value & 0x3F) | 0xC0)
                        this.buffer[this.offset++] = (((value >> 6) & 0x7F) | 0x80)
                        this.buffer[this.offset++] = (((value >> 13) & 0x7F) | 0x80)
                        this.buffer[this.offset++] = ((value >> 20) & 0x7F)
                    }
                } else {
                    this.buffer[this.offset++] = ((value & 0x3F) | 0xC0)
                    this.buffer[this.offset++] = (((value >> 6) & 0x7F) | 0x80)
                    this.buffer[this.offset++] = ((value >> 13) & 0x7F)
                }
            } else {
                this.buffer[this.offset++] = ((value & 0x3F) | 0xC0)
                this.buffer[this.offset++] = ((value >> 6) & 0x7F)
            }
        } else {
            this.buffer[this.offset++] = ((value & 0x3F) | 0x40)
        }
    }
  }


  /**
   * Writing value to Bytes as Boolean
   * @param {Boolean} value Your value to write.
   */
  writeBoolean (value) {
    if (this.bitOffset == 0) {
        this.ensureCapacity(1);
        this.buffer[this.offset++] = 0;
    }

    if (value) 
        this.buffer[this.offset - 1] |= (1 << this.bitOffset);

    this.bitOffset = (this.bitOffset + 1) & 7;

    return value
  }

  /**
   * Reading Boolean from Bytes
   * @returns { Boolean } Boolean (`true|false`)
   */
  readBoolean(){
    if (this.bitOffset === 0)
        this.offset++;

    const value = (this.buffer[this.offset - 1] & (1 << this.bitOffset)) !== 0;
    this.bitOffset = (this.bitOffset + 1) & 7;
    
    return value;
  }

  /**
   * Writing value to Bytes as String
   * @param {String} value Your value to write.
   */
  writeString (value) {
    this.bitOffset = 0
    if (value == null || value.length > 90000 || value === undefined) {
      this.writeInt(-1)
      return
    }

    const buf = Buffer.from(value, 'utf8')
    this.writeInt(buf.byteLength)
    this.ensureCapacity(buf.byteLength)
    buf.copy(this.buffer, this.offset)
    this.offset += buf.byteLength
  }

  /**
   * Writing value to Bytes as String (`You can just use writeString()`)
   * @param {String} value Your value to write.
   */
  writeStringReference(value) {
    const bytes = value != null
        ? Buffer.from(value, "utf8")
        : Buffer.alloc(0)

    const length = bytes.length

    if (length < 900001) {
        this.ensureCapacity(length + 4)

        this.writeInt(length)

        this.buffer.set(bytes, this.offset)
        this.offset += length
    } else {
        console.warn(
            `ByteStream::writeString invalid string length ${length}`
        )

        this.writeInt(-1)
    }
}

  /**
   * Writing value to Bytes as LongLong (`commonly isn't used`)
   * @param {Number} value Your value to write.
   */
  writeLongLong (value) {
    this.writeInt(value >> 32)
    this.writeInt(value)
  }

  /**
   * Writing values to Bytes as VarInts
   * 
   * @param {Number} value1 Your value to write.
   * @param {Number} value2 Your value to write.
   */
  writeLogicLong (value1, value2) {
    this.writeVInt(value1)
    this.writeVInt(value2)
  }

  /**
   * Reading 2 VarInts from Bytes
   * @returns { Array<Number> } LogicLong VarInts
   */
  readLogicLong () {
    return [ this.readVInt(), this.readVInt() ]
  }

  /**
   * Writing values to Bytes as Ints
   * 
   * @param {Number} value1 Your value to write.
   * @param {Number} value2 Your value to write.
   */
  writeLong (value1, value2) {
    this.writeInt(value1)
    this.writeInt(value2)
  }

  /**
   * Reading 2 Ints from Bytes
   * @returns { Array<Number> } Long Ints
   */
  readLong () {
    return [ this.readInt(), this.readInt() ]
  }

  /**
   * Writing value to Bytes as Byte
   * @param {Number} value Your value to write.
   */
  writeByte (value) {
    this.bitOffset = 0
    this.ensureCapacity(1)
    this.buffer[this.offset++] = value
  }

  /**
   * Writing value to Bytes as ByteArray
   * @param {Buffer} buffer Your buffer to write.
   */
  writeBytes (buffer) {
    const length = buffer.length

    if (buffer != null) {
      this.writeInt(length)
      this.ensureCapacity(buffer.byteLength)
      buffer.copy(this.buffer, this.offset)
      this.offset += length
      return
    }

    this.writeInt(-1)
  }

  readBytes() {
    this.bitOffset = 0
    const length = this.readInt()

    if (length === -1)
      return Buffer.alloc(0)

    const bytes = this.buffer.slice(this.offset, this.offset + length)

    this.offset += length

    return bytes
  }

  /**
   * Adding more space to Buffer
   * @param {Number} capacity Amount of new space
   */
  ensureCapacity (capacity) {
    const bufferLength = this.buffer.length

    if (this.offset + capacity > bufferLength) {
      // eslint-disable-next-line new-cap
      const tmpBuffer = Buffer.alloc(capacity)
      this.buffer = Buffer.concat([this.buffer, tmpBuffer])
    }
  }

  writeHex(str){
    let encoded = Buffer.from(str.replace(/-/g, '').match(/.{1,2}/g).map(byte => parseInt(byte, 16)))
    this.ensureCapacity(encoded.length)
    encoded.copy(this.buffer, this.offset)
    this.offset += encoded.length
  }

  setByteArray(bytearray) {
    this.buffer = bytearray;
    this.offset = 0
    this.bitOffset = 0
  }

  getLength() {
    return this.buffer.length
  }

  getByteArray() {
    return this.buffer.slice(0, this.offset)
  }
}