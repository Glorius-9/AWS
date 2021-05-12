let mongoose = require('mongoose'),
  express = require('express'),
  bcrypt = require("bcrypt");
  router = express.Router();

// User Model
const UserSchema = require('../models/Users');
const authenticateUser = require("../middlewares/authenticateUser");

// CREATE User
router.post("/createUser", async(req, res) => {
   const { pseudo, email, password } = req.body;

   if (!pseudo || !email || !password) {
    res.send("remplir tous les champs");
    return;
   }

   const doesUserExitsAlreay = await UserSchema.findOne({ email });

   if (doesUserExitsAlreay) {
       res.send("l'utilisateur existe deja!");
       return;
   }
   const hashedPassword = await bcrypt.hash(password, 12);
   const nouveau = new UserSchema({ pseudo, email, password: hashedPassword});
   console.log(nouveau);
   nouveau
        .save()
        .then(() => {
            res.redirect('http://localhost:3000/Login');
            return;
        })
        .catch((err) => console.log(err));
      });

      
router.get("/", authenticateUser, (req, res) => {
    res.render("/", { UserSchema: req.session.UserSchema });
});

//login
router.post("/Login", async(req, res) => {
    const { pseudo, password } = req.body;

    if (!pseudo || !password) {
        res.send("veillez remplir les champs!");
        return;
    }

    const UserExits = await UserSchema.findOne({ pseudo });

    if (!UserExits) {
        res.send("pass ou pseudo incorrect!");
        return;
    }

    const doesPasswordMatch = await bcrypt.compare(
        password,
        UserExits.password
    );

    if (!doesPasswordMatch) {
        res.send("pass ou pseudo incorrect!");
        return;
    }
  //   req.session.user = {
  //     pseudo,
  // };
    res.redirect('http://localhost:3000/Home');
    res.redirect('https://www.google.fr');
  })


// READ User
router.route('/listUser').get((req, res) => {
    UserSchema.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

router.get("/logout", authenticateUser, (req, res) => {
  req.session.Users = null;
  //res.redirect("/login");
  console.log("logged out");
});


// Get Single Student
router.route('/editUser/:id').get((req, res) => {
    UserSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update Student
router.route('/updateUser/:id').put((req, res, next) => {
    UserSchema.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data)
      console.log('user updated successfully !')
    }
  })
})

// Delete Student
router.route('/deleteUser/:id').delete((req, res, next) => {
    UserSchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = router;