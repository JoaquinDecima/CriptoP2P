package ar.edu.unq.desapp.grupoe.backenddesappapi.controller

import ar.edu.unq.desapp.grupoe.backenddesappapi.model.User
import ar.edu.unq.desapp.grupoe.backenddesappapi.repository.UserRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.*

@RequestMapping("/user")
@RestController
class UserController (private val userRepository: UserRepository){

    @GetMapping("/all")
    fun hello(): MutableList<User> {
        return this.userRepository.findAll()
    }

    @PostMapping("/register")
    fun register(@RequestBody user: User ) {
        this.userRepository.save(user)
    }

}