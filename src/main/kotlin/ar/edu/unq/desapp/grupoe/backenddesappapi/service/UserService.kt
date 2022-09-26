package ar.edu.unq.desapp.grupoe.backenddesappapi.service

import ar.edu.unq.desapp.grupoe.backenddesappapi.model.User
import ar.edu.unq.desapp.grupoe.backenddesappapi.repository.UserRepository
import org.springframework.stereotype.Service

@Service
class UserService (private val userRepository: UserRepository){
    fun getAllUsers(): MutableList<User> = userRepository.findAll()
    fun saveUser(user: User) = userRepository.save(user)
    fun getUserById(id: String): User {
        return userRepository.findById(id).get()
    }
}