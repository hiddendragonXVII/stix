/**
 * Observed data conveys information that was observed on systems and networks, such as log data or network traffic, using the Cyber Observable specification.
 */
export declare type ObservedData = (Core & {
    /**
     * The type of this object, which MUST be the literal `observed-data`.
     */
    type: "observed-data";
    id?: Id;
    first_observed?: FirstObserved;
    last_observed?: LastObserved;
    /**
     * The number of times the data represented in the objects property was observed. This MUST be an integer between 1 and 999,999,999 inclusive.
     */
    number_observed?: number;
    /**
     * A dictionary of Cyber Observable Objects that describes the single 'fact' that was observed.
     */
    objects?: {
        /**
         * This interface was referenced by `undefined`'s JSON-Schema definition
         * via the `patternProperty` "^.*$".
         */
        [k: string]: (CyberObservableCore & {
            [k: string]: unknown;
        }) | Artifact | AutonomousSystem | Directory | DomainName | EmailAddr | EmailMessage | File | Ipv4Addr | Ipv6Addr | MacAddr | Mutex | NetworkTraffic | Process | Software | Url | UserAccount | WindowsRegistryKey | X509Certificate;
    };
    /**
     * A list of SCOs and SROs representing the observation.
     */
    object_refs?: Identifier[];
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
 * The hex data type encodes an array of octets (8-bit bytes) as hexadecimal. The string MUST consist of an even number of hexadecimal characters, which are the digits '0' through '9' and the letters 'a' through 'f'.  In order to allow pattern matching on custom objects, all properties that use the hex type, the property name MUST end with '_hex'.
 *
 * This interface was referenced by `Properties`'s JSON-Schema definition
 * via the `patternProperty` "^[a-z][a-z0-9_]{0,245}_hex$".
 */
export declare type Hex = string;
/**
 * The beginning of the time window that the data was observed during.
 */
export declare type FirstObserved = string;
/**
 * The end of the time window that the data was observed during.
 */
export declare type LastObserved = string;
/**
 * Common properties and behavior across all Cyber Observable Objects.
 */
export declare type CyberObservableCore = Properties;
/**
 * The Artifact Object permits capturing an array of bytes (8-bits), as a base64-encoded string string, or linking to a file-like payload.
 */
export declare type Artifact = CyberObservableCore & {
    /**
     * The value of this property MUST be `artifact`.
     */
    type: "artifact";
    id?: Id;
    /**
     * The value of this property MUST be a valid MIME type as specified in the IANA Media Types registry.
     */
    mime_type: string;
    payload_bin?: BinaryPayload;
    url?: UrlRegex;
    hashes?: Hashes;
    /**
     * If the artifact is encrypted, specifies the type of encryption algorithm the binary data  (either via payload_bin or url) is encoded in.
     */
    encryption_algorithm?: "AES-256-GCM" | "ChaCha20-Poly1305" | "mime-type-indicated";
    /**
     * Specifies the decryption key for the encrypted binary data (either via payload_bin or url).
     */
    decryption_key?: string;
    [k: string]: unknown;
} & {
    [k: string]: unknown;
} & ({
    [k: string]: unknown;
} | {
    [k: string]: unknown;
});
/**
 * Specifies the binary data contained in the artifact as a base64-encoded string.
 */
export declare type BinaryPayload = string;
/**
 * The value of this property MUST be a valid URL that resolves to the unencoded content.
 */
export declare type UrlRegex = string;
/**
 * Specifies a dictionary of hashes for the contents of the url or the payload_bin.  This MUST be provided when the url property is present.
 */
export declare type Hashes = Dictionary;
/**
 * The AS object represents the properties of an Autonomous Systems (AS).
 */
export declare type AutonomousSystem = CyberObservableCore & {
    /**
     * The value of this property MUST be `autonomous-system`.
     */
    type: "autonomous-system";
    id?: Id;
    /**
     * Specifies the number assigned to the AS. Such assignments are typically performed by a Regional Internet Registries (RIR).
     */
    number: number;
    /**
     * Specifies the name of the AS.
     */
    name?: string;
    /**
     * Specifies the name of the Regional Internet Registry (RIR) that assigned the number to the AS.
     */
    rir?: string;
    [k: string]: unknown;
};
/**
 * The Directory Object represents the properties common to a file system directory.
 */
export declare type Directory = CyberObservableCore & {
    /**
     * The value of this property MUST be `directory`.
     */
    type: "directory";
    id?: Id;
    /**
     * Specifies the path, as originally observed, to the directory on the file system.
     */
    path: string;
    /**
     * Specifies the observed encoding for the path.
     */
    path_enc?: string;
    ctime?: CreatedTimestamp;
    mtime?: LastModifiedTimestamp;
    atime?: LastAccessedTimestamp;
    /**
     * Specifies a list of references to other File and/or Directory Objects contained within the directory.
     */
    contains_refs?: string[];
    [k: string]: unknown;
};
/**
 * Specifies the date/time the directory was created.
 */
export declare type CreatedTimestamp = string;
/**
 * Specifies the date/time the directory was last written to/modified.
 */
export declare type LastModifiedTimestamp = string;
/**
 * Specifies the date/time the directory was last accessed.
 */
export declare type LastAccessedTimestamp = string;
/**
 * The Domain Name represents the properties of a network domain name.
 */
export declare type DomainName = CyberObservableCore & {
    /**
     * The value of this property MUST be `domain-name`.
     */
    type: "domain-name";
    id?: Id;
    /**
     * Specifies the value of the domain name.
     */
    value: string;
    /**
     * Specifies a list of references to one or more IP addresses or domain names that the domain name resolves to.
     */
    resolves_to_refs?: string[];
    [k: string]: unknown;
};
/**
 * The Email Address Object represents a single email address.
 */
export declare type EmailAddr = CyberObservableCore & {
    /**
     * The value of this property MUST be `email-addr`.
     */
    type: "email-addr";
    id?: Id;
    /**
     * Specifies a single email address. This MUST not include the display name.
     */
    value: string;
    /**
     * Specifies a single email display name, i.e., the name that is displayed to the human user of a mail application.
     */
    display_name?: string;
    /**
     * Specifies the user account that the email address belongs to, as a reference to a User Account Object.
     */
    belongs_to_ref?: string;
    [k: string]: unknown;
};
/**
 * The Email Message Object represents an instance of an email message.
 */
export declare type EmailMessage = (CyberObservableCore & {
    /**
     * The value of this property MUST be `email-message`.
     */
    type: "email-message";
    id?: Id;
    date?: EmailSentTimestamp;
    /**
     * Specifies the value of the 'Content-Type' header of the email message.
     */
    content_type: string;
    /**
     * Specifies the value of the 'From:' header of the email message.
     */
    from_ref?: string;
    /**
     * Specifies the value of the 'From' field of the email message.
     */
    sender_ref?: string;
    /**
     * Specifies the mailboxes that are 'To:' recipients of the email message.
     */
    to_refs?: string[];
    /**
     * Specifies the mailboxes that are 'CC:' recipients of the email message.
     */
    cc_refs?: string[];
    /**
     * Specifies the mailboxes that are 'BCC:' recipients of the email message.
     */
    bcc_refs?: string[];
    /**
     * Specifies the Message-ID field of the email message.
     */
    message_id?: string;
    /**
     * Specifies the subject of the email message.
     */
    subject?: string;
    /**
     * Specifies one or more Received header fields that may be included in the email headers.
     */
    received_lines?: string[];
    /**
     * Specifies any other header fields found in the email message, as a dictionary.
     */
    additional_header_fields?: Dictionary;
    /**
     * Specifies the raw binary contents of the email message, including both the headers and body, as a reference to an Artifact Object.
     */
    raw_email_ref?: string;
    [k: string]: unknown;
}) & ({
    /**
     * Indicates whether the email body contains multiple MIME parts.
     */
    is_multipart: false;
    /**
     * Specifies a string containing the email body. This field MAY only be used if is_multipart is false.
     */
    body?: string;
    [k: string]: unknown;
} | {
    /**
     * Indicates whether the email body contains multiple MIME parts.
     */
    is_multipart: true;
    /**
     * Specifies a list of the MIME parts that make up the email body. This property MAY only be used if is_multipart is true.
     */
    body_multipart?: ({
        [k: string]: unknown;
    } | {
        [k: string]: unknown;
    })[];
    [k: string]: unknown;
});
/**
 * Specifies the date/time that the email message was sent.
 */
export declare type EmailSentTimestamp = string;
/**
 * The File Object represents the properties of a file.
 */
export declare type File = (CyberObservableCore & {
    /**
     * The value of this property MUST be `file`.
     */
    type: "file";
    id?: Id;
    /**
     * The File Object defines the following extensions. In addition to these, producers MAY create their own. Extensions: ntfs-ext, raster-image-ext, pdf-ext, archive-ext, windows-pebinary-ext
     */
    extensions?: Dictionary;
    hashes?: FileHashes;
    /**
     * Specifies the size of the file, in bytes, as a non-negative integer.
     */
    size?: number;
    /**
     * Specifies the name of the file.
     */
    name?: string;
    /**
     * Specifies the observed encoding for the name of the file.
     */
    name_enc?: string;
    magic_number_hex?: Hex1;
    /**
     * Specifies the MIME type name specified for the file, e.g., 'application/msword'.
     */
    mime_type: string;
    ctime?: FileCreated;
    mtime?: FileModified;
    atime?: FileAccessed;
    /**
     * Specifies the parent directory of the file, as a reference to a Directory Object.
     */
    parent_directory_ref?: string;
    /**
     * Specifies a list of references to other Observable Objects contained within the file.
     */
    contains_refs?: string[];
    /**
     * Specifies the content of the file, represented as an Artifact Object.
     */
    content_ref?: string;
    [k: string]: unknown;
}) & {
    [k: string]: unknown;
};
/**
 * Specifies a dictionary of hashes for the file.
 */
export declare type FileHashes = Dictionary;
/**
 * Specifies the hexadecimal constant ('magic number') associated with a specific file format that corresponds to the file, if applicable.
 */
export declare type Hex1 = string;
/**
 * Specifies the date/time the file was created.
 */
export declare type FileCreated = string;
/**
 * Specifies the date/time the file was last written to/modified.
 */
export declare type FileModified = string;
/**
 * Specifies the date/time the file was last accessed.
 */
export declare type FileAccessed = string;
/**
 * The IPv4 Address Object represents one or more IPv4 addresses expressed using CIDR notation.
 */
export declare type Ipv4Addr = CyberObservableCore & {
    /**
     * The value of this property MUST be `ipv4-addr`.
     */
    type: "ipv4-addr";
    id?: Id;
    /**
     * Specifies one or more IPv4 addresses expressed using CIDR notation.
     */
    value: string;
    /**
     * Specifies a list of references to one or more Layer 2 Media Access Control (MAC) addresses that the IPv4 address resolves to.
     */
    resolves_to_refs?: string[];
    /**
     * Specifies a reference to one or more autonomous systems (AS) that the IPv4 address belongs to.
     */
    belongs_to_refs?: string[];
    [k: string]: unknown;
};
/**
 * The IPv6 Address Object represents one or more IPv6 addresses expressed using CIDR notation.
 */
export declare type Ipv6Addr = CyberObservableCore & {
    /**
     * The value of this property MUST be `ipv6-addr`.
     */
    type: "ipv6-addr";
    id?: Id;
    /**
     * Specifies one or more IPv6 addresses expressed using CIDR notation.
     */
    value: string;
    /**
     * Specifies a list of references to one or more Layer 2 Media Access Control (MAC) addresses that the IPv6 address resolves to.
     */
    resolves_to_refs?: string[];
    /**
     * Specifies a reference to one or more autonomous systems (AS) that the IPv6 address belongs to.
     */
    belongs_to_refs?: string[];
    [k: string]: unknown;
};
/**
 * The MAC Address Object represents a single Media Access Control (MAC) address.
 */
export declare type MacAddr = CyberObservableCore & {
    /**
     * The value of this property MUST be `mac-addr`.
     */
    type: "mac-addr";
    id?: Id;
    /**
     * Specifies one or more mac addresses expressed using CIDR notation.
     */
    value: string;
    [k: string]: unknown;
};
/**
 * The Mutex Object represents the properties of a mutual exclusion (mutex) object.
 */
export declare type Mutex = CyberObservableCore & {
    /**
     * The value of this property MUST be `mutex`.
     */
    type: "mutex";
    id?: Id;
    /**
     * Specifies the name of the mutex object.
     */
    name?: string;
    [k: string]: unknown;
};
/**
 * The Network Traffic Object represents arbitrary network traffic that originates from a source and is addressed to a destination.
 */
export declare type NetworkTraffic = (CyberObservableCore & {
    /**
     * The value of this property MUST be `network-traffic`.
     */
    type: "network-traffic";
    id?: Id;
    /**
     * The Network Traffic Object defines the following extensions. In addition to these, producers MAY create their own. Extensions: http-ext, tcp-ext, icmp-ext, socket-ext
     */
    extensions?: Dictionary;
    start?: NetworkTrafficInitiated;
    end?: NetworkTrafficEnded;
    /**
     * Specifies the source of the network traffic, as a reference to an Observable Object.
     */
    src_ref?: string;
    /**
     * Specifies the destination of the network traffic, as a reference to an Observable Object.
     */
    dst_ref?: string;
    /**
     * Specifies the source port used in the network traffic, as an integer. The port value MUST be in the range of 0 - 65535.
     */
    src_port?: number;
    /**
     * Specifies the destination port used in the network traffic, as an integer. The port value MUST be in the range of 0 - 65535.
     */
    dst_port?: number;
    /**
     * Specifies the protocols observed in the network traffic, along with their corresponding state.
     */
    protocols?: string[];
    /**
     * Specifies the number of bytes sent from the source to the destination.
     */
    src_byte_count?: number;
    /**
     * Specifies the number of bytes sent from the destination to the source.
     */
    dst_byte_count?: number;
    /**
     * Specifies the number of packets sent from the source to the destination.
     */
    src_packets?: number;
    /**
     * Specifies the number of packets sent destination to the source.
     */
    dst_packets?: number;
    /**
     * Specifies any IP Flow Information Export (IPFIX) data for the traffic.
     */
    ipfix?: Dictionary;
    /**
     * Specifies the bytes sent from the source to the destination.
     */
    src_payload_ref?: string;
    /**
     * Specifies the bytes sent from the source to the destination.
     */
    dst_payload_ref?: string;
    /**
     * Links to other network-traffic objects encapsulated by a network-traffic.
     */
    encapsulates_refs?: string[];
    /**
     * Links to another network-traffic object which encapsulates this object.
     */
    encapsulated_by_ref?: string;
    [k: string]: unknown;
}) & {
    [k: string]: unknown;
} & ({
    /**
     * Indicates whether the network traffic is still ongoing.
     */
    is_active: false;
    [k: string]: unknown;
} | {
    /**
     * Indicates whether the network traffic is still ongoing.
     */
    is_active: true;
    [k: string]: unknown;
} | {
    [k: string]: unknown;
});
/**
 * Specifies the date/time the network traffic was initiated, if known.
 */
export declare type NetworkTrafficInitiated = string;
/**
 * Specifies the date/time the network traffic ended, if known.
 */
export declare type NetworkTrafficEnded = string;
/**
 * The Process Object represents common properties of an instance of a computer program as executed on an operating system.
 */
export declare type Process = (CyberObservableCore & {
    /**
     * The value of this property MUST be `process`.
     */
    type: "process";
    id?: Id;
    /**
     * The Process Object defines the following extensions. In addition to these, producers MAY create their own. Extensions: windows-process-ext, windows-service-ext.
     */
    extensions?: Dictionary;
    /**
     * Specifies whether the process is hidden.
     */
    is_hidden?: boolean;
    /**
     * Specifies the Process ID, or PID, of the process.
     */
    pid?: number;
    created?: ProcessCreatedTimestamp;
    /**
     * Specifies the current working directory of the process.
     */
    cwd?: string;
    /**
     * Specifies the full command line used in executing the process, including the process name (which may be specified individually via the binary_ref.name property) and any arguments.
     */
    command_line?: string;
    environment_variables?: EnvironmentVariables;
    /**
     * Specifies the list of network connections opened by the process, as a reference to one or more Network Traffic Objects.
     */
    opened_connection_refs?: string[];
    /**
     * Specifies the user that created the process, as a reference to a User Account Object.
     */
    creator_user_ref?: string;
    /**
     * Specifies the executable binary that was executed as the process image, as a reference to a File Object.
     */
    image_ref?: string;
    /**
     * Specifies the other process that spawned (i.e. is the parent of) this one, as represented by a Process Object.
     */
    parent_ref?: string;
    /**
     * Specifies the other processes that were spawned by (i.e. children of) this process, as a reference to one or more other Process Objects.
     */
    child_refs?: string[];
    [k: string]: unknown;
}) & {
    [k: string]: unknown;
};
/**
 * Specifies the date/time at which the process was created.
 */
export declare type ProcessCreatedTimestamp = string;
/**
 * The Software Object represents high-level properties associated with software, including software products.
 */
export declare type Software = CyberObservableCore & {
    /**
     * The value of this property MUST be `software`.
     */
    type: "software";
    id?: Id;
    /**
     * Specifies the name of the software.
     */
    name?: string;
    /**
     * Specifies the Common Platform Enumeration (CPE) entry for the software, if available. The value for this property MUST be a CPE v2.3 entry from the official NVD CPE Dictionary.
     */
    cpe?: string;
    /**
     * Specifies the Software Identification (SWID) Tags entry for the software, if available.
     */
    swid?: string;
    /**
     * Specifies the languages supported by the software. The value of each list member MUST be an ISO 639-2 language code.
     */
    languages?: string[];
    /**
     * Specifies the name of the vendor of the software.
     */
    vendor?: string;
    /**
     * Specifies the version of the software.
     */
    version?: string;
    [k: string]: unknown;
};
/**
 * The URL Object represents the properties of a uniform resource locator (URL).
 */
export declare type Url = CyberObservableCore & {
    /**
     * The value of this property MUST be `url`.
     */
    type: "url";
    id?: Id;
    value?: UrlRegex1;
    [k: string]: unknown;
};
/**
 * Specifies the value of the URL.
 */
export declare type UrlRegex1 = string;
/**
 * The User Account Object represents an instance of any type of user account, including but not limited to operating system, device, messaging service, and social media platform accounts.
 */
export declare type UserAccount = (CyberObservableCore & {
    /**
     * The value of this property MUST be `user-account`.
     */
    type: "user-account";
    id?: Id;
    /**
     * The User Account Object defines the following extensions. In addition to these, producers MAY create their own. Extensions: unix-account-ext.
     */
    extensions?: Dictionary;
    /**
     * Specifies the identifier of the account.
     */
    user_id?: string;
    /**
     * Specifies a cleartext credential. This is only intended to be used in capturing metadata from malware analysis (e.g., a hard-coded domain administrator password that the malware attempts to use for lateral movement) and SHOULD NOT be used for sharing of PII.
     */
    credential?: string;
    /**
     * Specifies the account login string, used in cases where the user_id property specifies something other than what a user would type when they login.
     */
    account_login?: string;
    /**
     * Specifies the type of the account. This is an open vocabulary and values SHOULD come from the account-type-ov vocabulary.
     */
    account_type: string;
    /**
     * Specifies the display name of the account, to be shown in user interfaces, if applicable.
     */
    display_name?: string;
    /**
     * Indicates that the account is associated with a network service or system process (daemon), not a specific individual.
     */
    is_service_account?: boolean;
    /**
     * Specifies that the account has elevated privileges (i.e., in the case of root on Unix or the Windows Administrator account).
     */
    is_privileged?: boolean;
    /**
     * Specifies that the account has the ability to escalate privileges (i.e., in the case of sudo on Unix or a Windows Domain Admin account).
     */
    can_escalate_privs?: boolean;
    /**
     * Specifies if the account is disabled.
     */
    is_disabled?: boolean;
    account_created?: AccountCreatedTimestamp;
    account_expires?: AccountExpiresTimestamp;
    credential_last_changed?: AccountCredentialLastChanged;
    account_first_login?: AccountFirstLogin;
    account_last_login?: AccountLastAccessed;
    [k: string]: unknown;
}) & {
    [k: string]: unknown;
};
/**
 * Specifies when the account was created.
 */
export declare type AccountCreatedTimestamp = string;
/**
 * Specifies the expiration date of the account.
 */
export declare type AccountExpiresTimestamp = string;
/**
 * Specifies when the account credential was last changed.
 */
export declare type AccountCredentialLastChanged = string;
/**
 * Specifies when the account was first accessed.
 */
export declare type AccountFirstLogin = string;
/**
 * Specifies when the account was last accessed.
 */
export declare type AccountLastAccessed = string;
/**
 * The Registry Key Object represents the properties of a Windows registry key.
 */
export declare type WindowsRegistryKey = (CyberObservableCore & {
    /**
     * The value of this property MUST be `windows-registry-key`.
     */
    type: "windows-registry-key";
    id?: Id;
    /**
     * Specifies the full registry key including the hive.
     */
    key?: string;
    /**
     * Specifies the values found under the registry key.
     */
    values?: ({
        [k: string]: unknown;
    } | {
        [k: string]: unknown;
    } | {
        [k: string]: unknown;
    })[];
    modified_time?: RegistryKeyModified;
    /**
     * Specifies a reference to a user account, represented as a User Account Object, that created the registry key.
     */
    creator_user_ref?: string;
    /**
     * Specifies the number of subkeys contained under the registry key.
     */
    number_of_subkeys?: number;
    [k: string]: unknown;
}) & {
    [k: string]: unknown;
};
/**
 * Specifies the last date/time that the registry key was modified.
 */
export declare type RegistryKeyModified = string;
/**
 * The X509 Certificate Object represents the properties of an X.509 certificate.
 */
export declare type X509Certificate = CyberObservableCore & {
    /**
     * The value of this property MUST be `x509-certificate`.
     */
    type: "x509-certificate";
    id?: Id;
    /**
     * Specifies whether the certificate is self-signed, i.e., whether it is signed by the same entity whose identity it certifies.
     */
    is_self_signed?: boolean;
    hashes?: CertificateHashes;
    /**
     * Specifies the version of the encoded certificate.
     */
    version?: string;
    /**
     * Specifies the unique identifier for the certificate, as issued by a specific Certificate Authority.
     */
    serial_number?: string;
    /**
     * Specifies the name of the algorithm used to sign the certificate.
     */
    signature_algorithm?: string;
    /**
     * Specifies the name of the Certificate Authority that issued the certificate.
     */
    issuer?: string;
    validity_not_before?: CertificateValidityBeginTimestamp;
    validity_not_after?: CertificateValidityEndTimestamp;
    /**
     * Specifies the name of the entity associated with the public key stored in the subject public key field of the certificate.
     */
    subject?: string;
    /**
     * Specifies the name of the algorithm with which to encrypt data being sent to the subject.
     */
    subject_public_key_algorithm?: string;
    /**
     * Specifies the modulus portion of the subject’s public RSA key.
     */
    subject_public_key_modulus?: string;
    /**
     * Specifies the exponent portion of the subject’s public RSA key, as an integer.
     */
    subject_public_key_exponent?: number;
    /**
     * Specifies any standard X.509 v3 extensions that may be used in the certificate.
     */
    x509_v3_extensions?: {
        /**
         * Specifies a multi-valued extension which indicates whether a certificate is a CA certificate.
         */
        basic_constraints?: string;
        /**
         * Specifies a namespace within which all subject names in subsequent certificates in a certification path MUST be located.
         */
        name_constraints?: string;
        /**
         * Specifies any constraints on path validation for certificates issued to CAs.
         */
        policy_constraints?: string;
        /**
         * Specifies a multi-valued extension consisting of a list of names of the permitted key usages.
         */
        key_usage?: string;
        /**
         * Specifies a list of usages indicating purposes for which the certificate public key can be used for.
         */
        extended_key_usage?: string;
        /**
         * Specifies the identifier that provides a means of identifying certificates that contain a particular public key.
         */
        subject_key_identifier?: string;
        /**
         * Specifies the identifier that provides a means of identifying the public key corresponding to the private key used to sign a certificate.
         */
        authority_key_identifier?: string;
        /**
         * Specifies the additional identities to be bound to the subject of the certificate.
         */
        subject_alternative_name?: string;
        /**
         * Specifies the additional identities to be bound to the issuer of the certificate.
         */
        issuer_alternative_name?: string;
        /**
         * Specifies the identification attributes (e.g., nationality) of the subject.
         */
        subject_directory_attributes?: string;
        /**
         * Specifies how CRL information is obtained.
         */
        crl_distribution_points?: string;
        /**
         * Specifies the number of additional certificates that may appear in the path before anyPolicy is no longer permitted.
         */
        inhibit_any_policy?: string;
        private_key_usage_period_not_before?: PrivateKeyBecomesValid;
        private_key_usage_period_not_after?: PrivateKeyExpires;
        /**
         * Specifies a sequence of one or more policy information terms, each of which consists of an object identifier (OID) and optional qualifiers.
         */
        certificate_policies?: string;
        /**
         * Specifies one or more pairs of OIDs; each pair includes an issuerDomainPolicy and a subjectDomainPolicy
         */
        policy_mappings?: string;
        [k: string]: unknown;
    } & {
        [k: string]: unknown;
    };
    [k: string]: unknown;
} & {
    [k: string]: unknown;
};
/**
 * Specifies any hashes that were calculated for the entire contents of the certificate.
 */
export declare type CertificateHashes = Dictionary;
/**
 * Specifies the date on which the certificate validity period begins.
 */
export declare type CertificateValidityBeginTimestamp = string;
/**
 * Specifies the date on which the certificate validity period ends.
 */
export declare type CertificateValidityEndTimestamp = string;
/**
 * Specifies the date on which the validity period begins for the private key, if it is different from the validity period of the certificate.
 */
export declare type PrivateKeyBecomesValid = string;
/**
 * Specifies the date on which the validity period ends for the private key, if it is different from the validity period of the certificate.
 */
export declare type PrivateKeyExpires = string;
/**
 * Represents identifiers across the CTI specifications. The format consists of the name of the top-level object being identified, followed by two dashes (--), followed by a UUIDv4.
 */
export declare type Identifier = string;
/**
 * Rules for custom properties
 */
export interface Properties {
}
/**
 * Object Identifier
 */
export interface Id {
    [k: string]: unknown;
}
/**
 * A dictionary captures a set of key/value pairs
 */
export interface Dictionary {
    /**
     * This interface was referenced by `Dictionary`'s JSON-Schema definition
     * via the `patternProperty` "^[a-zA-Z0-9_-]{0,250}$".
     *
     * This interface was referenced by `EnvironmentVariables`'s JSON-Schema definition
     * via the `patternProperty` "^[a-zA-Z0-9_-]{0,250}$".
     */
    [k: string]: unknown[] | string | number | boolean | {
        [k: string]: unknown;
    };
}
/**
 * Specifies the list of environment variables associated with the process as a dictionary.
 */
export interface EnvironmentVariables {
    /**
     * This interface was referenced by `Dictionary`'s JSON-Schema definition
     * via the `patternProperty` "^[a-zA-Z0-9_-]{0,250}$".
     *
     * This interface was referenced by `EnvironmentVariables`'s JSON-Schema definition
     * via the `patternProperty` "^[a-zA-Z0-9_-]{0,250}$".
     */
    [k: string]: unknown[] | string | number | boolean | {
        [k: string]: unknown;
    };
}
