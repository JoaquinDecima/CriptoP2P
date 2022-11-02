export function validatePassword(password){
    if (! /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{6,}$/.test(password)){
        throw new Error("Invalid format Password");
    }
    return password;
}

export function validateEmail(email){
    if (! /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
        throw new Error("Invalid format Email");
    }
    return email;
}

export function validateCvu(cvu){
    if (! /^\d{22}$/.test(cvu)){
        throw new Error("Invalid format CVU");
    }
    return cvu;
}

export function validateWallet(wallet){
    if (! /^\d{8}$/.test(wallet)){
        throw new Error("Invalid format Wallet");
    }
    return wallet;
}

export function validateName(name){
    if (! /^[a-zA-Z]{3,30}$/.test(name)){
        throw new Error("Invalid format Name");
    }
    return name;
}

export function validateLastName(lastname){
    if (! /^[a-zA-Z]{3,30}$/.test(lastname)){
        throw new Error("Invalid format Lastname");
    }
    return lastname;
}

export function validateAddress(address){
    if (! /^[A-Za-z0-9 -,]{3,30}$/gm.test(address)){
        throw new Error("Invalid format Address");
    }
    return address;
}

export function validateOperation(operation){
    if (! /^(COMPRA|VENTA)$/.test(operation)){
        throw new Error("Invalid format Operation");
    }
    return operation;
}
