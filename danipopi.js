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

        artistsContainer.innerHTML = "";

        artistsSnapshot.forEach((doc) => {

            const artist = doc.data();

            const card = document.createElement("article");

            card.className = "artist-card";

            const countryFlag =
                artist.country?.toLowerCase() === "nigeria"
                    ? "🇳🇬"
                    : artist.country?.toLowerCase() === "ghana"
                    ? "🇬🇭"
                    : "🌍";

            card.innerHTML = `
                <div class="artist-image">

                    ${
                        artist.image
                            ? `<img src="${artist.image}" alt="${artist.name}">`
                            : `<span>${artist.name}</span>`
                    }

                    <button class="play-button">
                        ▶
                    </button>

                </div>

                <div class="artist-details">

                    <div>

                        <span class="country">
                            ${countryFlag} ${artist.country || ""}
                        </span>

                        <h3>${artist.name || "Unknown Artist"}</h3>

                    </div>

                    <span class="genre">
                        ${artist.genre || "Afrobeats"}
                    </span>

                </div>

                <p>
                    ${artist.bio || "A new voice on the African music scene."}
                </p>
            `;

            artistsContainer.appendChild(card);

        });

    } catch (error) {

        console.error("Error loading artists:", error);

        artistsContainer.innerHTML = `
            <p>Unable to load artists right now.</p>
        `;

    }
}

loadArtists();
