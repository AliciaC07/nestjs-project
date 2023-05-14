const bcrypt = require ('bcrypt');
const saltRounds = 10;
export class UserBcrytp {


    hashPassword(password: string){
        //console.log("Hached: ",hash);
        return bcrypt.hashSync(password, saltRounds);
    }

    validateHash(password: string, hash: string){
        //console.log("Verified: ", verified);
        return bcrypt.compareSync(password, hash);
    }

}