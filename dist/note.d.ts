/**
 * A Note is a comment or note containing informative text to help explain the context of one or more STIX Objects (SDOs or SROs) or to provide additional analysis that is not contained in the original object.
 */
export declare type Note = Core & {
    /**
     * The type of this object, which MUST be the literal `note`.
     */
    type: "note";
    id?: Id;
    /**
     * A brief summary of the note.
     */
    abstract?: string;
    /**
     * The content of the note.
     */
    content?: string;
    /**
     * The name of the author(s) of this note (e.g., the analyst(s) that created it).
     */
    authors?: string[];
    /**
     * The STIX Objects (SDOs and SROs) that the note is being applied to.
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
