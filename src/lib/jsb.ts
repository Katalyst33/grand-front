import {JsonBank} from "jsonbank";

  const jsb = new JsonBank({
    keys: {pub: import.meta.env.VITE_JSB_KEY}
})

export default jsb;