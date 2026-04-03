// Match Detail Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Get match ID from URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const matchId = urlParams.get('match');

    if (matchId) {
        loadMatchDetails(matchId);
    } else {
        // Show sample match for demo
        loadSampleMatch();
    }
});

async function loadMatchDetails(matchId) {
    // In a real implementation, fetch match details from API
    // For demo, we'll use mock data
    loadSampleMatch();
}

function loadSampleMatch() {
    // Mock match data
    const matchData = {
        homeTeam: {
            name: 'Manchester City',
            logo: 'https://media.api-football.com/teams/50.png',
            form: ['W', 'W', 'D', 'W', 'L']
        },
        awayTeam: {
            name: 'Liverpool',
            logo: 'https://media.api-football.com/teams/40.png',
            form: ['W', 'L', 'W', 'D', 'W']
        },
        score: '2 - 1',
        status: 'FT',
        date: '2024-12-15T15:00:00Z',
        venue: 'Etihad Stadium',
        referee: 'Michael Oliver',
        league: 'Premier League'
    };

    // Populate match header
    document.getElementById('matchHeader').innerHTML = `
        <div class="row align-items-center">
            <div class="col-md-4 text-center">
                <img src="${matchData.homeTeam.logo}" alt="${matchData.homeTeam.name}" style="width: 80px; height: 80px;">
                <h4 class="mt-2">${matchData.homeTeam.name}</h4>
            </div>
            <div class="col-md-4 text-center">
                <div class="score fs-1 fw-bold mb-2">${matchData.score}</div>
                <div class="text-muted">${matchData.status}</div>
                <div class="text-muted">${new Date(matchData.date).toLocaleDateString()}</div>
            </div>
            <div class="col-md-4 text-center">
                <img src="${matchData.awayTeam.logo}" alt="${matchData.awayTeam.name}" style="width: 80px; height: 80px;">
                <h4 class="mt-2">${matchData.awayTeam.name}</h4>
            </div>
        </div>
    `;

    // Populate head-to-head
    document.getElementById('headToHead').innerHTML = `
        <div class="match-card">
            <div class="row text-center">
                <div class="col-4">
                    <h3>15</h3>
                    <p>Matches</p>
                </div>
                <div class="col-4">
                    <h3>8</h3>
                    <p>${matchData.homeTeam.name} Wins</p>
                </div>
                <div class="col-4">
                    <h3>5</h3>
                    <p>${matchData.awayTeam.name} Wins</p>
                </div>
            </div>
        </div>
    `;

    // Populate team form
    document.getElementById('homeTeamName').textContent = matchData.homeTeam.name;
    document.getElementById('homeTeamForm').innerHTML = `
        <div class="d-flex justify-content-center gap-2">
            ${matchData.homeTeam.form.map(result => `
                <div class="form-result ${result === 'W' ? 'win' : result === 'D' ? 'draw' : 'loss'}">
                    ${result}
                </div>
            `).join('')}
        </div>
    `;

    document.getElementById('awayTeamName').textContent = matchData.awayTeam.name;
    document.getElementById('awayTeamForm').innerHTML = `
        <div class="d-flex justify-content-center gap-2">
            ${matchData.awayTeam.form.map(result => `
                <div class="form-result ${result === 'W' ? 'win' : result === 'D' ? 'draw' : 'loss'}">
                    ${result}
                </div>
            `).join('')}
        </div>
    `;

    // Populate match info
    document.getElementById('venue').textContent = matchData.venue;
    document.getElementById('kickoff').textContent = new Date(matchData.date).toLocaleString();
    document.getElementById('referee').textContent = matchData.referee;
    document.getElementById('competition').textContent = matchData.league;
}

// Add CSS for form results (add to style.css if not already there)
const style = document.createElement('style');
style.textContent = `
    .form-result {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        color: white;
    }
    .form-result.win { background-color: #4CAF50; }
    .form-result.draw { background-color: #ff9800; }
    .form-result.loss { background-color: #f44336; }
`;
document.head.appendChild(style);