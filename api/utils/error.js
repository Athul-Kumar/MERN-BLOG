
export const errorHandler=(statusCode, message)=>{
    const error = new Error();
    error.statusCode = statusCode;
    error.message = message;
    return error;

};

// created js error constructor to handle errors that spotted by developer