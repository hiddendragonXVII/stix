/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * A Campaign is a grouping of adversary behavior that describes a set of malicious activities or attacks that occur over a period of time against a specific set of targets.
 */
export type Campaign = Core & {
  /**
   * The type of this object, which MUST be the literal `campaign`.
   */
  type: "campaign";
  id?: Id;
  /**
   * The name used to identify the Campaign.
   */
  name?: string;
  /**
   * A description that provides more details and context about the Campaign, potentially including its purpose and its key characteristics.
   */
  description?: string;
  /**
   * Alternative names used to identify this campaign.
   */
  aliases?: string[];
  first_seen?: CampaignFirstSeenTimestamp;
  last_seen?: CampaignLastSeenTimestamp;
  /**
   * This field defines the Campaign’s primary goal, objective, desired outcome, or intended effect.
   */
  objective?: string;
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
 * The time that this Campaign was first seen.
 */
export type CampaignFirstSeenTimestamp = string;
/**
 * The time that this Campaign was last seen.
 */
export type CampaignLastSeenTimestamp = string;

/**
 * Rules for custom properties
 */
export interface Properties {}
export interface Id {
  [k: string]: unknown;
}