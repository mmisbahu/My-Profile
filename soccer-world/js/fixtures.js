// Fixtures Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    loadFixtures();
    setupFilters();

    // Set default date to today
    document.getElementById('dateFilter').valueAsDate = new Date();
});

async function loadFixtures() {
    const container = document.getElementById('fixturesList');
    container.innerHTML = '<div class="text-center"><i class="fas fa-spinner fa-spin fa-2x"></i></div>';

    try {
        // For demo, load fixtures from major leagues
        const leagues = [39, 140, 78, 135]; // Premier League, La Liga, Bundesliga, Serie A
        let allFixtures = [];

        for (const leagueId of leagues) {
            const fixtures = await SoccerAPI.fetchUpcomingFixtures(leagueId, 5);
            allFixtures = allFixtures.concat(fixtures);
        }

        // Sort by date
        allFixtures.sort((a, b) => new Date(a.fixture.date) - new Date(b.fixture.date));

        if (allFixtures.length === 0) {
            container.innerHTML = '<div class="text-center text-muted">No upcoming fixtures found.</div>';
            return;
        }

        // Group by date
        const groupedFixtures = groupByDate(allFixtures);

        container.innerHTML = Object.keys(groupedFixtures).map(date => `
            <div class="mb-4">
                <h4 class="mb-3">${new Date(date).toLocaleDateString('en-US', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                })}</h4>
                <div class="matches-grid">
                    ${groupedFixtures[date].map(match => `
                        <div class="match-card">
                            <div class="d-flex justify-content-between align-items-center mb-2">
                                <small class="text-muted">${match.league.name}</small>
                                <small class="text-muted">${SoccerAPI.formatDate(match.fixture.date).split(', ')[1]}</small>
                            </div>
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="text-center flex-fill">
                                    <img src="${match.teams.home.logo}" alt="${match.teams.home.name}" style="width: 30px; height: 30px; margin-bottom: 5px;">
                                    <div class="fw-bold">${match.teams.home.name}</div>
                                </div>
                                <div class="text-center mx-3">
                                    <div class="fs-5">vs</div>
                                </div>
                                <div class="text-center flex-fill">
                                    <img src="${match.teams.away.logo}" alt="${match.teams.away.name}" style="width: 30px; height: 30px; margin-bottom: 5px;">
                                    <div class="fw-bold">${match.teams.away.name}</div>
                                </div>
                            </div>
                            <div class="text-center mt-2">
                                <button class="btn btn-sm" onclick="addToCalendar('${match.fixture.date}', '${match.teams.home.name} vs ${match.teams.away.name}')">
                                    <i class="fas fa-calendar-plus"></i> Add to Calendar
                                </button>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `).join('');

        // Load next big match
        loadNextBigMatch(allFixtures[0]);

    } catch (error) {
        console.error('Error loading fixtures:', error);
        container.innerHTML = '<div class="text-center text-danger">Error loading fixtures. Please try again later.</div>';
    }
}

function groupByDate(fixtures) {
    return fixtures.reduce((groups, match) => {
        const date = new Date(match.fixture.date).toDateString();
        if (!groups[date]) {
            groups[date] = [];
        }
        groups[date].push(match);
        return groups;
    }, {});
}

function loadNextBigMatch(nextMatch) {
    const container = document.getElementById('nextBigMatch');

    if (!nextMatch) {
        container.innerHTML = '<p>No upcoming matches found.</p>';
        return;
    }

    const matchTime = new Date(nextMatch.fixture.date);
    const now = new Date();

    if (matchTime > now) {
        // Start countdown
        startCountdown(matchTime, container, nextMatch);
    } else {
        container.innerHTML = '<p>The next match has already started or finished.</p>';
    }
}

function startCountdown(targetTime, container, match) {
    function updateCountdown() {
        const now = new Date();
        const diff = targetTime - now;

        if (diff <= 0) {
            container.innerHTML = '<p>The match is starting now!</p>';
            return;
        }

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        container.innerHTML = `
            <div class="row">
                <div class="col-6">
                    <h3>${match.teams.home.name}</h3>
                    <p>vs</p>
                    <h3>${match.teams.away.name}</h3>
                    <small class="text-muted">${match.league.name}</small>
                </div>
                <div class="col-6">
                    <div class="countdown fs-2 fw-bold">
                        ${days}d ${hours}h ${minutes}m ${seconds}s
                    </div>
                    <small class="text-muted">until kickoff</small>
                </div>
            </div>
        `;

        setTimeout(updateCountdown, 1000);
    }

    updateCountdown();
}

function setupFilters() {
    document.getElementById('filterBtn').addEventListener('click', function() {
        // Apply filters - for now, just reload
        loadFixtures();
    });
}

function addToCalendar(date, title) {
    // Simple calendar integration - in a real app, this would integrate with Google Calendar, etc.
    const eventDate = new Date(date);
    const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&dates=${eventDate.toISOString().replace(/[-:]/g, '').split('.')[0]}Z/${new Date(eventDate.getTime() + 90 * 60 * 1000).toISOString().replace(/[-:]/g, '').split('.')[0]}Z`;

    window.open(calendarUrl, '_blank');
}