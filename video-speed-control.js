// Video Speed Control Script
// Adds speed control sliders to all video elements on the page

document.addEventListener('DOMContentLoaded', function() {
    // Find all video elements
    const videos = document.querySelectorAll('video');
    
    videos.forEach(function(video) {
        // Check if this video uses compilation.mp4 (which is already 2x speed)
        const source = video.querySelector('source');
        const isCompilation = source && source.src.includes('compilation.mp4');
        const displayMultiplier = isCompilation ? 2 : 1;
        
        // Create a container for the speed control
        const speedControlContainer = document.createElement('div');
        speedControlContainer.className = 'video-speed-control';
        
        // Create label
        const label = document.createElement('label');
        label.textContent = 'Speed: ';
        label.className = 'speed-label';
        
        // Create slider input
        const slider = document.createElement('input');
        slider.type = 'range';
        slider.min = '0.25';
        slider.max = '2';
        slider.step = '0.25';
        slider.value = '1';
        slider.className = 'speed-slider';
        
        // Create value display
        const valueDisplay = document.createElement('span');
        valueDisplay.textContent = (1 * displayMultiplier) + 'x';
        valueDisplay.className = 'speed-value';
        
        // Add event listener to update video playback rate
        slider.addEventListener('input', function() {
            video.playbackRate = parseFloat(slider.value);
            // For compilation.mp4, display 2x the actual speed since the video is already 2x
            valueDisplay.textContent = (parseFloat(slider.value) * displayMultiplier) + 'x';
        });
        
        // Assemble the control elements
        label.appendChild(slider);
        label.appendChild(valueDisplay);
        speedControlContainer.appendChild(label);
        
        // Insert the speed control after the video element
        video.parentNode.insertBefore(speedControlContainer, video.nextSibling);
    });
});
