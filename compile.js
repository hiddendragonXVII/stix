"use strict";
exports.__esModule = true;
var fs_1 = require("fs");
var json_schema_to_typescript_1 = require("json-schema-to-typescript");
var sdos = ["attack-pattern", "campaign",
    "course-of-action", "grouping", "identity",
    "indicator", "infrastructure", "intrusion-set",
    "location", "malware", "malware-analysis", "note",
    "observed-data", "opinion", "report", "threat-actor",
    "tool", "vulnerability"];
var main = function () {
    var schemas = sdos.map(function (sdo) {
        return {
            schema: "./schemas/sdos/" + sdo + ".json",
            target: "./src/" + sdo + ".d.ts"
        };
    });
    schemas.forEach(function (_a) {
        var target = _a.target, schema = _a.schema;
        json_schema_to_typescript_1.compileFromFile(schema, { ignoreMinAndMaxItems: true })
            .then(function (compiled) {
            fs_1.writeFileSync(target, compiled);
        });
    });
};
main();
