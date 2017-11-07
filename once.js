const firebase = require('firebase')

firebase.initializeApp({
  databaseURL: <your database url>
})

firebase.database().ref('star').once("value", data => {
      console.log(data.val())})

