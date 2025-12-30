function getUser(cb) {
    setTimeout(() => {
        console.log("User fetched")
        cb(null, { id: 1, name: "Sujit" })
    }, 1000)
}

function getOrders(userId, cb) {
    setTimeout(() => {
        console.log("Orders fetched");
        cb(null, ["order1", "order2"])
    }, 1000)
}

function getPayments(cb) {
    setTimeout(() => {
        console.log("Payments fetched");
        cb(null, ["payment1"])
    }, 1000)
}

//callback hell or pyramid of doom

getUser((err, user) => {
    if (err) return console.error(err)
    getOrders(user.id, (err, orders) => {
        if (err) return console.error(err)
        getPayments((err, payments) => {
            if (err) return console.error(err)
            console.log({ user, orders, payments })
        })
    }) 
})



