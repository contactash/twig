/* eslint-disable @typescript-eslint/no-explicit-any */
export function groupArrayElements(arr:any, divider:number) {
  if (arr.length <= 0 || divider <= 0 || arr.length < divider) {
    return;
  }

  const result = [];
  const splicer = Math.round(arr.length / divider);
  while (arr.length !== 0) {
    result.push(arr.splice(0, splicer));
  }

  if (divider !== result.length) {
    return;
  }

  return result;
}


