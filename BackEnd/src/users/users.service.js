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
    const userData = {
        username: data.username,
        email: data.email,
        password_hash: hashedPassword,

        first_name: data.first_name,
        last_name: data.last_name,

        phone: data.phone,
        postal_code: data.postal_code,
        avatar_url: data.avatar_url,
        employee_code: data.employee_code,
        job_title: data.job_title,
        department_id: data.department_id,
        status: data.status
    };

    return userRepository.Create(userData);
}

export async function UpdateUser(userId, data) {
    console.log(data);
    var hashedPassword
    if(data.password){
        hashedPassword = await bcryptjs.hash(data.password, 10)
        const userData = {
            username: data.username,
            email: data.email,
            password_hash: hashedPassword,
    
            first_name: data.first_name,
            last_name: data.last_name,
    
            phone: data.phone,
            postal_code: data.postal_code,
            avatar_url: data.avatar_url,
            employee_code: data.employee_code,
            job_title: data.job_title,
            department_id: data.department_id,
            status: data.status
        };
    }
    const userData = {
        username: data.username,
        email: data.email,
        password_hash: hashedPassword,

        first_name: data.first_name,
        last_name: data.last_name,

        phone: data.phone,
        postal_code: data.postal_code,
        avatar_url: data.avatar_url,
        employee_code: data.employee_code,
        job_title: data.job_title,
        department_id: data.department_id,
        status: data.status
    };
    console.log(userData);

    return userRepository.Update(userId, userData);
}

export async function DeleteUser(id) {
    return userRepository.Delete(id);
}