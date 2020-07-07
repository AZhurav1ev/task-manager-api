const express = require('express');
// to ensure, that mongoose is running
require('./src/db/mongoose');
const taskRouter = require('./src/routers/task');
const userRouter = require('./src/routers/user');

const app = express();
const port = process.env.PORT;

// automaticly parsing req obj from json
app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => console.log(`Server is running on port ${port}`));