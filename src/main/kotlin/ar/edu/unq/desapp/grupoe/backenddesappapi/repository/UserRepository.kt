package ar.edu.unq.desapp.grupoe.backenddesappapi.repository

import ar.edu.unq.desapp.grupoe.backenddesappapi.model.User
import org.springframework.data.mongodb.repository.MongoRepository
import org.springframework.stereotype.Repository

@Repository()
interface UserRepository : MongoRepository<User, String> {
}