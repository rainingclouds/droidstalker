/**
 * Autogenerated by Thrift Compiler (0.9.1)
 *
 * DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
 *  @generated
 */
package com.rc.droid_stalker.thrift;


import java.util.Map;
import java.util.HashMap;
import org.apache.thrift.TEnum;

/**
 * Kernel exception error codes
 */
public enum KernelExceptionErrorCode implements TEnum {
  KERNEL_BOOT_FAILED(1),
  KERNEL_CRASHED(2),
  DEVICE_DISCONNECTED(3),
  APP_NOT_FOUND(4),
  APP_COULD_NOT_START(5),
  NO_SUCH_DEBUG_SESSION_RUNNING(6),
  DEVICE_NOT_FOUND_CONNECTED(7),
  FAILED_TO_START_APP(8);

  private final int value;

  private KernelExceptionErrorCode(int value) {
    this.value = value;
  }

  /**
   * Get the integer value of this enum value, as defined in the Thrift IDL.
   */
  public int getValue() {
    return value;
  }

  /**
   * Find a the enum type by its integer value, as defined in the Thrift IDL.
   * @return null if the value is not found.
   */
  public static KernelExceptionErrorCode findByValue(int value) { 
    switch (value) {
      case 1:
        return KERNEL_BOOT_FAILED;
      case 2:
        return KERNEL_CRASHED;
      case 3:
        return DEVICE_DISCONNECTED;
      case 4:
        return APP_NOT_FOUND;
      case 5:
        return APP_COULD_NOT_START;
      case 6:
        return NO_SUCH_DEBUG_SESSION_RUNNING;
      case 7:
        return DEVICE_NOT_FOUND_CONNECTED;
      case 8:
        return FAILED_TO_START_APP;
      default:
        return null;
    }
  }
}
