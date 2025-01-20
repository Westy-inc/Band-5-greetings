const readline = require('node:readline');
class Greeter {
    constructor (){}


    inputUser(){
    const { stdin: input, stdout: output } = require('node:process');
    const rl = readline.createInterface({input, output})
    rl.question('what is your name friend? ', (answer)=>{
        this.inputValidator(answer , rl)
        rl.close();
    })}

    greet(name){
        const nameTrimmed = this.trimmer(name)
        const nameFinal = this.capitalizer(nameTrimmed)
        const Message =  this.getMessages()
        const greeting = `${Message} ${nameFinal}`
        return console.log(greeting)
    }

    inputValidator(name , rl){
        const nameTrim = this.trimmer(name)
        if (nameTrim === "") {
            console.log("Oops you forgot to enter anything");
            rl.close()
            this.inputUser();
        } else if (nameTrim.length < 2) {
            console.log("That's too short of a name");
            rl.close()
            this.inputUser();
        } else if (/\d/.test(nameTrim)) { // Check for numbers
            console.log("Your name cannot contain numbers.");
            rl.close()
            this.inputUser();
        } else {
            rl.close()
            this.greet(name)
        }

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

greeter.inputUser()

module.exports = Greeter