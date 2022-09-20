import mongoose,{Document,Schema} from "mongoose"
 

export interface TodosModel extends Document{
    // _id:ObjectId,
    id:string,
    title:string
}


const todoSchema= new Schema({
    // _id:{type:Object,required:true},
    id:{type:String,required:true},
    title:{type:String,required:true}
})


 const Todo=mongoose.model<TodosModel>("todo",todoSchema)

 export default Todo