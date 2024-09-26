import express from "express";
import { errorHandler } from "./interface/middleware/errorHandler";
import { bookRoutes } from "./interface/routes/bookRoutes";

const app = express();

app.use(express.json());
app.use("/v1", bookRoutes);
app.use(errorHandler);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
