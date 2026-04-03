// Soccer World - Global Football App JavaScript

const API_KEY = 'YOUR_API_KEY_HERE'; // Replace with your API-Football key
const API_BASE_URL = 'https://api-football-v1.p.rapidapi.com/v3/';

// API headers for API-Football
const API_HEADERS = {
  'X-RapidAPI-Key': API_KEY,
  'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
};

// Utility functions
function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
}

function formatScore(match) {
  if (match.fixture.status.short === 'NS') return 'vs';
  if (match.fixture.status.short === 'FT') return `${match.goals.home} - ${match.goals.away}`;
  return `${match.goals.home || 0} - ${match.goals.away || 0}`;
}

function getStatusText(status) {
  const statusMap = {
    'NS': 'Not Started',
    '1H': '1st Half',
    'HT': 'Half Time',
    '2H': '2nd Half',
    'ET': 'Extra Time',
    'P': 'Penalty',
    'FT': 'Full Time',
    'AET': 'After Extra Time',
    'PEN': 'Penalties',
    'BT': 'Break Time',
    'SUSP': 'Suspended',
    'INT': 'Interrupted',
    'PST': 'Postponed',
    'CANC': 'Cancelled',
    'ABD': 'Abandoned',
    'AWD': 'Awarded',
    'WO': 'Walk Over'
  };
  return statusMap[status] || status;
}

// API functions
async function fetchLiveScores() {
  try {
    const response = await fetch(`${API_BASE_URL}fixtures?live=all`, {
      headers: API_HEADERS
    });
    const data = await response.json();
    return data.response;
  } catch (error) {
    console.error('Error fetching live scores:', error);
    return [];
  }
}

async function fetchTodaysMatches() {
  try {
    const today = new Date().toISOString().split('T')[0];
    const response = await fetch(`${API_BASE_URL}fixtures?date=${today}`, {
      headers: API_HEADERS
    });
    const data = await response.json();
    return data.response;
  } catch (error) {
    console.error('Error fetching today\'s matches:', error);
    return [];
  }
}

async function fetchLeagueStandings(leagueId, season = 2023) {
  try {
    const response = await fetch(`${API_BASE_URL}standings?league=${leagueId}&season=${season}`, {
      headers: API_HEADERS
    });
    const data = await response.json();
    return data.response[0]?.league?.standings[0] || [];
  } catch (error) {
    console.error('Error fetching standings:', error);
    return [];
  }
}

async function fetchTopScorers(leagueId, season = 2023) {
  try {
    const response = await fetch(`${API_BASE_URL}players/topscorers?league=${leagueId}&season=${season}`, {
      headers: API_HEADERS
    });
    const data = await response.json();
    return data.response.slice(0, 10);
  } catch (error) {
    console.error('Error fetching top scorers:', error);
    return [];
  }
}

async function fetchUpcomingFixtures(leagueId, limit = 10) {
  try {
    const response = await fetch(`${API_BASE_URL}fixtures?league=${leagueId}&next=${limit}`, {
      headers: API_HEADERS
    });
    const data = await response.json();
    return data.response;
  } catch (error) {
    console.error('Error fetching upcoming fixtures:', error);
    return [];
  }
}

async function fetchRecentResults(leagueId, limit = 10) {
  try {
    const response = await fetch(`${API_BASE_URL}fixtures?league=${leagueId}&last=${limit}`, {
      headers: API_HEADERS
    });
    const data = await response.json();
    return data.response;
  } catch (error) {
    console.error('Error fetching recent results:', error);
    return [];
  }
}

// Local storage for favorites
function getFavorites() {
  return JSON.parse(localStorage.getItem('soccerFavorites') || '[]');
}

function addToFavorites(teamId) {
  const favorites = getFavorites();
  if (!favorites.includes(teamId)) {
    favorites.push(teamId);
    localStorage.setItem('soccerFavorites', JSON.stringify(favorites));
  }
}

function removeFromFavorites(teamId) {
  const favorites = getFavorites().filter(id => id !== teamId);
  localStorage.setItem('soccerFavorites', JSON.stringify(favorites));
}

function isFavorite(teamId) {
  return getFavorites().includes(teamId);
}

// Auto-refresh for live scores
function startLiveScoreRefresh(callback, interval = 60000) {
  callback(); // Initial load
  return setInterval(callback, interval);
}

// Search functionality
function searchTeamsPlayers(query) {
  // This would require additional API calls for search
  // For now, return empty array
  return [];
}

// Export functions for use in other files
window.SoccerAPI = {
  fetchLiveScores,
  fetchTodaysMatches,
  fetchLeagueStandings,
  fetchTopScorers,
  fetchUpcomingFixtures,
  fetchRecentResults,
  getFavorites,
  addToFavorites,
  removeFromFavorites,
  isFavorite,
  startLiveScoreRefresh,
  searchTeamsPlayers,
  formatDate,
  formatScore,
  getStatusText
};