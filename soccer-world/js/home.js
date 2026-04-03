// Home Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    loadLiveScores();
    loadTodaysMatches();
    loadFeaturedMatches();
    loadMajorLeagues();
    setupSearch();

    // Start auto-refresh for live scores
    window.liveScoreInterval = SoccerAPI.startLiveScoreRefresh(loadLiveScores);
});

async function loadLiveScores() {
    const liveMatches = await SoccerAPI.fetchLiveScores();
    const ticker = document.getElementById('liveScoresTicker');

    if (liveMatches.length === 0) {
        ticker.innerHTML = '<div class="match">No live matches at the moment</div>';
        return;
    }

    ticker.innerHTML = liveMatches.map(match => `
        <div class="match live">
            <span>${match.teams.home.name}</span>
            <span class="score">${SoccerAPI.formatScore(match)}</span>
            <span>${match.teams.away.name}</span>
            <span class="status">${SoccerAPI.getStatusText(match.fixture.status.short)}</span>
        </div>
    `).join('');
}

async function loadTodaysMatches() {
    const matches = await SoccerAPI.fetchTodaysMatches();
    const container = document.getElementById('todaysMatches');

    if (matches.length === 0) {
        container.innerHTML = '<p>No matches scheduled for today.</p>';
        return;
    }

    container.innerHTML = matches.slice(0, 6).map(match => `
        <div class="match-card ${match.fixture.status.short !== 'NS' ? 'live' : ''}">
            <div class="d-flex justify-content-between align-items-center mb-2">
                <small class="text-muted">${match.league.name}</small>
                <small class="text-muted">${SoccerAPI.formatDate(match.fixture.date)}</small>
            </div>
            <div class="d-flex justify-content-between align-items-center">
                <div class="text-center flex-fill">
                    <div class="fw-bold">${match.teams.home.name}</div>
                </div>
                <div class="text-center mx-3">
                    <div class="score fs-4 fw-bold">${SoccerAPI.formatScore(match)}</div>
                    <small class="text-muted">${SoccerAPI.getStatusText(match.fixture.status.short)}</small>
                </div>
                <div class="text-center flex-fill">
                    <div class="fw-bold">${match.teams.away.name}</div>
                </div>
            </div>
        </div>
    `).join('');
}

async function loadFeaturedMatches() {
    // For featured matches, we'll show upcoming matches from major leagues
    const premierLeague = await SoccerAPI.fetchUpcomingFixtures(39, 3); // Premier League
    const laLiga = await SoccerAPI.fetchUpcomingFixtures(140, 3); // La Liga
    const bundesliga = await SoccerAPI.fetchUpcomingFixtures(78, 3); // Bundesliga
    const serieA = await SoccerAPI.fetchUpcomingFixtures(135, 3); // Serie A

    const featuredMatches = [...premierLeague, ...laLiga, ...bundesliga, ...serieA].slice(0, 6);
    const container = document.getElementById('featuredMatches');

    container.innerHTML = featuredMatches.map(match => `
        <div class="match-card">
            <div class="d-flex justify-content-between align-items-center mb-2">
                <small class="text-muted">${match.league.name}</small>
                <small class="text-muted">${SoccerAPI.formatDate(match.fixture.date)}</small>
            </div>
            <div class="d-flex justify-content-between align-items-center">
                <div class="text-center flex-fill">
                    <div class="fw-bold">${match.teams.home.name}</div>
                </div>
                <div class="text-center mx-3">
                    <div class="fs-5">vs</div>
                </div>
                <div class="text-center flex-fill">
                    <div class="fw-bold">${match.teams.away.name}</div>
                </div>
            </div>
        </div>
    `).join('');
}

function loadMajorLeagues() {
    const leagues = [
        { id: 39, name: 'Premier League', country: 'England', flag: 'https://media.api-football.com/flags/gb.svg', emoji: '🏴󠁧󠁢󠁥󠁮󠁧󠁿' },
        { id: 140, name: 'La Liga', country: 'Spain', flag: 'https://media.api-football.com/flags/es.svg', emoji: '🇪🇸' },
        { id: 78, name: 'Bundesliga', country: 'Germany', flag: 'https://media.api-football.com/flags/de.svg', emoji: '🇩🇪' },
        { id: 135, name: 'Serie A', country: 'Italy', flag: 'https://media.api-football.com/flags/it.svg', emoji: '🇮🇹' },
        { id: 61, name: 'Ligue 1', country: 'France', flag: 'https://media.api-football.com/flags/fr.svg', emoji: '🇫🇷' },
        { id: 94, name: 'Primeira Liga', country: 'Portugal', flag: 'https://media.api-football.com/flags/pt.svg', emoji: '🇵🇹' },
        { id: 88, name: 'Eredivisie', country: 'Netherlands', flag: 'https://media.api-football.com/flags/nl.svg', emoji: '🇳🇱' },
        { id: 2, name: 'UEFA Champions League', country: 'Europe', flag: 'https://media.api-football.com/flags/eu.svg', emoji: '🌍' },
        { id: 253, name: 'MLS', country: 'USA & Canada', flag: 'https://media.api-football.com/flags/us.svg', emoji: '🌎' }
    ];

    const container = document.getElementById('majorLeagues');

    container.innerHTML = leagues.map(league => `
        <div class="league-card" onclick="window.location.href='leagues.html?league=${league.id}'">
            <div class="league-flag-container">
                <img src="${league.flag}" alt="${league.country} flag" class="league-flag" onerror="this.style.display='none'">
                <div class="flag-fallback">${league.emoji}</div>
            </div>
            <h5>${league.name}</h5>
            <small class="text-muted">${league.country}</small>
        </div>
    `).join('');
}

function setupSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');

    function performSearch() {
        const query = searchInput.value.trim();
        if (query) {
            // Redirect to teams-players page with search query
            window.location.href = `teams-players.html?search=${encodeURIComponent(query)}`;
        }
    }

    searchBtn.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
}