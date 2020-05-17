import boy from "./boy.js"
import girl from "./girl.js"
import { writeJson } from 'https://raw.githubusercontent.com/denoland/deno/v1.0.0-rc2/std/fs/write_json.ts'

writeJson("./m.json", boy.map(({name, freq}: {name: string, freq: number}) => [name, freq]))
writeJson("./f.json", girl.map(({name, freq}: {name: string, freq: number}) => [name, freq]))