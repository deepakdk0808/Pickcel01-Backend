import * as mongoose from "mongoose"

const uri:string="mongodb+srv://deepak:deep_123@cluster0.fyotr.mongodb.net/1stproject_backend?retryWrites=true&w=majority"


const connect=():void=>{
    mongoose.connect(uri,(err:any)=>{
        if(err){
            console.log(err.message)
        }
        else{
            console.log("connection succesful")
        }
    })
}

export default connect