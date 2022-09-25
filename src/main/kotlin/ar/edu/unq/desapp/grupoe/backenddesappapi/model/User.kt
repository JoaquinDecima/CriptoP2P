package ar.edu.unq.desapp.grupoe.backenddesappapi.model

import org.springframework.data.annotation.Id

class User (
    @Id
    var id: String,
    val name: String,
    val lastname: String,
    val email: String,
    val address: String,
    val password: String,
    val mpcvu: String,
    val wallet: String
    ) {}