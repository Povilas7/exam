
module.exports = {
    check: (req, res, next) => {
        let {name, age, email, password} = req.body
        function error(status, msg){
            return res.send({error:status, messages: msg})
        }
        if(name.length < 3){
            return error(true, 'Vardas per trumpas')
        }
        if(name.length > 15){
            return error(true, 'Vardas per ilgas')
        }
        if(!/\d/.test(age)){
            return error(true, 'Amžius turi būti numeris')
        }
        if(password.length < 7){
            return error(true, 'Slaptažodis per trumpas minimum 7 simboliai')
        }
        if(!email.includes('@')){
            return error(true, 'El.paštas neturi simbolio @')
        }
        next()
    },
}