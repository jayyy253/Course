// Function to update progress percentage
function updateProgress() {
    // Get total number of modules
    const totalModules = 11; // Update this if the number of modules changes
    // Calculate progress percentage
    const currentModule = parseInt(window.location.pathname.match(/\d+/)[0]); // Get current module number from URL
    const progressPercentage = Math.floor((currentModule / totalModules) * 100);
    // Display progress percentage
    document.getElementById('progressPercentage').textContent = `Progress: ${progressPercentage}%`;
}

// Update progress when the page loads
updateProgress();