// Teams & Players Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    loadPopularTeams();
    loadPopularPlayers();
    setupSearch();
    setupFilters();

    // Check if there's a search query in URL
    const urlParams = new URLSearchParams(window.location.search);
    const searchQuery = urlParams.get('search');
    if (searchQuery) {
        document.getElementById('searchInput').value = searchQuery;
        performSearch(searchQuery);
    }
});

function setupFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    let currentFilter = 'all';

    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            currentFilter = this.dataset.filter;
        });
    });
}

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
    const resultsCount = document.getElementById('resultsCount');

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
            },
            {
                type: 'player',
                name: 'Cristiano Ronaldo',
                team: 'Al Nassr',
                position: 'Forward',
                nationality: 'Portugal',
                photo: 'https://media.api-football.com/players/874.png'
            },
            {
                type: 'team',
                name: 'Bayern Munich',
                league: 'Bundesliga',
                country: 'Germany',
                logo: 'https://media.api-football.com/teams/157.png'
            },
            {
                type: 'player',
                name: 'Kylian Mbappé',
                team: 'PSG',
                position: 'Forward',
                nationality: 'France',
                photo: 'https://media.api-football.com/players/158.png'
            }
        ];

        const filteredResults = mockResults.filter(item =>
            item.name.toLowerCase().includes(query.toLowerCase())
        );

        if (filteredResults.length === 0) {
            resultsContainer.innerHTML = '<div class="text-center text-muted">No results found for your search.</div>';
            resultsCount.textContent = '0 results';
            return;
        }

        resultsCount.textContent = `${filteredResults.length} result${filteredResults.length === 1 ? '' : 's'}`;

        resultsContainer.innerHTML = filteredResults.map(result => {
            if (result.type === 'team') {
                return `
                    <div class="team-card">
                        <img src="${result.logo}" alt="${result.name}" class="team-logo">
                        <h3 class="team-name">${result.name}</h3>
                        <p class="team-country">${result.league} • ${result.country}</p>
                        <div class="team-stats">
                            <div class="stat-item">
                                <span class="stat-value">85</span>
                                <span class="stat-label">Rating</span>
                            </div>
                            <div class="stat-item">
                                <span class="stat-value">2023</span>
                                <span class="stat-label">Founded</span>
                            </div>
                        </div>
                    </div>
                `;
            } else {
                return `
                    <div class="player-card">
                        <img src="${result.photo}" alt="${result.name}" class="player-photo">
                        <h3 class="player-name">${result.name}</h3>
                        <p class="player-position">${result.team} • ${result.position}</p>
                        <div class="player-stats">
                            <div class="stat-item">
                                <span class="stat-value">94</span>
                                <span class="stat-label">Rating</span>
                            </div>
                            <div class="stat-item">
                                <span class="stat-value">35</span>
                                <span class="stat-label">Age</span>
                            </div>
                        </div>
                    </div>
                `;
            }
        }).join('');

    } catch (error) {
        console.error('Error performing search:', error);
        resultsContainer.innerHTML = '<div class="text-center text-danger">Error performing search. Please try again later.</div>';
        resultsCount.textContent = '0 results';
    }
}

async function loadPopularTeams() {
    const container = document.getElementById('popularTeams');

    // Mock popular teams
    const popularTeams = [
        { name: 'Manchester City', league: 'Premier League', country: 'England', logo: 'https://media.api-football.com/teams/50.png' },
        { name: 'Real Madrid', league: 'La Liga', country: 'Spain', logo: 'https://media.api-football.com/teams/541.png' },
        { name: 'Bayern Munich', league: 'Bundesliga', country: 'Germany', logo: 'https://media.api-football.com/teams/157.png' },
        { name: 'Juventus', league: 'Serie A', country: 'Italy', logo: 'https://media.api-football.com/teams/496.png' },
        { name: 'Liverpool', league: 'Premier League', country: 'England', logo: 'https://media.api-football.com/teams/40.png' },
        { name: 'Barcelona', league: 'La Liga', country: 'Spain', logo: 'https://media.api-football.com/teams/529.png' },
        { name: 'PSG', league: 'Ligue 1', country: 'France', logo: 'https://media.api-football.com/teams/85.png' },
        { name: 'Chelsea', league: 'Premier League', country: 'England', logo: 'https://media.api-football.com/teams/49.png' }
    ];

    container.innerHTML = popularTeams.map(team => `
        <div class="team-card">
            <img src="${team.logo}" alt="${team.name}" class="team-logo">
            <h3 class="team-name">${team.name}</h3>
            <p class="team-country">${team.league} • ${team.country}</p>
            <div class="team-stats">
                <div class="stat-item">
                    <span class="stat-value">85</span>
                    <span class="stat-label">Rating</span>
                </div>
                <div class="stat-item">
                    <span class="stat-value">2023</span>
                    <span class="stat-label">Founded</span>
                </div>
            </div>
        </div>
    `).join('');
}

async function loadPopularPlayers() {
    const container = document.getElementById('popularPlayers');

    // Mock popular players
    const popularPlayers = [
        { name: 'Lionel Messi', team: 'Inter Miami', position: 'Forward', nationality: 'Argentina', photo: 'https://media.api-football.com/players/154.png' },
        { name: 'Cristiano Ronaldo', team: 'Al Nassr', position: 'Forward', nationality: 'Portugal', photo: 'https://media.api-football.com/players/874.png' },
        { name: 'Kylian Mbappé', team: 'PSG', position: 'Forward', nationality: 'France', photo: 'https://media.api-football.com/players/158.png' },
        { name: 'Erling Haaland', team: 'Man City', position: 'Forward', nationality: 'Norway', photo: 'https://media.api-football.com/players/1100.png' },
        { name: 'Neymar', team: 'Al Hilal', position: 'Forward', nationality: 'Brazil', photo: 'https://media.api-football.com/players/276.png' },
        { name: 'Kevin De Bruyne', team: 'Man City', position: 'Midfielder', nationality: 'Belgium', photo: 'https://media.api-football.com/players/629.png' },
        { name: 'Mohamed Salah', team: 'Liverpool', position: 'Forward', nationality: 'Egypt', photo: 'https://media.api-football.com/players/306.png' },
        { name: 'Karim Benzema', team: 'Al Ittihad', position: 'Forward', nationality: 'France', photo: 'https://media.api-football.com/players/237.png' }
    ];

    container.innerHTML = popularPlayers.map(player => `
        <div class="player-card">
            <img src="${player.photo}" alt="${player.name}" class="player-photo">
            <h3 class="player-name">${player.name}</h3>
            <p class="player-position">${player.team} • ${player.position}</p>
            <div class="player-stats">
                <div class="stat-item">
                    <span class="stat-value">94</span>
                    <span class="stat-label">Rating</span>
                </div>
                <div class="stat-item">
                    <span class="stat-value">35</span>
                    <span class="stat-label">Age</span>
                </div>
            </div>
        </div>
    `).join('');
}
            <div class="text-center">
                <img src="${player.photo}" alt="${player.name}" style="width: 80px; height: 80px; border-radius: 50%; margin-bottom: 10px;">
                <h6>${player.name}</h6>
                <small class="text-muted">${player.team}</small>
            </div>
        </div>
    `).join('');
}