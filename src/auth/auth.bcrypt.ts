import {Injectable} from "@nestjs/common";


const bcrypt = require('bcrypt');
const saltRounds = 10;

@Injectable()
export class bcryptAuth {


    encrypt (password : string){
        return bcrypt
            .then(salt => {
                console.log('Salt: ', salt)
                return bcrypt.hash(password, salt)
            })
            .then(hash => {
                console.log('Hash: ', hash)
            })
            .catch(err => console.error(err.message))
    }

    validatePassword(hash, password){
        bcrypt
            .compare(password, hash)
            .then(res => {
                console.log(res) // return true
                return res;
            })
            .catch(err => console.error(err.message))

    }
}