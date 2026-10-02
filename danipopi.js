import { db } from "./firebase.js";

import {
    collection,
    getDocs
} from "https://www.gstatic.com/firebasejs/12.3.0/firebase-firestore.js";

const artistsContainer = document.getElementById("artists-container");

async function loadArtists() {
    try {
        const artistsSnapshot = await getDocs(
            collection(db, "artists")
        );

        artistsSnapshot.forEach((doc) => {
            const artist = doc.data();

            const card = document.createElement("div");

            card.innerHTML = `
                <h3>${artist.name}</h3>
                <p>${artist.country} • ${artist.genre}</p>
                <p>${artist.bio}</p>
            `;

            artistsContainer.appendChild(card);
        });

    } catch (error) {
        console.error("Error loading artists:", error);
    }
}

loadArtists();
