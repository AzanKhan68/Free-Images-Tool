document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('prompt-form');
    const gallery = document.getElementById('gallery');
    const generateBtn = document.getElementById('generate-btn');
    const promptInput = document.getElementById('prompt');
    
    const sampleImages = [
        'https://images.unsplash.com/photo-1509624776920-0fac24a9dfda',
        'https://images.unsplash.com/photo-1506260408121-e353d10b87c7',
        'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05',
        'https://images.unsplash.com/photo-1546587348-d12660c30c50'
    ];
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const prompt = promptInput.value.trim();
        
        if (!prompt) {
            alert('Please enter a description');
            return;
        }
        
        generateBtn.disabled = true;
        generateBtn.innerHTML = '<div class="spinner"></div> Generating...';
        
        gallery.innerHTML = `
            <div class="loading">
                <div class="spinner"></div>
                <p>Creating magic from your words...</p>
            </div>
        `;
        
        setTimeout(() => {
            generateImages(prompt);
            generateBtn.disabled = false;
            generateBtn.innerHTML = '<i class="fas fa-magic"></i> Generate Image';
        }, 2000);
    });
    
    function generateImages(prompt) {
        gallery.innerHTML = '';
        
        for (let i = 0; i < 4; i++) {
            const imgUrl = `${sampleImages[i]}?auto=format&fit=crop&w=600&h=600&q=80&${Math.random()}`;
            
            const imageCard = document.createElement('div');
            imageCard.className = 'image-card';
            imageCard.innerHTML = `
                <div class="image-container">
                    <img src="${imgUrl}" alt="Generated image">
                </div>
                <div class="card-footer">
                    <button class="download-btn" onclick="downloadImage('${imgUrl}')">
                        <i class="fas fa-download"></i> Download
                    </button>
                </div>
            `;
            
            gallery.appendChild(imageCard);
        }
    }
    
    window.downloadImage = function(url) {
        const link = document.createElement('a');
        link.href = url;
        link.download = 'azan-image.jpg';
        link.click();
    };
});
