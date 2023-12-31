document.addEventListener('DOMContentLoaded', function() {
    // Fetch and display projects from GitHub
    fetchProjects();

    // Other dynamic functionalities can be added here
});

function fetchProjects() {
    // Replace with your GitHub API endpoint
    const githubApi = 'https://api.github.com/users/yourUsername/repos';

    fetch(githubApi)
    .then(response => response.json())
    .then(data => {
        const projectsContainer = document.getElementById('projects');
        data.forEach(project => {
            const projectCard = `<div class="project">
                                    <h3>${project.name}</h3>
                                    <p>${project.description}</p>
                                    <a href="${project.html_url}" target="_blank">View Project</a>
                                 </div>`;
            projectsContainer.innerHTML += projectCard;
        });
    })
    .catch(error => console.error('Error fetching projects:', error));
}
