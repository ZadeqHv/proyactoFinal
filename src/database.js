import mongoose from "mongoose";
mongoose.set('strictQuery', true);

mongoose.connect('mongodb+srv://Zadeq:mQfM7_uFjffJLR6@cluste1.ikfe0hd.mongodb.net/?retryWrites=true&w=majority', {useNewUrlParser: true,  useUnifiedTopology: true ,})

.then(db => console.log("db connected"))
.catch(error=> console.log("error"))
