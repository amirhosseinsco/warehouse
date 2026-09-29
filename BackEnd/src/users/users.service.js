import * as userRepository from "./users.repository.js"
import bcryptjs from "bcryptjs"

export async function GetUsersList() {
    return userRepository.GetList();
}

export async function GetUser(id) {
    return userRepository.Get(id);
}

export async function AddUser(data) {

    const hashedPassword = await bcryptjs.hash(data.password, 10)
    const userData = {name : data.name, email: data.email, password: hashedPassword}

    return userRepository.Create(userData);
}

export async function UpdateUser(userId, data) {

    const hashedPassword = await bcryptjs.hash(data.password, 10)
    const userData = {name : data.name, email: data.email, password: hashedPassword}

    return userRepository.Update(userId, userData);
}

export async function DeleteUser(id) {
    return userRepository.Delete(id);
}