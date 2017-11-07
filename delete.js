const firebase = require('firebase')

firebase.initializeApp({
  databaseURL: <your database url>
})

firebase.database().ref('star/').child('student2').remove()


