import userRepository from '../repositories/user.repositories.js'
import bcrypt from 'bcrypt'

async function createUserService(newUser) {
    const foundUserName = await userRepository.findUserByUsernameRepository(newUser.username)
    const foundUser = await userRepository.findUserByEmailRepository(newUser.email)
    if(foundUser) {
        throw new Error("User already exists!")
    }
    else if(foundUserName) {
        throw new Error("User already exists!")
    }
    const passHash = await bcrypt.hash(newUser.password, 10)
    const user = await userRepository.createUserRepository({...newUser, password: passHash})
    if(!user) throw new Error("Error creating User!")
    return user
}

export default {
    createUserService
}