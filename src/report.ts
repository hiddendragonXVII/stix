/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Reports are collections of threat intelligence focused on one or more topics, such as a description of a threat actor, malware, or attack technique, including context and related details.
 */
export type Report = Core & {
  /**
   * The type of this object, which MUST be the literal `report`.
   */
  type: "report";
  id?: Id;
  /**
   * This field is an Open Vocabulary that specifies the primary subject of this report. The suggested values for this field are in report-type-ov.
   */
  report_types?: string[];
  /**
   * The name used to identify the Report.
   */
  name?: string;
  /**
   * A description that provides more details and context about Report.
   */
  description?: string;
  published?: Timestamp;
  /**
   * Specifies the STIX Objects that are referred to by this Report.
   */
  object_refs?: Identifier[];
  [k: string]: unknown;
};
/**
 * Common properties and behavior across all STIX Domain Objects and STIX Relationship Objects.
 */
export type Core = Properties;
/**
 * The ​binary data type represents a sequence of bytes. In order to allow pattern matching on custom objects, for all properties that use the binary type, the property name MUST end with '_bin'. The JSON MTI serialization represents this as a base64-­encoded string as specified in RFC4648​. Other serializations SHOULD use a native binary type, if available.
 *
 * This interface was referenced by `Properties`'s JSON-Schema definition
 * via the `patternProperty` "^[a-z][a-z0-9_]{0,245}_bin$".
 */
export type Binary = string;
/**
 * The hex data type encodes an array of octets (8-bit bytes) as hexadecimal. The string MUST consist of an even number of hexadecimal characters, which are the digits '0' through '9' and the letters 'a' through 'f'.  In order to allow pattern matching on custom objects, all properties that use the hex type, the property name MUST end with '_hex'.
 *
 * This interface was referenced by `Properties`'s JSON-Schema definition
 * via the `patternProperty` "^[a-z][a-z0-9_]{0,245}_hex$".
 */
export type Hex = string;
/**
 * The date that this report object was officially published by the creator of this report.
 */
export type Timestamp = string;
/**
 * Represents identifiers across the CTI specifications. The format consists of the name of the top-level object being identified, followed by two dashes (--), followed by a UUIDv4.
 */
export type Identifier = string;

/**
 * Rules for custom properties
 */
export interface Properties {}
export interface Id {
  [k: string]: unknown;
}
