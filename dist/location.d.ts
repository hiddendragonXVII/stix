/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */
/**
 * A Location represents a geographic location. The location may be described as any, some or all of the following: region (e.g., North America), civic address (e.g. New York, US), latitude and longitude.
 */
export declare type Location = Core & {
    /**
     * The type of this object, which MUST be the literal `location`.
     */
    type: "location";
    id?: Id;
    /**
     * A textual description of the Location.
     */
    description?: string;
    /**
     * A name used to identify the Location.
     */
    name?: string;
    /**
     * The latitude of the Location in decimal degrees.
     */
    latitude?: number;
    /**
     * The longitude of the Location in decimal degrees.
     */
    longitude?: number;
    /**
     * Defines the precision of the coordinates specified by the latitude and longitude properties, measured in meters.
     */
    precision?: number;
    /**
     * The region that this Location describes.
     */
    region?: string;
    /**
     * The country that this Location describes.
     */
    country?: string;
    /**
     * The state, province, or other sub-national administrative area that this Location describes.
     */
    administrative_area?: string;
    /**
     * The city that this Location describes.
     */
    city?: string;
    /**
     * The street address that this Location describes.
     */
    street_address?: string;
    /**
     * The postal code for this Location.
     */
    postal_code?: string;
    [k: string]: unknown;
} & {
    [k: string]: unknown;
} & ({
    [k: string]: unknown;
} | {
    [k: string]: unknown;
}) & {
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
