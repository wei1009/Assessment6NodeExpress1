const express = require('express');
let axios = require('axios');
var app = express();
const ExpressError = require("./expressError")
app.use(express.json());

app.post('/', function(req, res) {
  if (!req.body.developers) throw new ExpressError('Developer name is required.', 400);
  const devInfo = req.body.developers.map(async developer => {
    try {
      const res = await axios.get(`https://api.github.com/users/${developer}`);
      if (res.status !== 404) {
        return {
          bio: res.data.bio,
          name: res.data.name,
        };
      }
    } catch {
      return { message: "User not found!" };
    }
  });
  Promise.all(devInfo).then((data) => {
    return res.status(200).json(data);
  })
});

app.use(function (req, res, next) {
  return new ExpressError("Not Found", 404);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);

  return res.json({
    error: err.message,
  });
});


app.listen(3000);
