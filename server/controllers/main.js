const userDb = require('../schema/schema')

module.exports = {
    upload: (req, res) => {
        let {name, age, email, password} = req.body

        let user = new userDb
        user.name = name
        user.age = age
        user.email = email
        user.password = password
        user.save().then(() => {
            res.send({error: false, messages:"Vartotojas sukurtas"})
        }).catch(e => {
            res.send({error: true, message: e})
        })

    },

}