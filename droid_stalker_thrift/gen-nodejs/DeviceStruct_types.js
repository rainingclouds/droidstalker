//
// Autogenerated by Thrift Compiler (0.9.1)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//
var Thrift = require('thrift').Thrift;

var ttypes = module.exports = {};
if (typeof js === 'undefined') {
  js = {};
}
if (typeof js.droid_stalker === 'undefined') {
  js.droid_stalker = {};
}
if (typeof js.droid_stalker.thrift === 'undefined') {
  js.droid_stalker.thrift = {};
}
js.droid_stalker.thrift.DeviceStruct = module.exports.DeviceStruct = function(args) {
  this.serialNumber = null;
  this.avdName = null;
  this.deviceState = null;
  this.isEmulator = null;
  this.batteryPercentage = null;
  if (args) {
    if (args.serialNumber !== undefined) {
      this.serialNumber = args.serialNumber;
    }
    if (args.avdName !== undefined) {
      this.avdName = args.avdName;
    }
    if (args.deviceState !== undefined) {
      this.deviceState = args.deviceState;
    }
    if (args.isEmulator !== undefined) {
      this.isEmulator = args.isEmulator;
    }
    if (args.batteryPercentage !== undefined) {
      this.batteryPercentage = args.batteryPercentage;
    }
  }
};
js.droid_stalker.thrift.DeviceStruct.prototype = {};
js.droid_stalker.thrift.DeviceStruct.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.serialNumber = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.avdName = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRING) {
        this.deviceState = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.BOOL) {
        this.isEmulator = input.readBool();
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.I16) {
        this.batteryPercentage = input.readI16();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

js.droid_stalker.thrift.DeviceStruct.prototype.write = function(output) {
  output.writeStructBegin('DeviceStruct');
  if (this.serialNumber !== null && this.serialNumber !== undefined) {
    output.writeFieldBegin('serialNumber', Thrift.Type.STRING, 1);
    output.writeString(this.serialNumber);
    output.writeFieldEnd();
  }
  if (this.avdName !== null && this.avdName !== undefined) {
    output.writeFieldBegin('avdName', Thrift.Type.STRING, 2);
    output.writeString(this.avdName);
    output.writeFieldEnd();
  }
  if (this.deviceState !== null && this.deviceState !== undefined) {
    output.writeFieldBegin('deviceState', Thrift.Type.STRING, 3);
    output.writeString(this.deviceState);
    output.writeFieldEnd();
  }
  if (this.isEmulator !== null && this.isEmulator !== undefined) {
    output.writeFieldBegin('isEmulator', Thrift.Type.BOOL, 4);
    output.writeBool(this.isEmulator);
    output.writeFieldEnd();
  }
  if (this.batteryPercentage !== null && this.batteryPercentage !== undefined) {
    output.writeFieldBegin('batteryPercentage', Thrift.Type.I16, 5);
    output.writeI16(this.batteryPercentage);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

