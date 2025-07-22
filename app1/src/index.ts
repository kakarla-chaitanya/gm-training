import express from "express";
const app=express();
const port=5000;
app.get("/:msg", (req, res) => {
    let msg=req.params.msg;
    res.send(msg);
});
app.listen(port,()=>{
    console.log(`App running on port ${port}`);
})