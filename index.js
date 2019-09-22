const { server } = require("./server/index");

const port = process.env.PORT || 5000;

server.listen(port, () => {
  console.log(`Password generator listening on ${port}`);
});
