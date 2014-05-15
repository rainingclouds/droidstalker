//
// Autogenerated by Thrift Compiler (0.9.1)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//
var Thrift = require('thrift').Thrift;
var DeviceStruct_ttypes = require('./DeviceStruct_types')
var ThreadInfoStruct_ttypes = require('./ThreadInfoStruct_types')
var AndroidAppStruct_ttypes = require('./AndroidAppStruct_types')
var CPUStatsStruct_ttypes = require('./CPUStatsStruct_types')


var ttypes = require('./DroidStalkerKernelService_types');
//HELPER FUNCTIONS AND STRUCTURES

js.droid_stalker.thrift.DroidStalkerKernelService_getDevices_args = function(args) {
};
js.droid_stalker.thrift.DroidStalkerKernelService_getDevices_args.prototype = {};
js.droid_stalker.thrift.DroidStalkerKernelService_getDevices_args.prototype.read = function(input) {
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
    input.skip(ftype);
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

js.droid_stalker.thrift.DroidStalkerKernelService_getDevices_args.prototype.write = function(output) {
  output.writeStructBegin('DroidStalkerKernelService_getDevices_args');
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

js.droid_stalker.thrift.DroidStalkerKernelService_getDevices_result = function(args) {
  this.success = null;
  this.kernelException = null;
  if (args instanceof ttypes.DroidStalkerKernelException) {
    this.kernelException = args;
    return;
  }
  if (args) {
    if (args.success !== undefined) {
      this.success = args.success;
    }
    if (args.kernelException !== undefined) {
      this.kernelException = args.kernelException;
    }
  }
};
js.droid_stalker.thrift.DroidStalkerKernelService_getDevices_result.prototype = {};
js.droid_stalker.thrift.DroidStalkerKernelService_getDevices_result.prototype.read = function(input) {
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
      case 0:
      if (ftype == Thrift.Type.SET) {
        var _size0 = 0;
        var _rtmp34;
        this.success = [];
        var _etype3 = 0;
        _rtmp34 = input.readSetBegin();
        _etype3 = _rtmp34.etype;
        _size0 = _rtmp34.size;
        for (var _i5 = 0; _i5 < _size0; ++_i5)
        {
          var elem6 = null;
          elem6 = new DeviceStruct_ttypes.DeviceStruct();
          elem6.read(input);
          this.success.push(elem6);
        }
        input.readSetEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.kernelException = new ttypes.DroidStalkerKernelException();
        this.kernelException.read(input);
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

js.droid_stalker.thrift.DroidStalkerKernelService_getDevices_result.prototype.write = function(output) {
  output.writeStructBegin('DroidStalkerKernelService_getDevices_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.SET, 0);
    output.writeSetBegin(Thrift.Type.STRUCT, this.success.length);
    for (var iter7 in this.success)
    {
      if (this.success.hasOwnProperty(iter7))
      {
        iter7 = this.success[iter7];
        iter7.write(output);
      }
    }
    output.writeSetEnd();
    output.writeFieldEnd();
  }
  if (this.kernelException !== null && this.kernelException !== undefined) {
    output.writeFieldBegin('kernelException', Thrift.Type.STRUCT, 1);
    this.kernelException.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

js.droid_stalker.thrift.DroidStalkerKernelService_getInstalledAppsOn_args = function(args) {
  this.device = null;
  if (args) {
    if (args.device !== undefined) {
      this.device = args.device;
    }
  }
};
js.droid_stalker.thrift.DroidStalkerKernelService_getInstalledAppsOn_args.prototype = {};
js.droid_stalker.thrift.DroidStalkerKernelService_getInstalledAppsOn_args.prototype.read = function(input) {
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
      if (ftype == Thrift.Type.STRUCT) {
        this.device = new DeviceStruct_ttypes.DeviceStruct();
        this.device.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

js.droid_stalker.thrift.DroidStalkerKernelService_getInstalledAppsOn_args.prototype.write = function(output) {
  output.writeStructBegin('DroidStalkerKernelService_getInstalledAppsOn_args');
  if (this.device !== null && this.device !== undefined) {
    output.writeFieldBegin('device', Thrift.Type.STRUCT, 1);
    this.device.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

js.droid_stalker.thrift.DroidStalkerKernelService_getInstalledAppsOn_result = function(args) {
  this.success = null;
  this.kernelException = null;
  if (args instanceof ttypes.DroidStalkerKernelException) {
    this.kernelException = args;
    return;
  }
  if (args) {
    if (args.success !== undefined) {
      this.success = args.success;
    }
    if (args.kernelException !== undefined) {
      this.kernelException = args.kernelException;
    }
  }
};
js.droid_stalker.thrift.DroidStalkerKernelService_getInstalledAppsOn_result.prototype = {};
js.droid_stalker.thrift.DroidStalkerKernelService_getInstalledAppsOn_result.prototype.read = function(input) {
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
      case 0:
      if (ftype == Thrift.Type.SET) {
        var _size8 = 0;
        var _rtmp312;
        this.success = [];
        var _etype11 = 0;
        _rtmp312 = input.readSetBegin();
        _etype11 = _rtmp312.etype;
        _size8 = _rtmp312.size;
        for (var _i13 = 0; _i13 < _size8; ++_i13)
        {
          var elem14 = null;
          elem14 = new AndroidAppStruct_ttypes.AndroidAppStruct();
          elem14.read(input);
          this.success.push(elem14);
        }
        input.readSetEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.kernelException = new ttypes.DroidStalkerKernelException();
        this.kernelException.read(input);
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

js.droid_stalker.thrift.DroidStalkerKernelService_getInstalledAppsOn_result.prototype.write = function(output) {
  output.writeStructBegin('DroidStalkerKernelService_getInstalledAppsOn_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.SET, 0);
    output.writeSetBegin(Thrift.Type.STRUCT, this.success.length);
    for (var iter15 in this.success)
    {
      if (this.success.hasOwnProperty(iter15))
      {
        iter15 = this.success[iter15];
        iter15.write(output);
      }
    }
    output.writeSetEnd();
    output.writeFieldEnd();
  }
  if (this.kernelException !== null && this.kernelException !== undefined) {
    output.writeFieldBegin('kernelException', Thrift.Type.STRUCT, 1);
    this.kernelException.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

js.droid_stalker.thrift.DroidStalkerKernelService_startDebugSessionFor_args = function(args) {
  this.device = null;
  this.app = null;
  if (args) {
    if (args.device !== undefined) {
      this.device = args.device;
    }
    if (args.app !== undefined) {
      this.app = args.app;
    }
  }
};
js.droid_stalker.thrift.DroidStalkerKernelService_startDebugSessionFor_args.prototype = {};
js.droid_stalker.thrift.DroidStalkerKernelService_startDebugSessionFor_args.prototype.read = function(input) {
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
      if (ftype == Thrift.Type.STRUCT) {
        this.device = new DeviceStruct_ttypes.DeviceStruct();
        this.device.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRUCT) {
        this.app = new AndroidAppStruct_ttypes.AndroidAppStruct();
        this.app.read(input);
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

js.droid_stalker.thrift.DroidStalkerKernelService_startDebugSessionFor_args.prototype.write = function(output) {
  output.writeStructBegin('DroidStalkerKernelService_startDebugSessionFor_args');
  if (this.device !== null && this.device !== undefined) {
    output.writeFieldBegin('device', Thrift.Type.STRUCT, 1);
    this.device.write(output);
    output.writeFieldEnd();
  }
  if (this.app !== null && this.app !== undefined) {
    output.writeFieldBegin('app', Thrift.Type.STRUCT, 2);
    this.app.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

js.droid_stalker.thrift.DroidStalkerKernelService_startDebugSessionFor_result = function(args) {
  this.success = null;
  this.kernelException = null;
  if (args instanceof ttypes.DroidStalkerKernelException) {
    this.kernelException = args;
    return;
  }
  if (args) {
    if (args.success !== undefined) {
      this.success = args.success;
    }
    if (args.kernelException !== undefined) {
      this.kernelException = args.kernelException;
    }
  }
};
js.droid_stalker.thrift.DroidStalkerKernelService_startDebugSessionFor_result.prototype = {};
js.droid_stalker.thrift.DroidStalkerKernelService_startDebugSessionFor_result.prototype.read = function(input) {
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
      case 0:
      if (ftype == Thrift.Type.STRING) {
        this.success = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.kernelException = new ttypes.DroidStalkerKernelException();
        this.kernelException.read(input);
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

js.droid_stalker.thrift.DroidStalkerKernelService_startDebugSessionFor_result.prototype.write = function(output) {
  output.writeStructBegin('DroidStalkerKernelService_startDebugSessionFor_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.STRING, 0);
    output.writeString(this.success);
    output.writeFieldEnd();
  }
  if (this.kernelException !== null && this.kernelException !== undefined) {
    output.writeFieldBegin('kernelException', Thrift.Type.STRUCT, 1);
    this.kernelException.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

js.droid_stalker.thrift.DroidStalkerKernelService_getThreadsRunningIn_args = function(args) {
  this.debugSession = null;
  if (args) {
    if (args.debugSession !== undefined) {
      this.debugSession = args.debugSession;
    }
  }
};
js.droid_stalker.thrift.DroidStalkerKernelService_getThreadsRunningIn_args.prototype = {};
js.droid_stalker.thrift.DroidStalkerKernelService_getThreadsRunningIn_args.prototype.read = function(input) {
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
        this.debugSession = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

js.droid_stalker.thrift.DroidStalkerKernelService_getThreadsRunningIn_args.prototype.write = function(output) {
  output.writeStructBegin('DroidStalkerKernelService_getThreadsRunningIn_args');
  if (this.debugSession !== null && this.debugSession !== undefined) {
    output.writeFieldBegin('debugSession', Thrift.Type.STRING, 1);
    output.writeString(this.debugSession);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

js.droid_stalker.thrift.DroidStalkerKernelService_getThreadsRunningIn_result = function(args) {
  this.success = null;
  this.kernelException = null;
  if (args instanceof ttypes.DroidStalkerKernelException) {
    this.kernelException = args;
    return;
  }
  if (args) {
    if (args.success !== undefined) {
      this.success = args.success;
    }
    if (args.kernelException !== undefined) {
      this.kernelException = args.kernelException;
    }
  }
};
js.droid_stalker.thrift.DroidStalkerKernelService_getThreadsRunningIn_result.prototype = {};
js.droid_stalker.thrift.DroidStalkerKernelService_getThreadsRunningIn_result.prototype.read = function(input) {
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
      case 0:
      if (ftype == Thrift.Type.SET) {
        var _size16 = 0;
        var _rtmp320;
        this.success = [];
        var _etype19 = 0;
        _rtmp320 = input.readSetBegin();
        _etype19 = _rtmp320.etype;
        _size16 = _rtmp320.size;
        for (var _i21 = 0; _i21 < _size16; ++_i21)
        {
          var elem22 = null;
          elem22 = new ThreadInfoStruct_ttypes.ThreadInfoStruct();
          elem22.read(input);
          this.success.push(elem22);
        }
        input.readSetEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.kernelException = new ttypes.DroidStalkerKernelException();
        this.kernelException.read(input);
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

js.droid_stalker.thrift.DroidStalkerKernelService_getThreadsRunningIn_result.prototype.write = function(output) {
  output.writeStructBegin('DroidStalkerKernelService_getThreadsRunningIn_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.SET, 0);
    output.writeSetBegin(Thrift.Type.STRUCT, this.success.length);
    for (var iter23 in this.success)
    {
      if (this.success.hasOwnProperty(iter23))
      {
        iter23 = this.success[iter23];
        iter23.write(output);
      }
    }
    output.writeSetEnd();
    output.writeFieldEnd();
  }
  if (this.kernelException !== null && this.kernelException !== undefined) {
    output.writeFieldBegin('kernelException', Thrift.Type.STRUCT, 1);
    this.kernelException.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

js.droid_stalker.thrift.DroidStalkerKernelService_getCPUStatsFor_args = function(args) {
  this.debugSession = null;
  this.span = null;
  if (args) {
    if (args.debugSession !== undefined) {
      this.debugSession = args.debugSession;
    }
    if (args.span !== undefined) {
      this.span = args.span;
    }
  }
};
js.droid_stalker.thrift.DroidStalkerKernelService_getCPUStatsFor_args.prototype = {};
js.droid_stalker.thrift.DroidStalkerKernelService_getCPUStatsFor_args.prototype.read = function(input) {
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
        this.debugSession = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.I32) {
        this.span = input.readI32();
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

js.droid_stalker.thrift.DroidStalkerKernelService_getCPUStatsFor_args.prototype.write = function(output) {
  output.writeStructBegin('DroidStalkerKernelService_getCPUStatsFor_args');
  if (this.debugSession !== null && this.debugSession !== undefined) {
    output.writeFieldBegin('debugSession', Thrift.Type.STRING, 1);
    output.writeString(this.debugSession);
    output.writeFieldEnd();
  }
  if (this.span !== null && this.span !== undefined) {
    output.writeFieldBegin('span', Thrift.Type.I32, 2);
    output.writeI32(this.span);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

js.droid_stalker.thrift.DroidStalkerKernelService_getCPUStatsFor_result = function(args) {
  this.success = null;
  this.kernelException = null;
  if (args instanceof ttypes.DroidStalkerKernelException) {
    this.kernelException = args;
    return;
  }
  if (args) {
    if (args.success !== undefined) {
      this.success = args.success;
    }
    if (args.kernelException !== undefined) {
      this.kernelException = args.kernelException;
    }
  }
};
js.droid_stalker.thrift.DroidStalkerKernelService_getCPUStatsFor_result.prototype = {};
js.droid_stalker.thrift.DroidStalkerKernelService_getCPUStatsFor_result.prototype.read = function(input) {
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
      case 0:
      if (ftype == Thrift.Type.STRUCT) {
        this.success = new CPUStatsStruct_ttypes.CPUStatsStruct();
        this.success.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.kernelException = new ttypes.DroidStalkerKernelException();
        this.kernelException.read(input);
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

js.droid_stalker.thrift.DroidStalkerKernelService_getCPUStatsFor_result.prototype.write = function(output) {
  output.writeStructBegin('DroidStalkerKernelService_getCPUStatsFor_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.STRUCT, 0);
    this.success.write(output);
    output.writeFieldEnd();
  }
  if (this.kernelException !== null && this.kernelException !== undefined) {
    output.writeFieldBegin('kernelException', Thrift.Type.STRUCT, 1);
    this.kernelException.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

js.droid_stalker.thrift.DroidStalkerKernelServiceClient = exports.Client = function(output, pClass) {
    this.output = output;
    this.pClass = pClass;
    this._seqid = 0;
    this._reqs = {};
};
js.droid_stalker.thrift.DroidStalkerKernelServiceClient.prototype = {};
js.droid_stalker.thrift.DroidStalkerKernelServiceClient.prototype.seqid = function() { return this._seqid; }
js.droid_stalker.thrift.DroidStalkerKernelServiceClient.prototype.new_seqid = function() { this._seqid += 1; }
js.droid_stalker.thrift.DroidStalkerKernelServiceClient.prototype.getDevices = function(callback) {
  this._seqid = this.new_seqid();
  this._reqs[this.seqid()] = callback;
  this.send_getDevices();
};

js.droid_stalker.thrift.DroidStalkerKernelServiceClient.prototype.send_getDevices = function() {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('getDevices', Thrift.MessageType.CALL, this.seqid());
  var args = new js.droid_stalker.thrift.DroidStalkerKernelService_getDevices_args();
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

js.droid_stalker.thrift.DroidStalkerKernelServiceClient.prototype.recv_getDevices = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new js.droid_stalker.thrift.DroidStalkerKernelService_getDevices_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.kernelException) {
    return callback(result.kernelException);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('getDevices failed: unknown result');
};
js.droid_stalker.thrift.DroidStalkerKernelServiceClient.prototype.getInstalledAppsOn = function(device, callback) {
  this._seqid = this.new_seqid();
  this._reqs[this.seqid()] = callback;
  this.send_getInstalledAppsOn(device);
};

js.droid_stalker.thrift.DroidStalkerKernelServiceClient.prototype.send_getInstalledAppsOn = function(device) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('getInstalledAppsOn', Thrift.MessageType.CALL, this.seqid());
  var args = new js.droid_stalker.thrift.DroidStalkerKernelService_getInstalledAppsOn_args();
  args.device = device;
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

js.droid_stalker.thrift.DroidStalkerKernelServiceClient.prototype.recv_getInstalledAppsOn = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new js.droid_stalker.thrift.DroidStalkerKernelService_getInstalledAppsOn_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.kernelException) {
    return callback(result.kernelException);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('getInstalledAppsOn failed: unknown result');
};
js.droid_stalker.thrift.DroidStalkerKernelServiceClient.prototype.startDebugSessionFor = function(device, app, callback) {
  this._seqid = this.new_seqid();
  this._reqs[this.seqid()] = callback;
  this.send_startDebugSessionFor(device, app);
};

js.droid_stalker.thrift.DroidStalkerKernelServiceClient.prototype.send_startDebugSessionFor = function(device, app) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('startDebugSessionFor', Thrift.MessageType.CALL, this.seqid());
  var args = new js.droid_stalker.thrift.DroidStalkerKernelService_startDebugSessionFor_args();
  args.device = device;
  args.app = app;
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

js.droid_stalker.thrift.DroidStalkerKernelServiceClient.prototype.recv_startDebugSessionFor = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new js.droid_stalker.thrift.DroidStalkerKernelService_startDebugSessionFor_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.kernelException) {
    return callback(result.kernelException);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('startDebugSessionFor failed: unknown result');
};
js.droid_stalker.thrift.DroidStalkerKernelServiceClient.prototype.getThreadsRunningIn = function(debugSession, callback) {
  this._seqid = this.new_seqid();
  this._reqs[this.seqid()] = callback;
  this.send_getThreadsRunningIn(debugSession);
};

js.droid_stalker.thrift.DroidStalkerKernelServiceClient.prototype.send_getThreadsRunningIn = function(debugSession) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('getThreadsRunningIn', Thrift.MessageType.CALL, this.seqid());
  var args = new js.droid_stalker.thrift.DroidStalkerKernelService_getThreadsRunningIn_args();
  args.debugSession = debugSession;
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

js.droid_stalker.thrift.DroidStalkerKernelServiceClient.prototype.recv_getThreadsRunningIn = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new js.droid_stalker.thrift.DroidStalkerKernelService_getThreadsRunningIn_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.kernelException) {
    return callback(result.kernelException);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('getThreadsRunningIn failed: unknown result');
};
js.droid_stalker.thrift.DroidStalkerKernelServiceClient.prototype.getCPUStatsFor = function(debugSession, span, callback) {
  this._seqid = this.new_seqid();
  this._reqs[this.seqid()] = callback;
  this.send_getCPUStatsFor(debugSession, span);
};

js.droid_stalker.thrift.DroidStalkerKernelServiceClient.prototype.send_getCPUStatsFor = function(debugSession, span) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('getCPUStatsFor', Thrift.MessageType.CALL, this.seqid());
  var args = new js.droid_stalker.thrift.DroidStalkerKernelService_getCPUStatsFor_args();
  args.debugSession = debugSession;
  args.span = span;
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

js.droid_stalker.thrift.DroidStalkerKernelServiceClient.prototype.recv_getCPUStatsFor = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new js.droid_stalker.thrift.DroidStalkerKernelService_getCPUStatsFor_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.kernelException) {
    return callback(result.kernelException);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('getCPUStatsFor failed: unknown result');
};
js.droid_stalker.thrift.DroidStalkerKernelServiceProcessor = exports.Processor = function(handler) {
  this._handler = handler
}
js.droid_stalker.thrift.DroidStalkerKernelServiceProcessor.prototype.process = function(input, output) {
  var r = input.readMessageBegin();
  if (this['process_' + r.fname]) {
    return this['process_' + r.fname].call(this, r.rseqid, input, output);
  } else {
    input.skip(Thrift.Type.STRUCT);
    input.readMessageEnd();
    var x = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN_METHOD, 'Unknown function ' + r.fname);
    output.writeMessageBegin(r.fname, Thrift.MessageType.Exception, r.rseqid);
    x.write(output);
    output.writeMessageEnd();
    output.flush();
  }
}

js.droid_stalker.thrift.DroidStalkerKernelServiceProcessor.prototype.process_getDevices = function(seqid, input, output) {
  var args = new js.droid_stalker.thrift.DroidStalkerKernelService_getDevices_args();
  args.read(input);
  input.readMessageEnd();
  this._handler.getDevices(function (err, result) {
    var result = new js.droid_stalker.thrift.DroidStalkerKernelService_getDevices_result((err != null ? err : {success: result}));
    output.writeMessageBegin("getDevices", Thrift.MessageType.REPLY, seqid);
    result.write(output);
    output.writeMessageEnd();
    output.flush();
  })
}

js.droid_stalker.thrift.DroidStalkerKernelServiceProcessor.prototype.process_getInstalledAppsOn = function(seqid, input, output) {
  var args = new js.droid_stalker.thrift.DroidStalkerKernelService_getInstalledAppsOn_args();
  args.read(input);
  input.readMessageEnd();
  this._handler.getInstalledAppsOn(args.device, function (err, result) {
    var result = new js.droid_stalker.thrift.DroidStalkerKernelService_getInstalledAppsOn_result((err != null ? err : {success: result}));
    output.writeMessageBegin("getInstalledAppsOn", Thrift.MessageType.REPLY, seqid);
    result.write(output);
    output.writeMessageEnd();
    output.flush();
  })
}

js.droid_stalker.thrift.DroidStalkerKernelServiceProcessor.prototype.process_startDebugSessionFor = function(seqid, input, output) {
  var args = new js.droid_stalker.thrift.DroidStalkerKernelService_startDebugSessionFor_args();
  args.read(input);
  input.readMessageEnd();
  this._handler.startDebugSessionFor(args.device, args.app, function (err, result) {
    var result = new js.droid_stalker.thrift.DroidStalkerKernelService_startDebugSessionFor_result((err != null ? err : {success: result}));
    output.writeMessageBegin("startDebugSessionFor", Thrift.MessageType.REPLY, seqid);
    result.write(output);
    output.writeMessageEnd();
    output.flush();
  })
}

js.droid_stalker.thrift.DroidStalkerKernelServiceProcessor.prototype.process_getThreadsRunningIn = function(seqid, input, output) {
  var args = new js.droid_stalker.thrift.DroidStalkerKernelService_getThreadsRunningIn_args();
  args.read(input);
  input.readMessageEnd();
  this._handler.getThreadsRunningIn(args.debugSession, function (err, result) {
    var result = new js.droid_stalker.thrift.DroidStalkerKernelService_getThreadsRunningIn_result((err != null ? err : {success: result}));
    output.writeMessageBegin("getThreadsRunningIn", Thrift.MessageType.REPLY, seqid);
    result.write(output);
    output.writeMessageEnd();
    output.flush();
  })
}

js.droid_stalker.thrift.DroidStalkerKernelServiceProcessor.prototype.process_getCPUStatsFor = function(seqid, input, output) {
  var args = new js.droid_stalker.thrift.DroidStalkerKernelService_getCPUStatsFor_args();
  args.read(input);
  input.readMessageEnd();
  this._handler.getCPUStatsFor(args.debugSession, args.span, function (err, result) {
    var result = new js.droid_stalker.thrift.DroidStalkerKernelService_getCPUStatsFor_result((err != null ? err : {success: result}));
    output.writeMessageBegin("getCPUStatsFor", Thrift.MessageType.REPLY, seqid);
    result.write(output);
    output.writeMessageEnd();
    output.flush();
  })
}

