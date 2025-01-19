class Greeter {
    constructor (){}

    trimmer(name){
        return name.trim()
    }

    capitalizer(name){
        return name[0].toUpperCase() + name.substring(1)
    }
    
}

module.exports = Greeter