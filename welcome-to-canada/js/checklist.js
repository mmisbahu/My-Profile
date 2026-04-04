// Welcome to Canada - Checklist Functionality

class ChecklistManager {
    constructor() {
        this.storageKey = 'welcomeToCanada_checklist';
        this.initializeChecklist();
    }

    initializeChecklist() {
        this.loadChecklist();
        this.renderChecklist();
        this.setupEventListeners();
        this.updateProgress();
    }

    // Get all checklist items
    getAllItems() {
        return [
            {
                id: 1,
                category: 'Housing & Transportation',
                title: 'Find temporary accommodation',
                description: 'Secure a place to stay (hotel, Airbnb, friends, hostel)',
                completed: false,
                priority: 'HIGH'
            },
            {
                id: 2,
                category: 'Housing & Transportation',
                title: 'Get a SIM card',
                description: 'Purchase a Canadian phone plan and SIM card',
                completed: false,
                priority: 'HIGH'
            },
            {
                id: 3,
                category: 'Housing & Transportation',
                title: 'Arrange airport transportation',
                description: 'Plan how to get from airport to accommodation',
                completed: false,
                priority: 'HIGH'
            },
            {
                id: 4,
                category: 'Communication',
                title: 'Contact local settlement services',
                description: 'Reach out to a settlement agency in your city',
                completed: false,
                priority: 'MEDIUM'
            },
            {
                id: 5,
                category: 'Communication',
                title: 'Notify employer/school of arrival',
                description: 'Confirm your starting date and orientation details',
                completed: false,
                priority: 'MEDIUM'
            },
            {
                id: 6,
                category: 'Communication',
                title: 'Set up email address',
                description: 'Create a Canadian phone number contact record',
                completed: false,
                priority: 'LOW'
            },
            {
                id: 7,
                category: 'Basic Needs',
                title: 'Get groceries',
                description: 'Find local grocery stores and stock up on essentials',
                completed: false,
                priority: 'HIGH'
            },
            {
                id: 8,
                category: 'Basic Needs',
                title: 'Open a bank account',
                description: 'Visit bank with passport and PR documents',
                completed: false,
                priority: 'MEDIUM'
            },
            {
                id: 9,
                category: 'Basic Needs',
                title: 'Register with healthcare',
                description: 'Apply for provincial health insurance',
                completed: false,
                priority: 'HIGH'
            },
            {
                id: 10,
                category: 'Settlement Services',
                title: 'Attend orientation program',
                description: 'Join settlement agency orientation if available',
                completed: false,
                priority: 'MEDIUM'
            },
            {
                id: 11,
                category: 'Settlement Services',
                title: 'Find a family doctor',
                description: 'Register with a doctor\'s office or clinic',
                completed: false,
                priority: 'MEDIUM'
            },
            {
                id: 12,
                category: 'Settlement Services',
                title: 'Explore public transportation',
                description: 'Learn how to use local transit system',
                completed: false,
                priority: 'LOW'
            },
            {
                id: 13,
                category: 'Important Documents',
                title: 'Apply for Social Insurance Number (SIN)',
                description: 'Submit application at Service Canada office',
                completed: false,
                priority: 'CRITICAL'
            },
            {
                id: 14,
                category: 'Important Documents',
                title: 'Apply for PR Card',
                description: 'Submit application with required documents (3 months processing)',
                completed: false,
                priority: 'HIGH'
            },
            {
                id: 15,
                category: 'Important Documents',
                title: 'Get proof of residence',
                description: 'Collect documents for official address change (utility bill or rental agreement)',
                completed: false,
                priority: 'MEDIUM'
            },
            {
                id: 16,
                category: 'Financial Setup',
                title: 'Set up direct deposit',
                description: 'Configure direct deposit for employment income',
                completed: false,
                priority: 'MEDIUM'
            },
            {
                id: 17,
                category: 'Financial Setup',
                title: 'Register CRA My Account',
                description: 'Create account at CRA website for tax information',
                completed: false,
                priority: 'LOW'
            }
        ];
    }

    // Load checklist from localStorage
    loadChecklist() {
        const saved = localStorage.getItem(this.storageKey);
        if (saved) {
            const savedItems = JSON.parse(saved);
            const allItems = this.getAllItems();
            
            allItems.forEach(item => {
                const savedItem = savedItems.find(s => s.id === item.id);
                if (savedItem) {
                    item.completed = savedItem.completed;
                }
            });
            
            this.items = allItems;
        } else {
            this.items = this.getAllItems();
        }
    }

    // Save checklist to localStorage
    saveChecklist() {
        localStorage.setItem(this.storageKey, JSON.stringify(this.items));
    }

    // Update progress
    updateProgress() {
        const total = this.items.length;
        const completed = this.items.filter(item => item.completed).length;
        const percentage = Math.round((completed / total) * 100);
        
        const progressBar = document.querySelector('.progress-bar');
        const progressText = document.querySelector('.progress-text');
        
        if (progressBar) {
            progressBar.style.width = percentage + '%';
            progressBar.textContent = percentage + '%';
        }
        
        if (progressText) {
            progressText.textContent = `${completed} of ${total} tasks completed`;
        }
        
        // Update stat boxes
        this.updateStatistics();
    }

    // Update statistics
    updateStatistics() {
        const total = this.items.length;
        const completed = this.items.filter(item => item.completed).length;
        const remaining = total - completed;
        
        const completedBox = document.getElementById('completedCount');
        const remainingBox = document.getElementById('remainingCount');
        const percentageBox = document.getElementById('percentageComplete');
        
        if (completedBox) completedBox.textContent = completed;
        if (remainingBox) remainingBox.textContent = remaining;
        if (percentageBox) percentageBox.textContent = Math.round((completed / total) * 100);
    }

    // Toggle item completion
    toggleItem(id) {
        const item = this.items.find(i => i.id === id);
        if (item) {
            item.completed = !item.completed;
            this.saveChecklist();
            this.updateProgress();
            
            // Show notification
            if (window.welcomeToCanada) {
                window.welcomeToCanada.showNotification(
                    item.completed ? '✓ Task marked complete!' : '✗ Task marked incomplete',
                    item.completed ? 'success' : 'info',
                    2000
                );
            }
        }
    }

    // Render checklist
    renderChecklist() {
        const container = document.getElementById('checklistContainer');
        if (!container) return;
        
        const categories = [...new Set(this.items.map(item => item.category))];
        
        container.innerHTML = '';
        
        categories.forEach(category => {
            const categoryItems = this.items.filter(item => item.category === category);
            
            const categorySection = document.createElement('div');
            categorySection.className = 'checklist-category';
            
            const categoryTitle = document.createElement('h4');
            categoryTitle.className = 'section-title';
            categoryTitle.style.marginTop = '2rem';
            categoryTitle.textContent = category;
            categorySection.appendChild(categoryTitle);
            
            const categoryContainer = document.createElement('div');
            categoryContainer.className = 'checklist-list';
            
            categoryItems.forEach(item => {
                const itemElement = document.createElement('div');
                itemElement.className = 'checklist-item-full';
                
                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.className = 'checklist-checkbox';
                checkbox.id = `task-${item.id}`;
                checkbox.checked = item.completed;
                checkbox.addEventListener('change', () => this.toggleItem(item.id));
                
                const label = document.createElement('label');
                label.className = 'w-100';
                label.htmlFor = `task-${item.id}`;
                
                const title = document.createElement('h5');
                title.textContent = item.title;
                if (item.completed) title.style.textDecoration = 'line-through';
                label.appendChild(title);
                
                const description = document.createElement('p');
                description.textContent = item.description;
                label.appendChild(description);
                
                const priority = document.createElement('small');
                priority.style.cssText = `
                    display: inline-block;
                    padding: 0.25rem 0.5rem;
                    border-radius: 3px;
                    font-weight: 600;
                    margin-top: 0.5rem;
                `;
                
                switch(item.priority) {
                    case 'CRITICAL':
                        priority.style.background = '#dc3545';
                        priority.style.color = 'white';
                        break;
                    case 'HIGH':
                        priority.style.background = '#ffc107';
                        priority.style.color = '#212529';
                        break;
                    case 'MEDIUM':
                        priority.style.background = '#17a2b8';
                        priority.style.color = 'white';
                        break;
                    case 'LOW':
                        priority.style.background = '#6c757d';
                        priority.style.color = 'white';
                        break;
                }
                priority.textContent = item.priority;
                label.appendChild(priority);
                
                itemElement.appendChild(checkbox);
                itemElement.appendChild(label);
                categoryContainer.appendChild(itemElement);
            });
            
            categorySection.appendChild(categoryContainer);
            container.appendChild(categorySection);
        });
    }

    // Print checklist
    printChecklist() {
        const title = document.title;
        window.print();
    }

    // Reset checklist
    resetChecklist() {
        if (confirm('Are you sure you want to reset the checklist? This cannot be undone.')) {
            this.items.forEach(item => item.completed = false);
            this.saveChecklist();
            this.renderChecklist();
            this.updateProgress();
            
            if (window.welcomeToCanada) {
                window.welcomeToCanada.showNotification(
                    'Checklist has been reset',
                    'info',
                    2000
                );
            }
        }
    }

    // Export checklist
    exportChecklist() {
        const data = {
            exportDate: new Date().toLocaleDateString(),
            totalTasks: this.items.length,
            completedTasks: this.items.filter(item => item.completed).length,
            tasks: this.items
        };
        
        const dataStr = JSON.stringify(data, null, 2);
        const dataBlob = new Blob([dataStr], { type: 'application/json' });
        const url = URL.createObjectURL(dataBlob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `welcome-to-canada-checklist-${new Date().toISOString().split('T')[0]}.json`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
        
        if (window.welcomeToCanada) {
            window.welcomeToCanada.showNotification(
                'Checklist exported successfully',
                'success',
                2000
            );
        }
    }

    // Setup event listeners
    setupEventListeners() {
        const printBtn = document.getElementById('printChecklistBtn');
        const resetBtn = document.getElementById('resetChecklistBtn');
        const exportBtn = document.getElementById('exportChecklistBtn');
        
        if (printBtn) {
            printBtn.addEventListener('click', () => this.printChecklist());
        }
        
        if (resetBtn) {
            resetBtn.addEventListener('click', () => this.resetChecklist());
        }
        
        if (exportBtn) {
            exportBtn.addEventListener('click', () => this.exportChecklist());
        }
    }
}

// Initialize checklist when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('checklistContainer')) {
        window.checklistManager = new ChecklistManager();
    }
});
