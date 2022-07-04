import { Character, declared } from "./type";
import { Data } from "./types/data";

declare const myGlobalValue: string;

export function logWindowVersion() {
  console.log(`Window version is: ${window.myVersion}`);
  window.alert("Built-in window types still work! Hooray!"); /*  */
}



function logData(data:Data){
  console.log("data version "+ data.version);

}

logData(globallyDeclared);
// logData(locallyDeclared);
// Error: Cannot find name 'locallyDeclared'.