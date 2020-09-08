import {weightedList} from "./deps.ts"
import {Nominal} from "https://raw.githubusercontent.com/randkid/Randkid/master/mod.ts"
import {gender} from "https://raw.githubusercontent.com/randkid/Collection/master/mod.ts"

import f from "./f.js"
import m from "./m.js"

const data = {
    f: weightedList.getMaterial(f), 
    m: weightedList.getMaterial(m)
}

export default new Nominal({
    inputMaterials: [gender],
    rand: (seed, gender) => {
        return data[gender as "f" | "m"].rand(seed)
    },
    categories: f.categories.concat(m.categories)
})