// Mobile menu toggle functionality
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.remove('hidden');
    } else {
        mobileMenu.classList.add('hidden');
    }
}

// Feature section toggle functionality
function toggleFeature(featureId) {
    const content = document.getElementById(featureId + '-content');
    const icon = document.getElementById(featureId + '-icon');
    
    // Hide all images first
    const allImages = [
        'contract-management-image',
        'project-accounting-image',
        'time-expense-image',
        'budgeting-image',
        'incurred-cost-image',
        'payroll-hr-image'
    ];
    
    allImages.forEach(imgId => {
        const img = document.getElementById(imgId);
        if (img) {
            img.classList.add('hidden');
        }
    });
    
    if (content.classList.contains('hidden')) {
        // Close all other dropdowns first
        const allContents = [
            'contract-management-content',
            'project-accounting-content',
            'time-expense-content',
            'budgeting-content',
            'incurred-cost-content',
            'payroll-hr-content'
        ];
        
        const allIcons = [
            'contract-management-icon',
            'project-accounting-icon',
            'time-expense-icon',
            'budgeting-icon',
            'incurred-cost-icon',
            'payroll-hr-icon'
        ];
        
        allContents.forEach(contentId => {
            const contentElement = document.getElementById(contentId);
            if (contentElement && contentId !== featureId + '-content') {
                contentElement.classList.add('hidden');
            }
        });
        
        allIcons.forEach(iconId => {
            const iconElement = document.getElementById(iconId);
            if (iconElement && iconId !== featureId + '-icon') {
                iconElement.textContent = '+';
            }
        });
        
        // Open current dropdown
        content.classList.remove('hidden');
        icon.textContent = '−';
        
        // Show corresponding image
        const image = document.getElementById(featureId + '-image');
        if (image) {
            image.classList.remove('hidden');
        }
    } else {
        // Close current dropdown
        content.classList.add('hidden');
        icon.textContent = '+';
        
        // Hide corresponding image
        const image = document.getElementById(featureId + '-image');
        if (image) {
            image.classList.add('hidden');
        }
        
        // Show default image (contract management)
        const defaultImage = document.getElementById('contract-management-image');
        if (defaultImage) {
            defaultImage.classList.remove('hidden');
        }
    }
}

// General section toggle functionality (if needed)
function toggleSection(sectionId) {
    const content = document.getElementById(sectionId + '-content');
    const icon = document.getElementById(sectionId + '-icon');
    
    if (content.classList.contains('hidden')) {
        content.classList.remove('hidden');
        icon.textContent = '−';
        icon.style.transform = 'rotate(0deg)';
    } else {
        content.classList.add('hidden');
        icon.textContent = '+';
        icon.style.transform = 'rotate(0deg)';
    }
}
