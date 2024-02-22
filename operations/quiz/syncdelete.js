const fs = require("fs");
fs.readFile("./operations/data.txt", (err, data) => {
  if (err) console.log(err.message);
  else {
    console.log(data);
    fs.unlinkSync("./operations/data.txt");	
  }
});
