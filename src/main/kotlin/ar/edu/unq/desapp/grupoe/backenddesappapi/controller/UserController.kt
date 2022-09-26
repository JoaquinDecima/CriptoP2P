package ar.edu.unq.desapp.grupoe.backenddesappapi.controller

import ar.edu.unq.desapp.grupoe.backenddesappapi.model.User
import ar.edu.unq.desapp.grupoe.backenddesappapi.service.UserService
import org.springframework.web.bind.annotation.*

@RequestMapping("/user")
@RestController
class UserController (private val userService: UserService) {

    @GetMapping("/all")
    fun hello(): MutableList<User> {
       return this.userService.getAllUsers()
    }

    @PostMapping("/register")
    fun register(@RequestBody user: User ) {
        this.userService.saveUser(user)
    }

}