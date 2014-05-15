//
// Autogenerated by Thrift Compiler (0.9.1)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//
var Thrift = require('thrift').Thrift;
var AndroidAppStruct_ttypes = require('./AndroidAppStruct_types')
var CPUStatsStruct_ttypes = require('./CPUStatsStruct_types')


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
ttypes.AppExceptionErrorCode = {
'ERROR_WHILE_EXECUTING_CODE' : 1
};
js.droid_stalker.thrift.DroidStalkerAppException = module.exports.DroidStalkerAppException = function(args) {
  Thrift.TException.call(this, "js.droid_stalker.thrift.DroidStalkerAppException")
  this.name = "js.droid_stalker.thrift.DroidStalkerAppException"
  this.errorCode = null;
  this.errorMessage = null;
  if (args) {
    if (args.errorCode !== undefined) {
      this.errorCode = args.errorCode;
    }
    if (args.errorMessage !== undefined) {
      this.errorMessage = args.errorMessage;
    }
  }
};
Thrift.inherits(js.droid_stalker.thrift.DroidStalkerAppException, Thrift.TException);
js.droid_stalker.thrift.DroidStalkerAppException.prototype.name = 'DroidStalkerAppException';
js.droid_stalker.thrift.DroidStalkerAppException.prototype.read = function(input) {
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
      if (ftype == Thrift.Type.I32) {
        this.errorCode = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.errorMessage = input.readString();
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

js.droid_stalker.thrift.DroidStalkerAppException.prototype.write = function(output) {
  output.writeStructBegin('DroidStalkerAppException');
  if (this.errorCode !== null && this.errorCode !== undefined) {
    output.writeFieldBegin('errorCode', Thrift.Type.I32, 1);
    output.writeI32(this.errorCode);
    output.writeFieldEnd();
  }
  if (this.errorMessage !== null && this.errorMessage !== undefined) {
    output.writeFieldBegin('errorMessage', Thrift.Type.STRING, 2);
    output.writeString(this.errorMessage);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

