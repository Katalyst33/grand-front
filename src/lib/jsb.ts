import { JsonBank } from "jsonbank";
import { jsb_generateModifierHelpers } from "jsonbank/src/helpers";

const jsb = new JsonBank({
  keys: { pub: import.meta.env.VITE_JSB_KEY },
});


const { mapPick, filter, reject } = jsb_generateModifierHelpers();

const filterQuery = JSON.stringify({ type: "airport" });
const rejectQuery = JSON.stringify({ name: null });

export type Airport ={
    iata: string;
    name: string;
    iso: string;
    type: string;
}

export async function fetchAirports() {
  return jsb.getOwnContent<Airport[]>(
    "grand-eagle/airports.json",
    [
      mapPick(["iata", "name", "iso", "type"]),
      filter({ json: "filter" }, { filter: filterQuery }),
      reject({ json: "reject" }, { reject: rejectQuery }),
    ],
    // jsonbank will cache this response for 1 month if you set it to "max"
    { cache: "max" }
  );
}
