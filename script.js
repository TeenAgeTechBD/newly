// Replace with your GitHub repo owner and repo name
const owner = 'SaimonIslamPrantik';
const repo = 'wallpapers';

// GitHub API URL for listing repository contents
const apiURL = `https://api.github.com/repos/${owner}/${repo}/contents/`;

// Allowed image extensions
const allowedExtensions = ['jpg', 'jpeg', 'png', 'webp'];

// Fetch repository contents
fetch(apiURL)
    .then(response => {
        if (!response.ok) throw new Error(`Error fetching repo: ${response.statusText}`);
        return response.json();
    })
    .then(files => {
        // Filter for image files
        const imageFiles = files.filter(file => {
            const fileExtension = file.name.split('.').pop().toLowerCase();
            return allowedExtensions.includes(fileExtension);
        });

        if (imageFiles.length > 0) {
            // Pick a random image
            const randomImage = imageFiles[Math.floor(Math.random() * imageFiles.length)];

            // Display the random image
            const img = document.createElement('img');
            img.src = randomImage.download_url;
            img.alt = 'Random Wallpaper';
            document.body.appendChild(img);
        } else {
            alert('No images found in the repository.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred while fetching images.');
    });
