// Live Scores Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    loadLiveMatches();

    // Start auto-refresh
    window.liveScoreInterval = SoccerAPI.startLiveScoreRefresh(loadLiveMatches);

    // Setup filter
    document.getElementById('leagueFilter').addEventListener('change', loadLiveMatches);
});

async function loadLiveMatches() {
    const container = document.getElementById('liveMatches');
    const leagueFilter = document.getElementById('leagueFilter').value;

    container.innerHTML = '<div class="text-center"><i class="fas fa-spinner fa-spin fa-2x"></i></div>';

    try {
        let matches = await SoccerAPI.fetchLiveScores();

        // Filter by league if selected
        if (leagueFilter) {
            matches = matches.filter(match => match.league.id == leagueFilter);
        }

        if (matches.length === 0) {
            container.innerHTML = '<div class="text-center text-muted">No live matches at the moment.</div>';
            return;
        }

        container.innerHTML = matches.map(match => `
            <div class="match-card live">
                <div class="d-flex justify-content-between align-items-center mb-2">
                    <small class="text-muted">${match.league.name}</small>
                    <small class="text-muted">${SoccerAPI.getStatusText(match.fixture.status.short)}</small>
                </div>
                <div class="d-flex justify-content-between align-items-center mb-3">
                    <div class="text-center flex-fill">
                        <img src="${match.teams.home.logo}" alt="${match.teams.home.name}" style="width: 40px; height: 40px; margin-bottom: 5px;">
                        <div class="fw-bold">${match.teams.home.name}</div>
                    </div>
                    <div class="text-center mx-3">
                        <div class="score fs-1 fw-bold">${SoccerAPI.formatScore(match)}</div>
                        <small class="text-muted">${match.fixture.status.elapsed || ''}'</small>
                    </div>
                    <div class="text-center flex-fill">
                        <img src="${match.teams.away.logo}" alt="${match.teams.away.name}" style="width: 40px; height: 40px; margin-bottom: 5px;">
                        <div class="fw-bold">${match.teams.away.name}</div>
                    </div>
                </div>
                <div class="row text-center">
                    <div class="col-6">
                        <small class="text-muted">Goals</small>
                        <div>${match.goals.home || 0}</div>
                    </div>
                    <div class="col-6">
                        <small class="text-muted">Goals</small>
                        <div>${match.goals.away || 0}</div>
                    </div>
                </div>
                ${match.events ? `
                    <div class="mt-3">
                        <small class="text-muted">Recent Events:</small>
                        <div class="small">
                            ${match.events.slice(-3).map(event => `
                                <div>${event.time.elapsed}' ${event.player.name} - ${event.type}</div>
                            `).join('')}
                        </div>
                    </div>
                ` : ''}
            </div>
        `).join('');

    } catch (error) {
        console.error('Error loading live matches:', error);
        container.innerHTML = '<div class="text-center text-danger">Error loading live scores. Please try again later.</div>';
    }
}