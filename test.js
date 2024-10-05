import express from "express";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import swaggerJson from "./swagger3.json" assert { type: "json" };
import router from "./apis/router.js";
const app = express();

const swaggerSpec = swaggerJSDoc(swaggerJson);

// Set up Swagger UI
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Sample GET API
app.get("/", (req, res) => {
  res.json({ status: 1, message: "done Successfully" });
});

app.post("/data", (req, res) => {
  try {
    const { data } = req.body;

    res.json({ status: 1, data });
  } catch (error) {
    console.log("error::", error);
    res.json({ status: 0, error });
  }
});

app.put("/update/:id", (req, res) => {
  try {
    const { id } = req.params;

    res.json({ status: 1, id });
  } catch (error) {
    console.log("error::", error);
    res.json({ status: 0, error });
  }
});

app.put("/delete/:id", (req, res) => {
  try {
    const { id } = req.params;

    res.json({ status: 1, id });
  } catch (error) {
    console.log("error::", error);
    res.json({ status: 0, error });
  }
});

app.use(router);

app.listen(3000, () => {
  console.log(`app is running on 3000`);
});
