const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const stripe = require("stripe")(process.env.STRIPE_SECRET_TEST);
const userRoutes = require("./routes/user.routes");
const adminRoutes = require("./routes/admin.routes");
const postUserRoutes = require("./routes/postUser.routes");
const postAdminRoutes = require("./routes/postAdmin.routes");
const eventAdminRoutes = require("./routes/eventAdmin.routes");
const bonPlanAdminRoutes = require("./routes/bonPlanAdmin.routes");
const reservationUserRoutes = require("./routes/reservationUser.routes");
const planningAdminRoutes = require("./routes/planningAdmin.routes");
const noteUserRoutes = require("./routes/noteUser.routes");
const PayementRoutes = require("./routes/payement.routes");
require("dotenv").config({ path: "./config/.env" });
require("./config/db");
const {
  checkUser,
  requireAuth,
  payement,
} = require("./middleware/auth.middleware");
const {
  checkAdmin,
  requireAuthAdmin,
} = require("./middleware/authAdmin.middleware");
const cors = require("cors");
const app = express();

app.use(
  cors({
    origin: (origin, callback) => callback(null, true),
    credentials: true,
    allowedHeaders: ["sessionId", "Content-Type"],
    exposedHeaders: ["sessionId"],
    methods: "GET, HEAD, PUT, PATCH , POST, DELETE",
    preflightContinue: false,
  })
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

// jwt //
app.get("*", checkUser);
app.get("*", checkAdmin);
app.get("/jwtid", requireAuth, (req, res) => {
  res.status(200).send(res.locals.user._id);
});
app.get("/adminjwtid", requireAuthAdmin, (req, res) => {
  res.status(200).send(res.locals.admin._id);
});
app.post("/payement", payement);

//routes//
app.use("/api/user", userRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/postUser", postUserRoutes);
app.use("/api/postAdmin", postAdminRoutes);
app.use("/api/eventAdmin", eventAdminRoutes);
app.use("/api/bonPlanAdmin", bonPlanAdminRoutes);
app.use("/api/reservationUser", reservationUserRoutes);
app.use("/api/planningAdmin", planningAdminRoutes);
app.use("/api/noteUser", noteUserRoutes);
app.use("/api/payement", PayementRoutes);

//server //
app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});
