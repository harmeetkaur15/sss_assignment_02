const firebase = require('firebase')

firebase.initializeApp({
  databaseURL: <your database url>
})

firebase.database().ref('star/').child('student1').update({
    name: 'sapna',
    section: 'one'
   });
 


