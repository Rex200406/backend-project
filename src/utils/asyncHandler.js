//1.using promises production grade code

const asyncHandler=(requestHandler)=>{
    return (req,res,next)=>{
        Promise.resolve(requestHandler(req,res,next)).catch((err)=>next(err))
    }
}


export {asyncHandler}

/*const asyncHandler=()=>{}
const asyncHandler=(func)=>{()=>{}}
const asyncHandler=(func)=>async()=>{}*/

/*//2. wrapperfunction to use everywhere
const asyncHandler=(fn)=>async(req,res,next)=>{
    try {
        await fn(req,res,next)
    } catch (error) {
        res.status(err.code||500).json({
            success: false,
            message: err.message
        }) //json response
    }
}*/


//standardise api error and response(check out node.js api error documentation )