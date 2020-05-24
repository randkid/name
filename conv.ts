import boy from "./m.js"
import girl from "./f.js"
import { writeFileStr } from 'https://raw.githubusercontent.com/denoland/deno/v1.0.0-rc2/std/fs/write_file_str.ts'

writeFileStr("./m.csv", (boy as [string,number][]).map(([name, freq]) => `${name},${freq}`).join("\n"))
writeFileStr("./f.csv", (girl as [string,number][]).map(([name, freq]) => `${name},${freq}`).join("\n"))