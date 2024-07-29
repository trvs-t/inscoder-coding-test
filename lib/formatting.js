export function formatNumber(value) {
  if (isNaN(value)) {
    return "";
  }
  return Math.round(value).toLocaleString("en-US");
}
