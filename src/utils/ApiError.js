//standardise api error and response(check out node.js api error documentation )
//overwrite the methods to gain more control over error handling

class ApiError extends Error{
    constructor(
        statusCode,
        message="Something went wrong",
        error=[],
        stack=""
    ){
        super(message)  //super is used to overwrite
        this.statusCode= statusCode
        this.data= null //(read the documentation on this)
        this.message= message
        this.success= false;
        this.errors=errors

        //written in production grade    --stacktrace properly trace error
        if(stack){
            this.stack = stack
        }else{
            Error.captureStackTrace(this,this.constructor)
        }
    }
}

export {ApiError}