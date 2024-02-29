const router = require("express").Router();

router.get("/", (req, res)=>{
    res.json("hello world success")
});

module.exports = router;