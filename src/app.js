import Express from "express";
import morgan from "morgan";
import pkg from "../package.json"
import { createRoles } from "./libs/inicialSetups";
import authRoutes from "./routes/auth.routes";
import productsRoutes from "./routes/products.routes"
import userRout from "./routes/user.routes";

const app = Express();
createRoles();



app.set('pkg', pkg)

app.use(Express.json());

app.use(morgan('dev'));


app.get('/', (req, res) => {
    res.json({
        author: app.get('pkg').author,
        description: app.get('pkg').description,
        version: app.get('pkg').version
    })
})


app.use('/api/products', productsRoutes)
app.use('/api/auth', authRoutes)
app.use('/api/users', userRout)

export default app; 