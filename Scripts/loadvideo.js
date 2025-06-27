document.addEventListener('DOMContentLoaded', function() {
    const gistUrlBase = 'https://gist.githubusercontent.com/ryzethakiddofficial/a7bb229f51a7c51d21eeb21bbcc74038/raw/video_link-lostgem.json';
    const videoEmbedContainer = document.getElementById('video-embed-container');

    // Add a cache-busting parameter (current timestamp)
    const cacheBuster = new Date().getTime();
    const gistUrl = `${gistUrlBase}?${cacheBuster}`;

    fetch(gistUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            const videoUrl = data.youtube_embed_url;
            if (videoUrl) {
                videoEmbedContainer.innerHTML = `
                    <iframe src="${videoUrl}" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen>
                    </iframe>
                `;
            } else {
                videoEmbedContainer.innerHTML = "<p>Video URL not found in the Gist.</p>";
            }
        })
        .catch(error => {
            console.error('Error fetching video URL from Gist:', error);
            videoEmbedContainer.innerHTML = "<p>Failed to load video. Please try again later.</p>";
        });
});