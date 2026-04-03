// Leagues Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    loadLeagueSelector();

    // Check if league is specified in URL
    const urlParams = new URLSearchParams(window.location.search);
    const leagueId = urlParams.get('league');
    if (leagueId) {
        loadLeagueData(leagueId);
    }
});

function loadLeagueSelector() {
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

    const container = document.getElementById('leagueSelector');

    container.innerHTML = leagues.map(league => `
        <div class="league-card" onclick="selectLeague(${league.id}, '${league.name}')">
            <div class="league-flag-container">
                <img src="${league.flag}" alt="${league.country} flag" class="league-flag" onerror="this.style.display='none'">
                <div class="flag-fallback">${league.emoji}</div>
            </div>
            <h5>${league.name}</h5>
            <small class="text-muted">${league.country}</small>
        </div>
    `).join('');
}

async function selectLeague(leagueId, leagueName) {
    // Update URL
    window.history.pushState({}, '', `leagues.html?league=${leagueId}`);

    // Update title
    document.getElementById('leagueTitle').textContent = `${leagueName} Standings`;

    // Load league data
    await loadLeagueData(leagueId);
}

async function loadLeagueData(leagueId) {
    // Show loading
    showSections(true);

    try {
        // Load standings
        const standings = await SoccerAPI.fetchLeagueStandings(leagueId);
        displayStandings(standings);

        // Load top scorers
        const topScorers = await SoccerAPI.fetchTopScorers(leagueId);
        displayTopScorers(topScorers);

        // Load upcoming fixtures
        const fixtures = await SoccerAPI.fetchUpcomingFixtures(leagueId, 10);
        displayUpcomingFixtures(fixtures);

        // Load recent results
        const results = await SoccerAPI.fetchRecentResults(leagueId, 10);
        displayRecentResults(results);

    } catch (error) {
        console.error('Error loading league data:', error);
        // Show error message
    }
}

function displayStandings(standings) {
    const tbody = document.getElementById('standingsBody');

    if (standings.length === 0) {
        tbody.innerHTML = '<tr><td colspan="10" class="text-center">No standings available</td></tr>';
        return;
    }

    tbody.innerHTML = standings.map((team, index) => `
        <tr class="team-row">
            <td>${team.rank}</td>
            <td>
                <div class="d-flex align-items-center">
                    <img src="${team.team.logo}" alt="${team.team.name}" style="width: 30px; height: 30px; margin-right: 10px;">
                    <span>${team.team.name}</span>
                </div>
            </td>
            <td>${team.all.played}</td>
            <td>${team.all.win}</td>
            <td>${team.all.draw}</td>
            <td>${team.all.lose}</td>
            <td>${team.all.goals.for}</td>
            <td>${team.all.goals.against}</td>
            <td>${team.goalsDiff}</td>
            <td><strong>${team.points}</strong></td>
        </tr>
    `).join('');
}

function displayTopScorers(scorers) {
    const tbody = document.getElementById('topScorersBody');

    if (scorers.length === 0) {
        tbody.innerHTML = '<tr><td colspan="4" class="text-center">No top scorers available</td></tr>';
        return;
    }

    tbody.innerHTML = scorers.map((scorer, index) => `
        <tr>
            <td>${index + 1}</td>
            <td>
                <div class="d-flex align-items-center">
                    <img src="${scorer.player.photo}" alt="${scorer.player.name}" style="width: 40px; height: 40px; border-radius: 50%; margin-right: 10px;">
                    <div>
                        <div class="fw-bold">${scorer.player.name}</div>
                        <small class="text-muted">${scorer.player.age} years old</small>
                    </div>
                </div>
            </td>
            <td>
                <img src="${scorer.statistics[0].team.logo}" alt="${scorer.statistics[0].team.name}" style="width: 25px; height: 25px; margin-right: 5px;">
                ${scorer.statistics[0].team.name}
            </td>
            <td><strong>${scorer.statistics[0].goals.total || 0}</strong></td>
        </tr>
    `).join('');
}

function displayUpcomingFixtures(fixtures) {
    const container = document.getElementById('upcomingFixtures');

    if (fixtures.length === 0) {
        container.innerHTML = '<p>No upcoming fixtures available.</p>';
        return;
    }

    container.innerHTML = fixtures.map(match => `
        <div class="match-card">
            <div class="d-flex justify-content-between align-items-center mb-2">
                <small class="text-muted">${SoccerAPI.formatDate(match.fixture.date)}</small>
                <small class="text-muted">${match.league.name}</small>
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

function displayRecentResults(results) {
    const container = document.getElementById('recentResults');

    if (results.length === 0) {
        container.innerHTML = '<p>No recent results available.</p>';
        return;
    }

    container.innerHTML = results.map(match => `
        <div class="match-card">
            <div class="d-flex justify-content-between align-items-center mb-2">
                <small class="text-muted">${SoccerAPI.formatDate(match.fixture.date)}</small>
                <small class="text-muted">${match.league.name}</small>
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

function showSections(show) {
    const sections = ['standingsSection', 'topScorersSection', 'fixturesSection', 'resultsSection'];
    sections.forEach(sectionId => {
        document.getElementById(sectionId).style.display = show ? 'block' : 'none';
    });
}