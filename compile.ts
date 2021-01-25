import Ajv from "ajv";
import addFormats from "ajv-formats";
import { writeFileSync } from "fs";
import { compileFromFile, Options } from "json-schema-to-typescript";




interface compilationTarget {
    target: string,
    schema: string
}

const sdos = ["attack-pattern", "campaign",
    "course-of-action", "grouping", "identity",
    "indicator", "infrastructure", "intrusion-set",
    "location", "malware", "malware-analysis", "note",
    "observed-data", "opinion", "report", "threat-actor",
    "tool", "vulnerability"]

const main = () => {
    const schemas: compilationTarget[] = sdos.map(sdo => {
        return {
            schema: "./schemas/sdos/" + sdo + ".json",
            target: "./src/" + sdo + ".d.ts"
        }
    })

    schemas.forEach(({ target, schema }) => {
        compileFromFile(schema, {ignoreMinAndMaxItems:true})
            .then(compiled => {
                writeFileSync(target, compiled);
            });
    })




}
main();


