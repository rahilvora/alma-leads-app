/**
 * Converts epoch timestamp (in milliseconds) to a formatted date-time string
 * @param epochTime - Epoch timestamp in milliseconds
 * @returns Formatted date-time string
 */
export function epochToDateTime(epochTime: number): string {
  const date = new Date(epochTime);
  const AM_PM = date.getHours() < 12 ? "AM" : "PM";
  return `${date.getMonth()}/${date.getDate()}/${date.getFullYear()}, ${date.getHours()}:${date.getMinutes()} ${AM_PM}`;
}

