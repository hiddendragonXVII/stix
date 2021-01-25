/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Attack Patterns are a type of TTP that describe ways that adversaries attempt to compromise targets.
 */
export type AttackPattern = Core & {
  /**
   * The type of this object, which MUST be the literal `attack-pattern`.
   */
  type?: "attack-pattern";
  /**
   * Alternative names used to identify this Attack Pattern.
   */
  aliases?: string[];
  id?: Id;
  /**
   * The name used to identify the Attack Pattern.
   */
  name?: string;
  /**
   * A description that provides more details and context about the Attack Pattern, potentially including its purpose and its key characteristics.
   */
  description?: string;
  /**
   * The list of kill chain phases for which this attack pattern is used.
   */
  kill_chain_phases?: KillChainPhase[];
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
 * Rules for custom properties
 */
export interface Properties {}
export interface Id {
  [k: string]: unknown;
}
/**
 * The kill-chain-phase represents a phase in a kill chain.
 */
export interface KillChainPhase {
  /**
   * The name of the kill chain.
   */
  kill_chain_name: string;
  /**
   * The name of the phase in the kill chain.
   */
  phase_name: string;
  [k: string]: unknown;
}
