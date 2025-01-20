const owner = 'TeenAgeTechBD';
const repo = 'wallpapers';

const apiURL = `https://api.github.com/repos/${owner}/${repo}/contents/`;

const allowedExtensions = ['jpg', 'jpeg', 'png', 'webp'];

fetch(apiURL)
    .then(response => {
        if (!response.ok) throw new Error(`Error fetching repo: ${response.statusText}`);
        return response.json();
    })
    .then(files => {
        const imageFiles = files.filter(file => {
            const fileExtension = file.name.split('.').pop().toLowerCase();
            return allowedExtensions.includes(fileExtension);
        });

        if (imageFiles.length > 0) {
            const randomImage = imageFiles[Math.floor(Math.random() * imageFiles.length)];
            const img = document.createElement('img');
            img.src = randomImage.download_url;
            img.alt = 'Loading...';
            document.body.appendChild(img);
        } else {
            alert('No images found in the repository.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred while fetching images.');
    });
