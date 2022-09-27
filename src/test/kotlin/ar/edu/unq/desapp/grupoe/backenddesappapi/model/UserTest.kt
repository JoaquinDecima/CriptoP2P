package ar.edu.unq.desapp.grupoe.backenddesappapi.model

import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Test

class UserTest {

    private lateinit var userJuan: User
    @BeforeEach
    fun setUp() {
        this.userJuan = User("0001","Juan","Perez","JuanPerez","callefalsa123","1234","123456","aWallet")
    }

    @Test
    fun assertionTrueTest(){
        assert(true)
    }

    @Test
    fun userJuanWithId0001(){
        assert(userJuan.id == "0001")
    }
}