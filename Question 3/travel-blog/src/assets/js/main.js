// This file contains the main JavaScript functionality for the travel blog.
// It handles the collapsible sidebar, smooth scrolling, and the "Load More" button functionality.

document.addEventListener('DOMContentLoaded', function() {
    // Collapsible sidebar functionality
    const sidebarToggle = document.querySelector('.sidebar-toggle');
    const sidebar = document.querySelector('.sidebar-content');

    sidebarToggle.addEventListener('click', function() {
        sidebar.classList.toggle('collapsed');
    });

    // Smooth scrolling functionality
    const scrollLinks = document.querySelectorAll('a[href^="#"]');

    scrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            targetElement.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Load More button functionality
    const loadMoreButton = document.querySelector('#load-more');
    const blogPosts = document.querySelectorAll('.post-card');

    let visiblePosts = 3; // Number of posts to show initially

    function loadMorePosts() {
        for (let i = visiblePosts; i < visiblePosts + 3 && i < blogPosts.length; i++) {
            blogPosts[i].style.display = 'block';
        }
        visiblePosts += 3;

        if (visiblePosts >= blogPosts.length) {
            loadMoreButton.style.display = 'none'; // Hide button if no more posts
        }
    }

    loadMoreButton.addEventListener('click', loadMorePosts);
});