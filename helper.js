const os = require("os");
console.log("Platform: " + os.platform());
console.log("Architecture: " + os.arch());
console.log("Free RAM: " + os.freemem());
function isbetween(va) {
  const max = 357.1;
  const min = 0.0;
  return va <= max && va >= min;
}
function isNotZero(input) {
  return !(
    input == undefined ||
    !input ||
    input == null ||
    input == NaN ||
    input == ""
  );
}
module.exports = { isNotZero, isbetween };
