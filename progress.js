document.addEventListener('DOMContentLoaded', function() {
    // Get total number of modules
    var totalModules = 11;

    // Get completed modules from local storage or initialize to 0
    var completedModules = parseInt(localStorage.getItem('completedModules')) || 0;

    // Calculate progress percentage
    var progressPercentage = (completedModules / totalModules) * 100;

    // Update progress percentage element
    document.getElementById('progressPercentage').textContent = Math.round(progressPercentage) + '%';
});
