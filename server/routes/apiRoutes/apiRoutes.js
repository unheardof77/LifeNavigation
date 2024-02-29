const router = require("express").Router();
const User = require("../../models/User");

router.get("/", (req, res)=>{
    res.json("hello world success")
});

//return all users
router.get("/users", async (req, res) =>{
    try{
        const userData = await User.find();
        res.json(userData);
    } catch(err){
        res.status(500).json(err)
    }
})

//create new user and return the new user
router.post("/user", async (req, res) =>{
    try{
        const newUser = await User.create({...req.body});
        res.status(200).json(newUser);
    } catch(err){
        res.status(500).json(err);
    }
})

//create new todo
router.post("/user/:userId/todo", async (req, res)=>{
    try{
        const userId = req.params.userId;
        const currentUser = User.findById(userId);
        
    } catch(erra){
        res.status(500).json(err);
    }
})

module.exports = router;