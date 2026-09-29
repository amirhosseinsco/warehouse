import express from "express";
import cors from "cors";
import productsRoutes  from "./products/products.routes.js";
import usersRoutes  from "./users/users.routes.js";
import warehouseRoutes  from "./warehouses/warehouses.routes.js";

const app = express();

app.use(cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));

app.use(express.json());

app.use("/products", productsRoutes);
app.get("/", (req, res) => {
    res.json({
        message: "Hello"
      });
})
app.use("/users", usersRoutes);
app.use("/warehouse", warehouseRoutes);


export default app;