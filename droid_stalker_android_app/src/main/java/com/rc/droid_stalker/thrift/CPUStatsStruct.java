/**
 * Autogenerated by Thrift Compiler (0.9.1)
 *
 * DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
 *  @generated
 */
package com.rc.droid_stalker.thrift;

import org.apache.thrift.scheme.IScheme;
import org.apache.thrift.scheme.SchemeFactory;
import org.apache.thrift.scheme.StandardScheme;

import org.apache.thrift.scheme.TupleScheme;
import org.apache.thrift.protocol.TTupleProtocol;
import org.apache.thrift.protocol.TProtocolException;
import org.apache.thrift.EncodingUtils;
import org.apache.thrift.TException;
import org.apache.thrift.async.AsyncMethodCallback;
import org.apache.thrift.server.AbstractNonblockingServer.*;
import java.util.List;
import java.util.ArrayList;
import java.util.Map;
import java.util.HashMap;
import java.util.EnumMap;
import java.util.Set;
import java.util.HashSet;
import java.util.EnumSet;
import java.util.Collections;
import java.util.BitSet;
import java.nio.ByteBuffer;
import java.util.Arrays;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * CPU stats Structure
 */
public class CPUStatsStruct implements org.apache.thrift.TBase<CPUStatsStruct, CPUStatsStruct._Fields>, java.io.Serializable, Cloneable, Comparable<CPUStatsStruct> {
  private static final org.apache.thrift.protocol.TStruct STRUCT_DESC = new org.apache.thrift.protocol.TStruct("CPUStatsStruct");

  private static final org.apache.thrift.protocol.TField TOTAL_CPU_FIELD_DESC = new org.apache.thrift.protocol.TField("totalCPU", org.apache.thrift.protocol.TType.DOUBLE, (short)1);
  private static final org.apache.thrift.protocol.TField PID_CPU_FIELD_DESC = new org.apache.thrift.protocol.TField("pidCPU", org.apache.thrift.protocol.TType.DOUBLE, (short)2);
  private static final org.apache.thrift.protocol.TField PID_FIELD_DESC = new org.apache.thrift.protocol.TField("pid", org.apache.thrift.protocol.TType.I32, (short)3);

  private static final Map<Class<? extends IScheme>, SchemeFactory> schemes = new HashMap<Class<? extends IScheme>, SchemeFactory>();
  static {
    schemes.put(StandardScheme.class, new CPUStatsStructStandardSchemeFactory());
    schemes.put(TupleScheme.class, new CPUStatsStructTupleSchemeFactory());
  }

  private double totalCPU; // required
  private double pidCPU; // required
  private int pid; // required

  /** The set of fields this struct contains, along with convenience methods for finding and manipulating them. */
  public enum _Fields implements org.apache.thrift.TFieldIdEnum {
    TOTAL_CPU((short)1, "totalCPU"),
    PID_CPU((short)2, "pidCPU"),
    PID((short)3, "pid");

    private static final Map<String, _Fields> byName = new HashMap<String, _Fields>();

    static {
      for (_Fields field : EnumSet.allOf(_Fields.class)) {
        byName.put(field.getFieldName(), field);
      }
    }

    /**
     * Find the _Fields constant that matches fieldId, or null if its not found.
     */
    public static _Fields findByThriftId(int fieldId) {
      switch(fieldId) {
        case 1: // TOTAL_CPU
          return TOTAL_CPU;
        case 2: // PID_CPU
          return PID_CPU;
        case 3: // PID
          return PID;
        default:
          return null;
      }
    }

    /**
     * Find the _Fields constant that matches fieldId, throwing an exception
     * if it is not found.
     */
    public static _Fields findByThriftIdOrThrow(int fieldId) {
      _Fields fields = findByThriftId(fieldId);
      if (fields == null) throw new IllegalArgumentException("Field " + fieldId + " doesn't exist!");
      return fields;
    }

    /**
     * Find the _Fields constant that matches name, or null if its not found.
     */
    public static _Fields findByName(String name) {
      return byName.get(name);
    }

    private final short _thriftId;
    private final String _fieldName;

    _Fields(short thriftId, String fieldName) {
      _thriftId = thriftId;
      _fieldName = fieldName;
    }

    public short getThriftFieldId() {
      return _thriftId;
    }

    public String getFieldName() {
      return _fieldName;
    }
  }

  // isset id assignments
  private static final int __TOTALCPU_ISSET_ID = 0;
  private static final int __PIDCPU_ISSET_ID = 1;
  private static final int __PID_ISSET_ID = 2;
  private byte __isset_bitfield = 0;
  public static final Map<_Fields, org.apache.thrift.meta_data.FieldMetaData> metaDataMap;
  static {
    Map<_Fields, org.apache.thrift.meta_data.FieldMetaData> tmpMap = new EnumMap<_Fields, org.apache.thrift.meta_data.FieldMetaData>(_Fields.class);
    tmpMap.put(_Fields.TOTAL_CPU, new org.apache.thrift.meta_data.FieldMetaData("totalCPU", org.apache.thrift.TFieldRequirementType.REQUIRED, 
        new org.apache.thrift.meta_data.FieldValueMetaData(org.apache.thrift.protocol.TType.DOUBLE)));
    tmpMap.put(_Fields.PID_CPU, new org.apache.thrift.meta_data.FieldMetaData("pidCPU", org.apache.thrift.TFieldRequirementType.REQUIRED, 
        new org.apache.thrift.meta_data.FieldValueMetaData(org.apache.thrift.protocol.TType.DOUBLE)));
    tmpMap.put(_Fields.PID, new org.apache.thrift.meta_data.FieldMetaData("pid", org.apache.thrift.TFieldRequirementType.REQUIRED, 
        new org.apache.thrift.meta_data.FieldValueMetaData(org.apache.thrift.protocol.TType.I32)));
    metaDataMap = Collections.unmodifiableMap(tmpMap);
    org.apache.thrift.meta_data.FieldMetaData.addStructMetaDataMap(CPUStatsStruct.class, metaDataMap);
  }

  public CPUStatsStruct() {
  }

  public CPUStatsStruct(
    double totalCPU,
    double pidCPU,
    int pid)
  {
    this();
    this.totalCPU = totalCPU;
    setTotalCPUIsSet(true);
    this.pidCPU = pidCPU;
    setPidCPUIsSet(true);
    this.pid = pid;
    setPidIsSet(true);
  }

  /**
   * Performs a deep copy on <i>other</i>.
   */
  public CPUStatsStruct(CPUStatsStruct other) {
    __isset_bitfield = other.__isset_bitfield;
    this.totalCPU = other.totalCPU;
    this.pidCPU = other.pidCPU;
    this.pid = other.pid;
  }

  public CPUStatsStruct deepCopy() {
    return new CPUStatsStruct(this);
  }

  @Override
  public void clear() {
    setTotalCPUIsSet(false);
    this.totalCPU = 0.0;
    setPidCPUIsSet(false);
    this.pidCPU = 0.0;
    setPidIsSet(false);
    this.pid = 0;
  }

  public double getTotalCPU() {
    return this.totalCPU;
  }

  public void setTotalCPU(double totalCPU) {
    this.totalCPU = totalCPU;
    setTotalCPUIsSet(true);
  }

  public void unsetTotalCPU() {
    __isset_bitfield = EncodingUtils.clearBit(__isset_bitfield, __TOTALCPU_ISSET_ID);
  }

  /** Returns true if field totalCPU is set (has been assigned a value) and false otherwise */
  public boolean isSetTotalCPU() {
    return EncodingUtils.testBit(__isset_bitfield, __TOTALCPU_ISSET_ID);
  }

  public void setTotalCPUIsSet(boolean value) {
    __isset_bitfield = EncodingUtils.setBit(__isset_bitfield, __TOTALCPU_ISSET_ID, value);
  }

  public double getPidCPU() {
    return this.pidCPU;
  }

  public void setPidCPU(double pidCPU) {
    this.pidCPU = pidCPU;
    setPidCPUIsSet(true);
  }

  public void unsetPidCPU() {
    __isset_bitfield = EncodingUtils.clearBit(__isset_bitfield, __PIDCPU_ISSET_ID);
  }

  /** Returns true if field pidCPU is set (has been assigned a value) and false otherwise */
  public boolean isSetPidCPU() {
    return EncodingUtils.testBit(__isset_bitfield, __PIDCPU_ISSET_ID);
  }

  public void setPidCPUIsSet(boolean value) {
    __isset_bitfield = EncodingUtils.setBit(__isset_bitfield, __PIDCPU_ISSET_ID, value);
  }

  public int getPid() {
    return this.pid;
  }

  public void setPid(int pid) {
    this.pid = pid;
    setPidIsSet(true);
  }

  public void unsetPid() {
    __isset_bitfield = EncodingUtils.clearBit(__isset_bitfield, __PID_ISSET_ID);
  }

  /** Returns true if field pid is set (has been assigned a value) and false otherwise */
  public boolean isSetPid() {
    return EncodingUtils.testBit(__isset_bitfield, __PID_ISSET_ID);
  }

  public void setPidIsSet(boolean value) {
    __isset_bitfield = EncodingUtils.setBit(__isset_bitfield, __PID_ISSET_ID, value);
  }

  public void setFieldValue(_Fields field, Object value) {
    switch (field) {
    case TOTAL_CPU:
      if (value == null) {
        unsetTotalCPU();
      } else {
        setTotalCPU((Double)value);
      }
      break;

    case PID_CPU:
      if (value == null) {
        unsetPidCPU();
      } else {
        setPidCPU((Double)value);
      }
      break;

    case PID:
      if (value == null) {
        unsetPid();
      } else {
        setPid((Integer)value);
      }
      break;

    }
  }

  public Object getFieldValue(_Fields field) {
    switch (field) {
    case TOTAL_CPU:
      return Double.valueOf(getTotalCPU());

    case PID_CPU:
      return Double.valueOf(getPidCPU());

    case PID:
      return Integer.valueOf(getPid());

    }
    throw new IllegalStateException();
  }

  /** Returns true if field corresponding to fieldID is set (has been assigned a value) and false otherwise */
  public boolean isSet(_Fields field) {
    if (field == null) {
      throw new IllegalArgumentException();
    }

    switch (field) {
    case TOTAL_CPU:
      return isSetTotalCPU();
    case PID_CPU:
      return isSetPidCPU();
    case PID:
      return isSetPid();
    }
    throw new IllegalStateException();
  }

  @Override
  public boolean equals(Object that) {
    if (that == null)
      return false;
    if (that instanceof CPUStatsStruct)
      return this.equals((CPUStatsStruct)that);
    return false;
  }

  public boolean equals(CPUStatsStruct that) {
    if (that == null)
      return false;

    boolean this_present_totalCPU = true;
    boolean that_present_totalCPU = true;
    if (this_present_totalCPU || that_present_totalCPU) {
      if (!(this_present_totalCPU && that_present_totalCPU))
        return false;
      if (this.totalCPU != that.totalCPU)
        return false;
    }

    boolean this_present_pidCPU = true;
    boolean that_present_pidCPU = true;
    if (this_present_pidCPU || that_present_pidCPU) {
      if (!(this_present_pidCPU && that_present_pidCPU))
        return false;
      if (this.pidCPU != that.pidCPU)
        return false;
    }

    boolean this_present_pid = true;
    boolean that_present_pid = true;
    if (this_present_pid || that_present_pid) {
      if (!(this_present_pid && that_present_pid))
        return false;
      if (this.pid != that.pid)
        return false;
    }

    return true;
  }

  @Override
  public int hashCode() {
    return 0;
  }

  @Override
  public int compareTo(CPUStatsStruct other) {
    if (!getClass().equals(other.getClass())) {
      return getClass().getName().compareTo(other.getClass().getName());
    }

    int lastComparison = 0;

    lastComparison = Boolean.valueOf(isSetTotalCPU()).compareTo(other.isSetTotalCPU());
    if (lastComparison != 0) {
      return lastComparison;
    }
    if (isSetTotalCPU()) {
      lastComparison = org.apache.thrift.TBaseHelper.compareTo(this.totalCPU, other.totalCPU);
      if (lastComparison != 0) {
        return lastComparison;
      }
    }
    lastComparison = Boolean.valueOf(isSetPidCPU()).compareTo(other.isSetPidCPU());
    if (lastComparison != 0) {
      return lastComparison;
    }
    if (isSetPidCPU()) {
      lastComparison = org.apache.thrift.TBaseHelper.compareTo(this.pidCPU, other.pidCPU);
      if (lastComparison != 0) {
        return lastComparison;
      }
    }
    lastComparison = Boolean.valueOf(isSetPid()).compareTo(other.isSetPid());
    if (lastComparison != 0) {
      return lastComparison;
    }
    if (isSetPid()) {
      lastComparison = org.apache.thrift.TBaseHelper.compareTo(this.pid, other.pid);
      if (lastComparison != 0) {
        return lastComparison;
      }
    }
    return 0;
  }

  public _Fields fieldForId(int fieldId) {
    return _Fields.findByThriftId(fieldId);
  }

  public void read(org.apache.thrift.protocol.TProtocol iprot) throws TException {
    schemes.get(iprot.getScheme()).getScheme().read(iprot, this);
  }

  public void write(org.apache.thrift.protocol.TProtocol oprot) throws TException {
    schemes.get(oprot.getScheme()).getScheme().write(oprot, this);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder("CPUStatsStruct(");
    boolean first = true;

    sb.append("totalCPU:");
    sb.append(this.totalCPU);
    first = false;
    if (!first) sb.append(", ");
    sb.append("pidCPU:");
    sb.append(this.pidCPU);
    first = false;
    if (!first) sb.append(", ");
    sb.append("pid:");
    sb.append(this.pid);
    first = false;
    sb.append(")");
    return sb.toString();
  }

  public void validate() throws TException {
    // check for required fields
    if (!isSetTotalCPU()) {
      throw new TProtocolException("Required field 'totalCPU' is unset! Struct:" + toString());
    }

    if (!isSetPidCPU()) {
      throw new TProtocolException("Required field 'pidCPU' is unset! Struct:" + toString());
    }

    if (!isSetPid()) {
      throw new TProtocolException("Required field 'pid' is unset! Struct:" + toString());
    }

    // check for sub-struct validity
  }

  private void writeObject(java.io.ObjectOutputStream out) throws java.io.IOException {
    try {
      write(new org.apache.thrift.protocol.TCompactProtocol(new org.apache.thrift.transport.TIOStreamTransport(out)));
    } catch (TException te) {
      throw new java.io.IOException(te);
    }
  }

  private void readObject(java.io.ObjectInputStream in) throws java.io.IOException, ClassNotFoundException {
    try {
      // it doesn't seem like you should have to do this, but java serialization is wacky, and doesn't call the default constructor.
      __isset_bitfield = 0;
      read(new org.apache.thrift.protocol.TCompactProtocol(new org.apache.thrift.transport.TIOStreamTransport(in)));
    } catch (TException te) {
      throw new java.io.IOException(te);
    }
  }

  private static class CPUStatsStructStandardSchemeFactory implements SchemeFactory {
    public CPUStatsStructStandardScheme getScheme() {
      return new CPUStatsStructStandardScheme();
    }
  }

  private static class CPUStatsStructStandardScheme extends StandardScheme<CPUStatsStruct> {

    public void read(org.apache.thrift.protocol.TProtocol iprot, CPUStatsStruct struct) throws TException {
      org.apache.thrift.protocol.TField schemeField;
      iprot.readStructBegin();
      while (true)
      {
        schemeField = iprot.readFieldBegin();
        if (schemeField.type == org.apache.thrift.protocol.TType.STOP) { 
          break;
        }
        switch (schemeField.id) {
          case 1: // TOTAL_CPU
            if (schemeField.type == org.apache.thrift.protocol.TType.DOUBLE) {
              struct.totalCPU = iprot.readDouble();
              struct.setTotalCPUIsSet(true);
            } else { 
              org.apache.thrift.protocol.TProtocolUtil.skip(iprot, schemeField.type);
            }
            break;
          case 2: // PID_CPU
            if (schemeField.type == org.apache.thrift.protocol.TType.DOUBLE) {
              struct.pidCPU = iprot.readDouble();
              struct.setPidCPUIsSet(true);
            } else { 
              org.apache.thrift.protocol.TProtocolUtil.skip(iprot, schemeField.type);
            }
            break;
          case 3: // PID
            if (schemeField.type == org.apache.thrift.protocol.TType.I32) {
              struct.pid = iprot.readI32();
              struct.setPidIsSet(true);
            } else { 
              org.apache.thrift.protocol.TProtocolUtil.skip(iprot, schemeField.type);
            }
            break;
          default:
            org.apache.thrift.protocol.TProtocolUtil.skip(iprot, schemeField.type);
        }
        iprot.readFieldEnd();
      }
      iprot.readStructEnd();
      struct.validate();
    }

    public void write(org.apache.thrift.protocol.TProtocol oprot, CPUStatsStruct struct) throws TException {
      struct.validate();

      oprot.writeStructBegin(STRUCT_DESC);
      oprot.writeFieldBegin(TOTAL_CPU_FIELD_DESC);
      oprot.writeDouble(struct.totalCPU);
      oprot.writeFieldEnd();
      oprot.writeFieldBegin(PID_CPU_FIELD_DESC);
      oprot.writeDouble(struct.pidCPU);
      oprot.writeFieldEnd();
      oprot.writeFieldBegin(PID_FIELD_DESC);
      oprot.writeI32(struct.pid);
      oprot.writeFieldEnd();
      oprot.writeFieldStop();
      oprot.writeStructEnd();
    }

  }

  private static class CPUStatsStructTupleSchemeFactory implements SchemeFactory {
    public CPUStatsStructTupleScheme getScheme() {
      return new CPUStatsStructTupleScheme();
    }
  }

  private static class CPUStatsStructTupleScheme extends TupleScheme<CPUStatsStruct> {

    @Override
    public void write(org.apache.thrift.protocol.TProtocol prot, CPUStatsStruct struct) throws TException {
      TTupleProtocol oprot = (TTupleProtocol) prot;
      oprot.writeDouble(struct.totalCPU);
      oprot.writeDouble(struct.pidCPU);
      oprot.writeI32(struct.pid);
    }

    @Override
    public void read(org.apache.thrift.protocol.TProtocol prot, CPUStatsStruct struct) throws TException {
      TTupleProtocol iprot = (TTupleProtocol) prot;
      struct.totalCPU = iprot.readDouble();
      struct.setTotalCPUIsSet(true);
      struct.pidCPU = iprot.readDouble();
      struct.setPidCPUIsSet(true);
      struct.pid = iprot.readI32();
      struct.setPidIsSet(true);
    }
  }

}

