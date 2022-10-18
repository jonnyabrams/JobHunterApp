import express from "express"
import cors from "cors"
import "dotenv/config"
import helmet from "helmet"


const app = express();
app.use(cors());
app.use(express.json());
app.use(helmet());

const port = process.env.PORT || 5000

app.listen(port, ()=>{
    console.log(`Listening to port ${port}...`);
})