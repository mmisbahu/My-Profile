// National Teams Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    loadNationalTeams();

    // Setup continent filters
    document.querySelectorAll('input[name="continent"]').forEach(radio => {
        radio.addEventListener('change', function() {
            loadNationalTeams(this.id);
        });
    });
});

async function loadNationalTeams(continent = 'all') {
    const container = document.getElementById('nationalTeams');
    container.innerHTML = '<div class="text-center"><i class="fas fa-spinner fa-spin fa-3x text-success"></i><p class="mt-3">Loading national teams...</p></div>';

    try {
        // For demo purposes, we'll use a comprehensive list of major national teams
        // In production, this would be fetched from the API
        const allTeams = [
            // UEFA (Europe)
            { name: 'Brazil', flag: '🇧🇷', logo: 'https://media.api-football.com/teams/6.png', continent: 'america', fifaRank: 1, confederation: 'CONMEBOL' },
            { name: 'Argentina', flag: '🇦🇷', logo: 'https://media.api-football.com/teams/26.png', continent: 'america', fifaRank: 2, confederation: 'CONMEBOL' },
            { name: 'France', flag: '🇫🇷', logo: 'https://media.api-football.com/teams/2.png', continent: 'europe', fifaRank: 3, confederation: 'UEFA' },
            { name: 'England', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', logo: 'https://media.api-football.com/teams/10.png', continent: 'europe', fifaRank: 4, confederation: 'UEFA' },
            { name: 'Spain', flag: '🇪🇸', logo: 'https://media.api-football.com/teams/9.png', continent: 'europe', fifaRank: 5, confederation: 'UEFA' },
            { name: 'Germany', flag: '🇩🇪', logo: 'https://media.api-football.com/teams/25.png', continent: 'europe', fifaRank: 6, confederation: 'UEFA' },
            { name: 'Netherlands', flag: '🇳🇱', logo: 'https://media.api-football.com/teams/1118.png', continent: 'europe', fifaRank: 7, confederation: 'UEFA' },
            { name: 'Portugal', flag: '🇵🇹', logo: 'https://media.api-football.com/teams/27.png', continent: 'europe', fifaRank: 8, confederation: 'UEFA' },
            { name: 'Italy', flag: '🇮🇹', logo: 'https://media.api-football.com/teams/768.png', continent: 'europe', fifaRank: 9, confederation: 'UEFA' },
            { name: 'Croatia', flag: '🇭🇷', logo: 'https://media.api-football.com/teams/3.png', continent: 'europe', fifaRank: 10, confederation: 'UEFA' },
            { name: 'Belgium', flag: '🇧🇪', logo: 'https://media.api-football.com/teams/1.png', continent: 'europe', fifaRank: 11, confederation: 'UEFA' },
            { name: 'Switzerland', flag: '🇨🇭', logo: 'https://media.api-football.com/teams/15.png', continent: 'europe', fifaRank: 12, confederation: 'UEFA' },

            // CONMEBOL (South America)
            { name: 'Uruguay', flag: '🇺🇾', logo: 'https://media.api-football.com/teams/7.png', continent: 'america', fifaRank: 13, confederation: 'CONMEBOL' },
            { name: 'Colombia', flag: '🇨🇴', logo: 'https://media.api-football.com/teams/4.png', continent: 'america', fifaRank: 14, confederation: 'CONMEBOL' },
            { name: 'Ecuador', flag: '🇪🇨', logo: 'https://media.api-football.com/teams/2382.png', continent: 'america', fifaRank: 15, confederation: 'CONMEBOL' },
            { name: 'Peru', flag: '🇵🇪', logo: 'https://media.api-football.com/teams/24.png', continent: 'america', fifaRank: 16, confederation: 'CONMEBOL' },
            { name: 'Chile', flag: '🇨🇱', logo: 'https://media.api-football.com/teams/2383.png', continent: 'america', fifaRank: 17, confederation: 'CONMEBOL' },
            { name: 'Paraguay', flag: '🇵🇾', logo: 'https://media.api-football.com/teams/2384.png', continent: 'america', fifaRank: 18, confederation: 'CONMEBOL' },

            // CAF (Africa)
            { name: 'Morocco', flag: '🇲🇦', logo: 'https://media.api-football.com/teams/31.png', continent: 'africa', fifaRank: 19, confederation: 'CAF' },
            { name: 'Senegal', flag: '🇸🇳', logo: 'https://media.api-football.com/teams/13.png', continent: 'africa', fifaRank: 20, confederation: 'CAF' },
            { name: 'Egypt', flag: '🇪🇬', logo: 'https://media.api-football.com/teams/32.png', continent: 'africa', fifaRank: 21, confederation: 'CAF' },
            { name: 'Tunisia', flag: '🇹🇳', logo: 'https://media.api-football.com/teams/28.png', continent: 'africa', fifaRank: 22, confederation: 'CAF' },
            { name: 'Algeria', flag: '🇩🇿', logo: 'https://media.api-football.com/teams/1530.png', continent: 'africa', fifaRank: 23, confederation: 'CAF' },
            { name: 'Nigeria', flag: '🇳🇬', logo: 'https://media.api-football.com/teams/20.png', continent: 'africa', fifaRank: 24, confederation: 'CAF' },

            // AFC (Asia)
            { name: 'Japan', flag: '🇯🇵', logo: 'https://media.api-football.com/teams/12.png', continent: 'asia', fifaRank: 25, confederation: 'AFC' },
            { name: 'South Korea', flag: '🇰🇷', logo: 'https://media.api-football.com/teams/17.png', continent: 'asia', fifaRank: 26, confederation: 'AFC' },
            { name: 'Saudi Arabia', flag: '🇸🇦', logo: 'https://media.api-football.com/teams/23.png', continent: 'asia', fifaRank: 27, confederation: 'AFC' },
            { name: 'Iran', flag: '🇮🇷', logo: 'https://media.api-football.com/teams/22.png', continent: 'asia', fifaRank: 28, confederation: 'AFC' },
            { name: 'Australia', flag: '🇦🇺', logo: 'https://media.api-football.com/teams/20.png', continent: 'oceania', fifaRank: 29, confederation: 'AFC' },
            { name: 'Qatar', flag: '🇶🇦', logo: 'https://media.api-football.com/teams/14.png', continent: 'asia', fifaRank: 30, confederation: 'AFC' },

            // CONCACAF (North America)
            { name: 'USA', flag: '🇺🇸', logo: 'https://media.api-football.com/teams/2385.png', continent: 'america', fifaRank: 31, confederation: 'CONCACAF' },
            { name: 'Mexico', flag: '🇲🇽', logo: 'https://media.api-football.com/teams/16.png', continent: 'america', fifaRank: 32, confederation: 'CONCACAF' },
            { name: 'Canada', flag: '🇨🇦', logo: 'https://media.api-football.com/teams/2386.png', continent: 'america', fifaRank: 33, confederation: 'CONCACAF' },
            { name: 'Costa Rica', flag: '🇨🇷', logo: 'https://media.api-football.com/teams/2387.png', continent: 'america', fifaRank: 34, confederation: 'CONCACAF' },

            // OFC (Oceania)
            { name: 'New Zealand', flag: '🇳🇿', logo: 'https://media.api-football.com/teams/21.png', continent: 'oceania', fifaRank: 35, confederation: 'OFC' }
        ];

        let filteredTeams = allTeams;
        if (continent !== 'all') {
            filteredTeams = allTeams.filter(team => team.continent === continent);
        }

        // Sort by FIFA ranking
        filteredTeams.sort((a, b) => a.fifaRank - b.fifaRank);

        container.innerHTML = filteredTeams.map(team => `
            <div class="league-card national-team-card" onclick="viewTeamDetails('${team.name}')">
                <div class="team-logo-container">
                    <img src="${team.logo}" alt="${team.name} logo" class="team-logo" onerror="this.src='https://via.placeholder.com/100x100/2a2a2a/00ff88?text=${team.name.charAt(0)}'">
                    <div class="flag-overlay">${team.flag}</div>
                </div>
                <div class="team-info">
                    <h5 class="team-name">${team.name}</h5>
                    <div class="team-details">
                        <span class="fifa-rank">#${team.fifaRank}</span>
                        <span class="confederation">${team.confederation}</span>
                    </div>
                </div>
                <div class="team-stats">
                    <div class="stat-item">
                        <span class="stat-label">Rank</span>
                        <span class="stat-value">${team.fifaRank}</span>
                    </div>
                </div>
            </div>
        `).join('');

    } catch (error) {
        console.error('Error loading national teams:', error);
        container.innerHTML = '<div class="text-center text-danger"><i class="fas fa-exclamation-triangle fa-3x mb-3"></i><p>Failed to load national teams. Please try again later.</p></div>';
    }
}

function viewTeamDetails(teamName) {
    // In a real implementation, this would navigate to a team detail page
    // For now, show a modal or redirect to a team page
    alert(`🏆 ${teamName} National Team\n\nThis would show detailed information about ${teamName}'s national team including:\n• Squad list\n• Recent matches\n• FIFA ranking history\n• Tournament participations\n• Player statistics`);
}