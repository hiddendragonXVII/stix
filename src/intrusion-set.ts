/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * An Intrusion Set is a grouped set of adversary behavior and resources with common properties that is believed to be orchestrated by a single organization.
 */
export type IntrusionSet = Core & {
  /**
   * The type of this object, which MUST be the literal `intrusion-set`.
   */
  type: "intrusion-set";
  id?: Id;
  /**
   * The name used to identify the Intrusion Set.
   */
  name?: string;
  /**
   * Provides more context and details about the Intrusion Set object.
   */
  description?: string;
  /**
   * Alternative names used to identify this Intrusion Set.
   */
  aliases?: string[];
  first_seen?: IntrusionSetFirstSeen;
  last_seen?: IntrusionSetLastSeen;
  /**
   * The high level goals of this Intrusion Set, namely, what are they trying to do.
   */
  goals?: string[];
  /**
   * This defines the organizational level at which this Intrusion Set typically works. Open Vocab - attack-resource-level-ov
   */
  resource_level?: string;
  /**
   * The primary reason, motivation, or purpose behind this Intrusion Set. Open Vocab - attack-motivation-ov
   */
  primary_motivation?: string;
  /**
   * The secondary reasons, motivations, or purposes behind this Intrusion Set. Open Vocab - attack-motivation-ov
   */
  secondary_motivations?: string[];
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
 * The time that this Intrusion Set was first seen.
 */
export type IntrusionSetFirstSeen = string;
/**
 * The time that this Intrusion Set was last seen.
 */
export type IntrusionSetLastSeen = string;

/**
 * Rules for custom properties
 */
export interface Properties {}
export interface Id {
  [k: string]: unknown;
}