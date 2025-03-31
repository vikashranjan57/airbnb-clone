class ExpressError extends Error {
    constructor(statusCode,message){
        super();
        this.message=message;
        this.statusCode=this.statusCode;
    }
}

module.exports=ExpressError;