/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */
/**
 * Tools are legitimate software that can be used by threat actors to perform attacks.
 */
export declare type Tool = Core & {
    /**
     * The type of this object, which MUST be the literal `tool`.
     */
    type: "tool";
    id?: Id;
    /**
     * Alternative names used to identify this Tool.
     */
    aliases?: string[];
    /**
     * The kind(s) of tool(s) being described. Open Vocab - tool-type-ov
     */
    tool_types?: string[];
    /**
     * The name used to identify the Tool.
     */
    name?: string;
    /**
     * Provides more context and details about the Tool object.
     */
    description?: string;
    /**
     * The version identifier associated with the tool.
     */
    tool_version?: string;
    /**
     * The list of kill chain phases for which this Tool instance can be used.
     */
    kill_chain_phases?: KillChainPhase[];
    [k: string]: unknown;
};
/**
 * Common properties and behavior across all STIX Domain Objects and STIX Relationship Objects.
 */
export declare type Core = Properties;
/**
 * The ​binary data type represents a sequence of bytes. In order to allow pattern matching on custom objects, for all properties that use the binary type, the property name MUST end with '_bin'. The JSON MTI serialization represents this as a base64-­encoded string as specified in RFC4648​. Other serializations SHOULD use a native binary type, if available.
 *
 * This interface was referenced by `Properties`'s JSON-Schema definition
 * via the `patternProperty` "^[a-z][a-z0-9_]{0,245}_bin$".
 */
export declare type Binary = string;
/**
 * Rules for custom properties
 */
export interface Properties {
}
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
