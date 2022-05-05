const UserSchema = require('../models/user-model')


function usersCreate(req,res){
    var user = new UserSchema(req.body);
    user.save(function(err){
        // if (err) res.json({message: "Creating a user failed."});
        // res.json({user: user});
        res.redirect("/users");
    });
}

function usersFindById(req, res){
    var id = req.params.id;
  
    UserSchema.findById({_id: id}, function(err, user){
      // if (err) res.json({message: 'There is not a user with that id.'});
      console.log(user)
      res.render("users/show", { user: user });
    });
  }

module.exports = {
    usersCreate: usersCreate,
    usersFindById: usersFindById,
}