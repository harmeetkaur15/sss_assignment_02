const firebase = require('firebase')

firebase.initializeApp({
  databaseURL: <your database url>
})


firebase.database().ref('star').on("value", data => {
      console.log(data.val())})