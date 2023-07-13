import express from "express";
import cors from "cors";
import mongoose from "mongoose";
const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/employeeData", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("DB connected")
}).catch((error) => {
    console.log("Error connecting to database:", error)
})

const userSchema = new mongoose.Schema({
    empname : String,
    birthDate : String,
    joiningDate : String

})

const User = new mongoose.model("User", userSchema)

// Middleware function to check if user is logged in
// const isLoggedIn = (req, res, next) => {
//     if (req.session && req.session.user) {
//       // User is logged in
//       next();
//     } else {
//       // User is not logged in
//       res.redirect("/login");
//     }
//   };
  

//routes

// app.post("/fileUploader", async (req, res) => {
//     try {
//       const users = await User.find();
//       const userData = users.map(user => ({
//         empname: user.empname,
//         birthDate: user.birthDate,
//         joiningDate: user.joiningDate
//       }));
      
//       res.send(userData);
//     } catch (error) {
//       res.status(500).send({ message: "Error retrieving data from the database" });
//     }
//   });

app.post("/fileUploader", async (req, res) => {
    const { empname, birthDate, joiningDate } = req.body;
  
    try {
      const newUser = new User({
        empname,
        birthDate,
        joiningDate
      });
      await newUser.save();
      res.send({ message: "Successfully stored" });
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  

    
    // try {
    //   const users = await User.find();
    //   const userData = users.map(user => ({
    //     empname: user.empname,
    //     birthDate: user.birthDate,
    //     joiningDate: user.joiningDate
    //   }));
    //   res.send(userData);
    //   console.log("Data retrieved from the database:", userData);
    // } catch (error) {
    //   console.error("Error retrieving data from the database:", error);
    // }
  });

  const signupSchema = new mongoose.Schema({
    username : String,
    email : String,
    password : String

})

const newsignup = new mongoose.model("signup", signupSchema)
app.post("/", async (req, res) => {
    const { username, password } = req.body;
  
    try {
      const user = await newsignup.findOne({ username });
  
      if (user) {
        if (password === user.password) {
          res.send({ message: "Login successful", user });
        } else {
          res.send({ message: "Password incorrect" });
        }
      } else {
        res.send({ message: "User not found" });
      }
    } catch (err) {
      res.send({ message: err.message });
    }
  });


app.post("/signUp", async (req, res) => {
    const { username, email, password } = req.body;
  
    try {
        const user = await newsignup.findOne({
           email: email });
    
        if (user) {
          res.send({ message: "User already registered" });
        } else {
      const newSignUp = new newsignup({
        username,
        email,
        password
      });
      await newSignUp.save();
      res.send({ message: "Signed up successfully" });
    }
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
});
  
app.listen(9002,() => {
    console.log("BE started at port 9002")
})