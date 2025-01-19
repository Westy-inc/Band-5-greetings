class Greeter {
    constructor (){}

    greet(name){
        const nameTrimmed = this.trimmer(name)
        const nameFinal = this.capitalizer(nameTrimmed)
        const Message =  this.getMessages()
        const greeting = `${Message} ${nameFinal}`
        return console.log(greeting)
    }



    trimmer(name){
        return name.trim()
    }

    capitalizer(name){
        return name[0].toUpperCase() + name.substring(1).toLowerCase()
    }

    getCurrentTime(){
        const currentTime = new Date().toLocaleTimeString()
        return currentTime
      }
  

    getMessages(){
        const dayTime = "06:00:00"
        const eveningTime = "18:00:00"
        const nightTime = "22:00:00"
        const afternoonTime = "12:00:00"
        const currentTime = this.getCurrentTime()

        if (currentTime >= dayTime && currentTime < afternoonTime){
            const message = "Good morning" 
            return message
         }
         else if (currentTime >= afternoonTime && currentTime < eveningTime) {
            const message = "Good afternoon"
            return message
         }
         else if (currentTime >= eveningTime && currentTime < nightTime){
            const message = "Good evening" 
            return message
         }
         else{
            const message = "Good night"
            return message
         }
         
       }
}

const greeter = new Greeter

greeter.greet("joHn")

module.exports = Greeter