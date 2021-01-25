/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */
/**
 * A Grouping object explicitly asserts that the referenced STIX Objects have a shared content.
 */
export declare type Grouping = Core & {
    /**
     * The type of this object, which MUST be the literal `grouping`.
     */
    type?: "grouping";
    id?: Id;
    /**
     * A name used to identify the Grouping.
     */
    name?: string;
    /**
     * A description which provides more details and context about the Grouping, potentially including the purpose and key characteristics.
     */
    description?: string;
    /**
     * A short description of the particular context shared by the content referenced by the Grouping.
     */
    context?: string;
    /**
     * The STIX Objects (SDOs and SROs) that  are referred to by this Grouping.
     */
    object_refs?: Identifier[];
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
 * The hex data type encodes an array of octets (8-bit bytes) as hexadecimal. The string MUST consist of an even number of hexadecimal characters, which are the digits '0' through '9' and the letters 'a' through 'f'.  In order to allow pattern matching on custom objects, all properties that use the hex type, the property name MUST end with '_hex'.
 *
 * This interface was referenced by `Properties`'s JSON-Schema definition
 * via the `patternProperty` "^[a-z][a-z0-9_]{0,245}_hex$".
 */
export declare type Hex = string;
/**
 * Represents identifiers across the CTI specifications. The format consists of the name of the top-level object being identified, followed by two dashes (--), followed by a UUIDv4.
 */
export declare type Identifier = string;
/**
 * Rules for custom properties
 */
export interface Properties {
}
export interface Id {
    [k: string]: unknown;
}
