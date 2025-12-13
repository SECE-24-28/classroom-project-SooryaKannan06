const express=require("express");
const app=express();
const port=3000;

const productRouter=require("./src/routes/productRoutes");

app.use("/products",productRouter);

app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
});

module.exports=app;