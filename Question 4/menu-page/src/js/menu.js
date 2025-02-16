// This file implements the functionality for the category filter, allowing users to switch between food categories and includes smooth scrolling effects for navigation.

document.addEventListener('DOMContentLoaded', () => {
    // Theme toggle functionality
    const themeSwitch = document.getElementById('theme-switch');
    themeSwitch.addEventListener('click', () => {
        document.body.dataset.theme = document.body.dataset.theme === 'dark' ? 'light' : 'dark';
        localStorage.setItem('theme', document.body.dataset.theme);
    });

    // Load saved theme
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.body.dataset.theme = savedTheme;

    // Category filtering with animation
    const categoryButtons = document.querySelectorAll('.category-button');
    const menuItems = document.querySelectorAll('.menu-item');

    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.dataset.category;
            
            menuItems.forEach(item => {
                item.style.opacity = '0';
                setTimeout(() => {
                    item.style.display = category === 'all' || item.dataset.category === category ? 'block' : 'none';
                    item.style.opacity = '1';
                }, 300);
            });

            // Update active button
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
        });
    });
});