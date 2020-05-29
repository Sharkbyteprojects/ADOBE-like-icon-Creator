const fs = require("fs");
const pathToFile = `${__dirname}/adli.svg`;
const file = fs.readFileSync(pathToFile);
function rep(files, search, repl) {
  return files.toString().split(search).join(repl);
}
function replacefile(search, repl) {
  return rep(file, search, repl);
}
const dataset = {
  tosearch: "hsl(240, 100%,",
  toreplace: (value) => {
    return `hsl(${value}, 100%,`;
  },
};
module.exports = (hsvs, text) => {
  //yield
  return new Promise((ok, err) => {
    try {
      const teenant = replacefile(dataset.tosearch, dataset.toreplace(hsvs));
      const forperm = rep(text, " ", "").toUpperCase().split("");
      let xx;
      if (forperm.length == 1) {
        xx = forperm[0];
      } else {
        xx = `${forperm[0]}${forperm[1]}`;
      }
      ok(rep(teenant, "SH", xx));
    } catch (e) {
      console.log(e);
      err(e);
    }
  });
};
