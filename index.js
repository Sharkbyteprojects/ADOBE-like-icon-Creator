const helper = require("./helper.js");
const app = require("express")();
const os = require("os");
const comp = require("./compiler.js");
const http = require("http");
app.use((req, res, next) => {
  console.log("A client connected to:" + os.hostname());
  next();
});
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/ui.html");
});
app.get("/graphic", (req, res) => {
  const incomingText = req.query.text;
  const incomingNumber = parseFloat(req.query.int, 10);
  if (helper.isNotZero(incomingText)) {
    if (helper.isNotZero(incomingNumber)) {
      if (helper.isbetween(incomingNumber)) {
        comp(incomingNumber, incomingText).then(
          (done) => {
            res.set({
              "Content-Type": "image/svg+xml",
            });
            res.send(done);
          },
          (err) => {
            res.send(err);
          }
        );
      } else {
        res.send("The number is not Between 357.1 and 0.0");
      }
    } else {
      res.send("Please set the value int!");
    }
  } else {
    res.send("Please set the value text and int!");
  }
});
http.createServer(app).listen(8080, () => {
  console.log("Server " + os.hostname() + " is now Online");
});
