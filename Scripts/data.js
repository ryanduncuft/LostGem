/**
 * @typedef {Object} TrackMetadata
 * @property {string} title - The title of the track.
 * @property {string} link - The relative path to the track's HTML page.
 */

/**
 * @typedef {Object} AlbumCredits
 * @property {string[]} artists - An array of artists involved in the album.
 * @property {string[]} producers - An array of producers who worked on the album.
 */

/**
 * @typedef {Object} DiscographyItem
 * @property {string} id - A unique identifier for the album or track (e.g., "healing-wounds", "scars-ft-emilyn").
 * @property {"album"|"album-track"|"single"} type - The type of discography item (album, album-track, or single).
 * @property {string} title - The full title of the album or track.
 * @property {string} artist - The main artist of the album or track.
 * @property {string} releaseDate - The release date in YYYY-MM-DD format (for sorting).
 * @property {string} displayDate - The release date in a human-readable format (e.g., "24th May 2024").
 * @property {string} image - The relative path to the album or track cover image from the project root.
 * @property {string} description - A brief text description of the album or track.
 * @property {string} listenLink - An external link to stream or listen to the album/track (e.g., DistroKid, Spotify).
 * @property {string} pageLink - The relative path to the item's dedicated HTML page.
 * @property {string} [genre] - The musical genre (for tracks).
 * @property {string} [duration] - The duration of the track in MM:SS format (for tracks).
 * @property {string} [writer] - The writer(s) of the track (for tracks).
 * @property {string} [producer] - The producer(s) of the track (for tracks). If multiple, separate with commas.
 * @property {string} [lyrics] - HTML string containing the lyrics of the track (for tracks).
 * @property {string} [descriptionHtml] - HTML string containing a more detailed description (for tracks/albums).
 * @property {TrackMetadata[]} [tracks] - An array of objects for each track in an album, including its title and link.
 * @property {AlbumCredits} [credits] - An object containing arrays of artists and producers involved in the album.
 */

/**
 * @type {DiscographyItem[]}
 */

export const releasesData = [
    {
        id: "true-romance",
        type: "single",
        title: "True Romance",
        artist: "LostGem and Ryze Tha Kidd",
        releaseDate: "2025-02-14",
        displayDate: "14th February 2025",
        image: "Images/Discography/true-romance.jpg",
        description: "Dive deep into the bittersweet emotions of love and healing with “True Romance,” the latest single from LostGem’s upcoming collaborative album with Ryze Tha Kidd, set for release in Summer 2025. This track weaves heartfelt verses from both artists, exploring the struggles of letting go of past pain while finding comfort in a new connection. With its soulful lyrics and captivating melody, “True Romance” captures the tender balance between needing a friend and the unexpected spark of genuine love. Prepare to be moved by this introspective journey of rediscovery and emotional growth.",
        listenLink: "https://distrokid.com/hyperfollow/lostgem/true-romance-feat-ryze-tha-kidd",
        pageLink: "Discography/Singles/true-romance.html",
        genre: "Trap",
        duration: "2.49",
        writer: "Ryan Duncuft",
        producer: "Ryze Tha Kidd",
        lyrics: "<p class=\"lyrics\">(Verse - Ryze Tha Kidd)<br>We wonder where we went wrong<br>What words left unsaid, what secrets lay<br>Your pictures in my head, I know it's been so long<br>As the day goes by, the pain starts to fade<br><br>(Hook - LostGem)<br>Honestly I just need a friend<br>I won't pretend, I don't want to fall in love again<br>But he's holding my hand<br>And it feels like true romance<br><br>(Verse - LostGem)<br>I been hurt to many times<br>Swore to many lies would kill me<br>But I met a nice guy<br>He held my hand and it healed me<br>It healed me<br><br>(Hook - LostGem)<br>Honestly I just need a friend<br>I won't pretend, I don't want to fall in love again<br>But he's holding my hand<br>And it feels like true romance<br>Honestly I just need a friend<br>I won't pretend, I don't want to fall in love again<br>But he's holding my hand<br>And it feels like true romance</p>",
        descriptionHtml: "<p>Dive deep into the bittersweet emotions of love and healing with “True Romance,” the latest single from LostGem’s upcoming collaborative album with Ryze Tha Kidd, set for release in Summer 2025. This track weaves heartfelt verses from both artists, exploring the struggles of letting go of past pain while finding comfort in a new connection. With its soulful lyrics and captivating melody, “True Romance” captures the tender balance between needing a friend and the unexpected spark of genuine love. Prepare to be moved by this introspective journey of rediscovery and emotional growth.</p>"
    },
    {
        id: "perfect",
        type: "single",
        title: "Perfect",
        artist: "LostGem and Ryze Tha Kidd",
        releaseDate: "2024-09-27",
        displayDate: "27th September 2024",
        image: "Images/Discography/perfect.jpg",
        description: "Unveiling raw emotion and vulnerability, “Perfect” is the debut single from my upcoming album “What Is Love?” slated for a summer 2025 release. Featuring Ryze Tha Kidd, this track dives deep into the complexities of self-worth and love, blending heartfelt lyrics with a catchy beat that stays with you long after the music stops. With its powerful message of striving for worth in the face of imperfection, “Perfect” sets the tone for an album that promises to explore the many shades of love and longing. Get ready for a sonic journey that’s as introspective as it is unforgettable.",
        listenLink: "https://distrokid.com/hyperfollow/lostgem/perfect-feat-ryze-tha-kidd",
        pageLink: "Discography/Singles/Perfect.html",
        genre: "Trap",
        duration: "3.05",
        writer: "Ryan Duncuft, Sophie Christoforou",
        producer: "Ryze Tha Kidd",
        lyrics: "<p class=\"lyrics\">(I know I'm not perfect)<br>(I'm trynna be worth it)<br><br>(Hook - LostGem) I know I'm not perfect<br>I'm trynna be worth it<br>I'm trynna give everything, I have left<br>I know I'm not perfect<br>But I'm trynna be worth it<br>I'm trynna give everything<br>Because I'm used to nothing<br><br>(Verse - LostGem) Since day one, I had you in my heart<br>I was trying to do everything for us, I was never enough<br>Now I gotta do it for myself too<br>Even if that means I can't have you<br><br>(Hook - LostGem)<br>I know I'm not perfect<br>I'm trynna be worth it<br>I'm trynna give everything, I have left<br>I know I'm not perfect<br>But I'm trynna be worth it<br>I'm trynna give everything<br>Because I'm used to nothing<br><br>(Verse - Ryze Tha Kidd) I tried to move on, but you're all I see<br>Every corner I turn, you're haunting me<br>I told you I'm not perfect<br>Girl I wanna reconnect<br>Got me reminiscing, I'm trynna reflect<br><br>(Hook - LostGem) I know I'm not perfect (Know I'm not perfect)<br>I'm trynna be worth it<br>I'm trynna give everything, I have left (That I have left)<br>I know I'm not perfect<br>But I'm trynna be worth it<br>I'm trynna give everything<br>Because I'm used to nothing (To nothing)<br></p>",
        descriptionHtml: "<p>Unveiling raw emotion and vulnerability, “Perfect” is the debut single from my upcoming album “What Is Love?” slated for a summer 2025 release. Featuring Ryze Tha Kidd, this track dives deep into the complexities of self-worth and love, blending heartfelt lyrics with a catchy beat that stays with you long after the music stops. With its powerful message of striving for worth in the face of imperfection, “Perfect” sets the tone for an album that promises to explore the many shades of love and longing. Get ready for a sonic journey that’s as introspective as it is unforgettable.</p>"
    }
];