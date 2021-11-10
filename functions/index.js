const functions = require("firebase-functions");
// Saves a message to the Firebase Realtime Database but sanitizes the text by removing swearwords.
// https://firebase.google.com/docs/functions/callable#web-version-8_1
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
