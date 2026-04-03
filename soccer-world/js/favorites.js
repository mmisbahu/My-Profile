// Favorites Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    loadFavorites();
});

function loadFavorites() {
    const favoriteTeams = SoccerAPI.getFavorites();
    const teamsContainer = document.getElementById('favoriteTeams');
    const fixturesContainer = document.getElementById('favoriteFixtures');
    const resultsContainer = document.getElementById('favoriteResults');

    if (favoriteTeams.length === 0) {
        return; // Keep default messages
    }

    // Display favorite teams
    teamsContainer.innerHTML = '<div class="leagues-grid" id="favoriteTeamsGrid"></div>';
    const teamsGrid = document.getElementById('favoriteTeamsGrid');

    // Mock team data - in real app, fetch from API
    const mockTeams = [
        { id: 50, name: 'Manchester City', logo: 'https://media.api-football.com/teams/50.png' },
        { id: 541, name: 'Real Madrid', logo: 'https://media.api-football.com/teams/541.png' },
        { id: 157, name: 'Bayern Munich', logo: 'https://media.api-football.com/teams/157.png' }
    ];

    const favoriteTeamData = mockTeams.filter(team => favoriteTeams.includes(team.id.toString()));

    teamsGrid.innerHTML = favoriteTeamData.map(team => `
        <div class="league-card">
            <img src="${team.logo}" alt="${team.name}" style="width: 60px; height: 60px; margin-bottom: 10px;">
            <h5>${team.name}</h5>
            <button class="btn btn-sm btn-danger mt-2" onclick="removeFromFavorites(${team.id})">
                <i class="fas fa-heart-broken"></i> Remove
            </button>
        </div>
    `).join('');

    // Mock upcoming fixtures for favorite teams
    fixturesContainer.innerHTML = `
        <div class="matches-grid">
            <div class="match-card">
                <div class="d-flex justify-content-between align-items-center mb-2">
                    <small class="text-muted">Premier League</small>
                    <small class="text-muted">Dec 15, 2024</small>
                </div>
                <div class="d-flex justify-content-between align-items-center">
                    <div class="text-center flex-fill">
                        <div class="fw-bold">Manchester City</div>
                    </div>
                    <div class="text-center mx-3">
                        <div class="fs-5">vs</div>
                    </div>
                    <div class="text-center flex-fill">
                        <div class="fw-bold">Liverpool</div>
                    </div>
                </div>
            </div>
        </div>
    `;

    // Mock recent results
    resultsContainer.innerHTML = `
        <div class="matches-grid">
            <div class="match-card">
                <div class="d-flex justify-content-between align-items-center mb-2">
                    <small class="text-muted">Premier League</small>
                    <small class="text-muted">Dec 10, 2024</small>
                </div>
                <div class="d-flex justify-content-between align-items-center">
                    <div class="text-center flex-fill">
                        <div class="fw-bold">Manchester City</div>
                    </div>
                    <div class="text-center mx-3">
                        <div class="score fs-4 fw-bold">2 - 1</div>
                        <small class="text-muted">FT</small>
                    </div>
                    <div class="text-center flex-fill">
                        <div class="fw-bold">Chelsea</div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function removeFromFavorites(teamId) {
    SoccerAPI.removeFromFavorites(teamId.toString());
    loadFavorites(); // Reload the page content
}