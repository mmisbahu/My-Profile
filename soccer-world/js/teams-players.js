// Teams & Players Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    loadPopularTeams();
    loadPopularPlayers();
    setupSearch();

    // Check if there's a search query in URL
    const urlParams = new URLSearchParams(window.location.search);
    const searchQuery = urlParams.get('search');
    if (searchQuery) {
        document.getElementById('searchInput').value = searchQuery;
        performSearch(searchQuery);
    }
});

function setupSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');

    function performSearchFromInput() {
        const query = searchInput.value.trim();
        if (query) {
            performSearch(query);
        }
    }

    searchBtn.addEventListener('click', performSearchFromInput);
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearchFromInput();
        }
    });
}

async function performSearch(query) {
    const resultsSection = document.getElementById('searchResults');
    const resultsContainer = document.getElementById('resultsContainer');

    resultsSection.style.display = 'block';
    resultsContainer.innerHTML = '<div class="text-center"><i class="fas fa-spinner fa-spin fa-2x"></i></div>';

    try {
        // For demo purposes, we'll simulate search results
        // In a real implementation, you'd use the API's search endpoints
        const mockResults = [
            {
                type: 'team',
                name: 'Manchester City',
                league: 'Premier League',
                country: 'England',
                logo: 'https://media.api-football.com/teams/50.png'
            },
            {
                type: 'player',
                name: 'Lionel Messi',
                team: 'Inter Miami',
                position: 'Forward',
                nationality: 'Argentina',
                photo: 'https://media.api-football.com/players/154.png'
            },
            {
                type: 'team',
                name: 'Real Madrid',
                league: 'La Liga',
                country: 'Spain',
                logo: 'https://media.api-football.com/teams/541.png'
            }
        ];

        const filteredResults = mockResults.filter(item =>
            item.name.toLowerCase().includes(query.toLowerCase())
        );

        if (filteredResults.length === 0) {
            resultsContainer.innerHTML = '<div class="text-center text-muted">No results found for your search.</div>';
            return;
        }

        resultsContainer.innerHTML = filteredResults.map(result => {
            if (result.type === 'team') {
                return `
                    <div class="match-card">
                        <div class="d-flex align-items-center">
                            <img src="${result.logo}" alt="${result.name}" style="width: 50px; height: 50px; margin-right: 15px;">
                            <div>
                                <h5 class="mb-1">${result.name}</h5>
                                <p class="mb-0 text-muted">${result.league} • ${result.country}</p>
                            </div>
                        </div>
                    </div>
                `;
            } else {
                return `
                    <div class="match-card">
                        <div class="d-flex align-items-center">
                            <img src="${result.photo}" alt="${result.name}" style="width: 50px; height: 50px; border-radius: 50%; margin-right: 15px;">
                            <div>
                                <h5 class="mb-1">${result.name}</h5>
                                <p class="mb-0 text-muted">${result.team} • ${result.position} • ${result.nationality}</p>
                            </div>
                        </div>
                    </div>
                `;
            }
        }).join('');

    } catch (error) {
        console.error('Error performing search:', error);
        resultsContainer.innerHTML = '<div class="text-center text-danger">Error performing search. Please try again later.</div>';
    }
}

async function loadPopularTeams() {
    const container = document.getElementById('popularTeams');

    // Mock popular teams
    const popularTeams = [
        { name: 'Manchester City', league: 'Premier League', logo: 'https://media.api-football.com/teams/50.png' },
        { name: 'Real Madrid', league: 'La Liga', logo: 'https://media.api-football.com/teams/541.png' },
        { name: 'Bayern Munich', league: 'Bundesliga', logo: 'https://media.api-football.com/teams/157.png' },
        { name: 'Juventus', league: 'Serie A', logo: 'https://media.api-football.com/teams/496.png' },
        { name: 'Liverpool', league: 'Premier League', logo: 'https://media.api-football.com/teams/40.png' },
        { name: 'Barcelona', league: 'La Liga', logo: 'https://media.api-football.com/teams/529.png' }
    ];

    container.innerHTML = popularTeams.map(team => `
        <div class="league-card">
            <img src="${team.logo}" alt="${team.name}" style="width: 60px; height: 60px; margin-bottom: 10px;">
            <h5>${team.name}</h5>
            <small class="text-muted">${team.league}</small>
        </div>
    `).join('');
}

async function loadPopularPlayers() {
    const container = document.getElementById('popularPlayers');

    // Mock popular players
    const popularPlayers = [
        { name: 'Lionel Messi', team: 'Inter Miami', photo: 'https://media.api-football.com/players/154.png' },
        { name: 'Cristiano Ronaldo', team: 'Al Nassr', photo: 'https://media.api-football.com/players/874.png' },
        { name: 'Kylian Mbappé', team: 'PSG', photo: 'https://media.api-football.com/players/158.png' },
        { name: 'Erling Haaland', team: 'Man City', photo: 'https://media.api-football.com/players/1100.png' },
        { name: 'Neymar', team: 'Al Hilal', photo: 'https://media.api-football.com/players/276.png' },
        { name: 'Kevin De Bruyne', team: 'Man City', photo: 'https://media.api-football.com/players/629.png' }
    ];

    container.innerHTML = popularPlayers.map(player => `
        <div class="match-card">
            <div class="text-center">
                <img src="${player.photo}" alt="${player.name}" style="width: 80px; height: 80px; border-radius: 50%; margin-bottom: 10px;">
                <h6>${player.name}</h6>
                <small class="text-muted">${player.team}</small>
            </div>
        </div>
    `).join('');
}