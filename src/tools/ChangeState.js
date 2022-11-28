/* eslint-disable no-unused-vars */
function isUser(iduser, idverify) {
    if (iduser !== idverify) {
        throw new Error('This action is not available for this user')
    }
}

function getReputation(date) {
    let rep = 5
    const delta = new Date(new Date() - date)

    if (delta.getMinutes() <= 30) {
        rep = 10
    }

    return rep
}

export default {
    ESPERANDO: (user, transaction) => {
        isUser(user.id, transaction.buyer.id);
        transaction.status = 'PAGADO';
    },
    PAGADO: (user, transaction) => {
        isUser(user.id, transaction.seller.id);
        transaction.status = 'CONFIRMADO';
        transaction.reputation = getReputation(transaction.createDate)
    },
    CONFIRMADO: (user, transaction) => {
        throw new Error('This transaction is already confirmed')
    },
    CANCELADO: (user, transaction) => {
        throw new Error('This transaction is already canceled')
    }
}