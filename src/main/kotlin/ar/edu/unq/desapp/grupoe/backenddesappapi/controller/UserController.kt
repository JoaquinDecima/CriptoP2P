package ar.edu.unq.desapp.grupoe.backenddesappapi.controller

import ar.edu.unq.desapp.grupoe.backenddesappapi.model.User
import ar.edu.unq.desapp.grupoe.backenddesappapi.service.UserService
import org.springframework.web.bind.annotation.*

@RequestMapping("/api/user")
@RestController
class UserController (private val userService: UserService) {

    @GetMapping("/all")
    fun getAll(): MutableList<User> {
       return this.userService.getAllUsers()
    }

    @PostMapping("/register")
    fun register(@RequestBody user: User ) {
        this.userService.saveUser(user)
    }

    @GetMapping("/{id}")
    fun getUserById(@PathVariable id: String): User {
        return this.userService.getUserById(id)
    }

}