import express, { Request, Response } from "express";
import authRouter from "./routes/auth.route";

const app = express();
const port = 3000;

app.use(express.json());

/*app.use(cookieParser());
app.use(bodyParser.json());
//app.use(/., cors());*/
//app.use(bodyParser.urlencoded({ extended: true }));*/

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

app.use("/api", authRouter);

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
