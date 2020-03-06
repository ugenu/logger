import { dim } from "colors";

export function namespaceFormat(namespace: string | string[]){
  let spaces = Array.isArray(namespace) ? namespace : [ namespace ];

  spaces = spaces.map((space, index) => index < spaces.length -1 ? dim(space) : space);

  return spaces.join(dim('/'));
}