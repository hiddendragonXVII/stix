/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Indicators contain a pattern that can be used to detect suspicious or malicious cyber activity.
 */
export type Indicator = Core & {
  /**
   * The type of this object, which MUST be the literal `indicator`.
   */
  type: "indicator";
  id?: Id;
  /**
   * This field is an Open Vocabulary that specifies the type of indicator. Open vocab - indicator-type-ov
   */
  indicator_types?: string[];
  /**
   * The name used to identify the Indicator.
   */
  name?: string;
  /**
   * A description that provides the recipient with context about this Indicator potentially including its purpose and its key characteristics.
   */
  description?: string;
  /**
   * The detection pattern for this indicator.
   */
  pattern?: string;
  /**
   * The type of pattern used in this indicator.
   */
  pattern_type: string;
  /**
   * The version of the pattern that is used.
   */
  pattern_version?: string;
  valid_from?: ValidFromTimestamp;
  valid_until?: ValidUntilTimestamp;
  /**
   * The phases of the kill chain that this indicator detects.
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
 * The time from which this indicator should be considered valuable intelligence.
 */
export type ValidFromTimestamp = string;
/**
 * The time at which this indicator should no longer be considered valuable intelligence.
 */
export type ValidUntilTimestamp = string;

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
