const express = require("express");
const { v4: uuidv4 } = require("uuid");
var cors = require('cors');

const app = express();

app.use(express.json());

app.use(cors({origin: '*'}));

app.get("/reviews", function (req, res) {
  res.send(reviews);
});

app.post("/reviews", function (req, res) {
  if (req.body.name && req.body.experience) {
    reviews.unshift({
      name: req.body.name,
      experience: req.body.experience,
      id: uuidv4(),
    });
    res.send(reviews);
  } else {
    res.sendStatus(405);
  }
});

app.listen(4545);

const reviews = [
  {
    name: "Mr.Coader",
    experience: "great",
    id: "90aa9951-e8f8-4ce4-9efb-e87b411d829e",
  },
  {
    name: "Shantanu",
    experience: "average",
    id: "b40da0f9-3c97-4237-8516-3c2a84c56e18",
  },
];
