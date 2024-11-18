import jwt from "jsonwebtoken"

export function TokenVerification(token){
    if(!token){
        return{
            valid: false,
            message: "Error. Token don't exist"
        }
    }
    
    const decoded = jwt.verify(token, process.env.JWT_KEY);

    if(!decoded){
        return{
            valid: false,
            message: "Error. Invalid Token"
        }
   }
   return{
        valid: true,
        message: "Valid Token"
   }
}

export function CreateToken(id){
    const token = jwt.sign({ userId: id}, process.env.JWT_KEY, {
        expiresIn: '8h',
      });
    return token;
}