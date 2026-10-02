import { initializeApp } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-app.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-firestore.js";


const firebaseConfig = {

    apiKey: "AIzaSyBsJGcGiE2MYqoAJIh99ASiJZHnjacvUYo",

    authDomain: "afro-pulse.firebaseapp.com",

    projectId: "afro-pulse",

    storageBucket: "afro-pulse.firebasestorage.app",

    messagingSenderId: "906434113819",

    appId: "1:906434113819:web:f7747576e55420af9363be",

    measurementId: "G-H24SGSR8GL"

};


const app = initializeApp(firebaseConfig);

const db = getFirestore(app);


export { db };
