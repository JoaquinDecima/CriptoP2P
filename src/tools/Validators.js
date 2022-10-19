export function validatePassword(password){
    if (! /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{6,}$/.test(password)){
        throw new Error("Invalid Password");
    }
}