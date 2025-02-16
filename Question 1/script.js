document.addEventListener('DOMContentLoaded', () => {
    const mainImage = document.getElementById('mainImage');
    const thumbnails = document.querySelectorAll('.thumb');
    const quantity = document.getElementById('quantity');
    const decreaseBtn = document.getElementById('decreaseQty');
    const increaseBtn = document.getElementById('increaseQty');
    const addToCartBtn = document.querySelector('.btn-add-cart');
    const modal = document.getElementById('cartModal');

    // Thumbnail switcher
    thumbnails.forEach(thumb => {
        thumb.addEventListener('click', () => {
            mainImage.src = thumb.src.replace('100', '500');
        });
    });

    // Quantity selector
    decreaseBtn.addEventListener('click', () => {
        if (quantity.value > 1) quantity.value--;
    });

    increaseBtn.addEventListener('click', () => {
        quantity.value++;
    });

    // Add to cart modal
    addToCartBtn.addEventListener('click', () => {
        modal.style.display = 'block';
        setTimeout(() => {
            modal.style.display = 'none';
        }, 2000);
    });

    // Image zoom functionality
    const zoomContainer = document.getElementById('zoomContainer');
    
    zoomContainer.addEventListener('mousemove', (e) => {
        const { left, top, width, height } = zoomContainer.getBoundingClientRect();
        const x = (e.clientX - left) / width * 100;
        const y = (e.clientY - top) / height * 100;
        mainImage.style.transformOrigin = `${x}% ${y}%`;
    });

    zoomContainer.addEventListener('mouseenter', () => {
        mainImage.style.transform = 'scale(1.5)';
    });

    zoomContainer.addEventListener('mouseleave', () => {
        mainImage.style.transform = 'scale(1)';
    });

    // Variant selectors
    const colorBtns = document.querySelectorAll('.color-btn');
    const sizeBtns = document.querySelectorAll('.size-btn');

    function updateVariantSelection(buttons, clickedBtn) {
        buttons.forEach(btn => btn.classList.remove('active'));
        clickedBtn.classList.add('active');
    }

    colorBtns.forEach(btn => {
        btn.addEventListener('click', () => updateVariantSelection(colorBtns, btn));
    });

    sizeBtns.forEach(btn => {
        btn.addEventListener('click', () => updateVariantSelection(sizeBtns, btn));
    });

    // Wishlist functionality
    const wishlistBtn = document.querySelector('.wishlist-btn');
    wishlistBtn.addEventListener('click', () => {
        const icon = wishlistBtn.querySelector('i');
        icon.classList.toggle('far');
        icon.classList.toggle('fas');
        icon.style.color = icon.classList.contains('fas') ? '#ff4444' : '';
    });

    // Enhanced modal
    const modalClose = document.querySelector('.modal-close');
    modalClose.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Tabs functionality
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const tabId = btn.dataset.tab;
            
            // Remove active class from all buttons and contents
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            
            // Add active class to clicked button and corresponding content
            btn.classList.add('active');
            document.getElementById(tabId).classList.add('active');
        });
    });
});