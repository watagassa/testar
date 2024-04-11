import { LonLatToLoc } from "./LonLatToLoc";
export const Test = async() => {
    const citycode = await LonLatToLoc();
    console.log(citycode);
}