const mongoose = require("mongoose");

//Creates a new database to work with and connects to our database, which is hosted locally

mongoose.connect("mongodb://localhost:27017/birdieDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//Creates a new database to work with and connects to our database, which is hosted in the atlas cloud
// mongoose.connect(
//   "mongodb+srv://admin-michael:tanz18@cluster0.7yh7k.mongodb.net/birdieDB",
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   }
// );

const Cat = mongoose.model("Cat", { name: String });

const kitty = new Cat({ name: "Zildjian" });
kitty.save().then(() => console.log("meow"));

const productRequestSchema = new mongoose.Schema({
  id: Number,
  title: String,
  category: String,
  upvotes: Number,
  status: String,
  description: String,
  comments: [String],
});

const userSchema = new mongoose.Schema({
  id: Number,
  image: String,
  name: String,
  username: String,
  password: String,
});
