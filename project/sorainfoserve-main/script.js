// Product Data
const products = {
    'gaming-beast': {
        name: 'Gaming Beast',
        price: '₹59,999',
        originalPrice: '₹69,999',
        savings: 'Save ₹10,000',
        image: 'pcd1.jpg',
        purpose: 'High-performance gaming and smooth multitasking',
        description: 'A powerful build featuring Intel i5-14400F, RTX 3050, and fast 16GB RAM. Perfect for gaming, streaming, and productivity with vibrant visuals on a 27-inch 100Hz LG monitor.',
        specs: [
            { component: 'Processor', specification: 'Intel Core i5-14400F', value: '' },
            { component: 'Motherboard', specification: 'Asus B660m Ayw WiFi', value: '' },
            { component: 'Memory', specification: 'Corsair 16GB 6000MHz', value: '' },
            { component: 'Storage', specification: 'Crucial P1 1TB', value: '' },
            { component: 'Case', specification: 'Ant eSports 205 6F ARGB', value: '' },
            { component: 'Power Supply', specification: 'Deepcool 650W', value: '' },
            { component: 'Graphics Card', specification: 'MSI RTX 3050', value: '' },
            { component: 'Monitor', specification: 'LG 27" 100Hz Pure Colour', value: '' }
        ],
        alternatives: [
            { name: 'Ultimate Workstation', price: '₹89,999', savings: 'Save ₹30,000', id: 'office-pro' },
            { name: 'Creator Pro', price: '₹69,999', savings: 'Save ₹10,000', id: 'creators-rig' }
        ]
    },
    'creators-rig': {
        name: 'Creator Pro',
        price: '₹69,999',
        originalPrice: '₹79,999',
        savings: 'Save ₹10,000',
        image: 'pcd2.jpg',
        purpose: 'High-performance workstation for creators and gamers',
        description: 'A versatile build featuring Intel i5-12400F, RTX 3060, and fast 16GB RAM. Ideal for content creation, gaming, and smooth multitasking with a 27-inch 144Hz LG IPS monitor.',
        specs: [
            { component: 'Processor', specification: 'Intel Core i5-12400F', value: '' },
            { component: 'Motherboard', specification: 'B560 Steel Legend', value: '' },
            { component: 'Memory', specification: 'Adata XPG D50 16GB (8x2GB)', value: '' },
            { component: 'Storage', specification: 'WD Blue SN550 1TB', value: '' },
            { component: 'Graphics Card', specification: 'RTX 3060 Zotac AMP', value: '' },
            { component: 'Power Supply', specification: 'Cooler Master MWE 650', value: '' },
            { component: 'Case', specification: 'Amr eSports Ice 411MT', value: '' },
            { component: 'Monitor', specification: 'LG 27" 144Hz IPS', value: '' }
        ],
        alternatives: [
            { name: 'Gaming Beast', price: '₹59,999', savings: 'Save ₹10,000', id: 'gaming-beast' },
            { name: 'Ultimate Workstation', price: '₹89,999', savings: 'Save ₹20,000', id: 'office-pro' }
        ]
    },
    'office-pro': {
        name: 'Ultimate Workstation',
        price: '₹89,999',
        originalPrice: '₹99,999',
        savings: 'Save ₹10,000',
        image: 'pcd3.jpg',
        purpose: 'Efficient workstation for productivity and gaming',
        description: 'A balanced build featuring Ryzen 5 9600X, RTX 5060, and fast 32GB RAM. Great for office work, gaming, and multitasking with reliable storage and cooling.',
        specs: [
            { component: 'Processor', specification: 'Ryzen 5 9600X', value: '' },
            { component: 'Motherboard', specification: 'Asus Ayw B660m', value: '' },
            { component: 'Memory', specification: 'Crucial Pro 32GB (16x2) 6000MHz', value: '' },
            { component: 'Graphics Card', specification: 'Zotac RTX 5060', value: '' },
            { component: 'Case', specification: 'Cooler Master CMP520 Mesh', value: '' },
            { component: 'Cooler', specification: 'Ant eSports Ice 240 ARGB', value: '' },
            { component: 'Storage', specification: 'Crucial P1 1TB', value: '' },
            { component: 'Power Supply', specification: 'Corsair VS650', value: '' }
        ],
        alternatives: [
            { name: 'Value Builder', price: '₹79,999', savings: 'Save ₹10,000', id: 'budget-builder' },
            { name: 'Gaming Beast', price: '₹59,999', savings: 'Save ₹30,000', id: 'gaming-beast' }
        ]
    },
    'budget-builder': {
        name: 'Value Builder',
        price: '₹79,999',
        originalPrice: '₹89,999',
        savings: 'Save ₹10,000',
        image: 'pcd4.jpg',
        purpose: 'Modern entry-level system for gaming, creative, and everyday tasks',
        description: 'Modern entry-level system featuring Ryzen 5 7600X, Gigabyte B650M DSH, and Crucial 16GB DDR5 6000MHz RAM. Includes Gigabyte Eagle OC RTX 4060 Triple Fan, WD SN770 1TB SSD, Gigabyte 650W Gold PSU, Zebronics Mercury Cabinet, Zebronics AIO 240mm cooling, and a stunning GIGABYTE M27Q 27" 240Hz monitor. Perfect for gaming, creative, and everyday tasks.',
        specs: [
            { component: 'Processor', specification: 'Ryzen 5 7600X', value: '' },
            { component: 'Motherboard', specification: 'Gigabyte B650M DSH', value: '' },
            { component: 'Memory', specification: 'Crucial 16GB DDR5 6000MHz', value: '' },
            { component: 'Graphics Card', specification: 'Gigabyte Eagle OC RTX 4060 Triple Fan', value: '' },
            { component: 'Case', specification: 'Zebronics Mercury Cabinet', value: '' },
            { component: 'Cooler', specification: 'Zebronics AIO 240mm', value: '' },
            { component: 'Power Supply', specification: 'Gigabyte 650W Gold Rated', value: '' },
            { component: 'Storage', specification: 'WD SN770 1TB', value: '' },
            { component: 'Monitor', specification: 'GIGABYTE M27Q 27" 240Hz', value: '' }
        ],
        alternatives: [
            { name: 'Ultimate Workstation', price: '₹89,999', savings: 'Upgrade for ₹10,000', id: 'office-pro' },
            { name: 'Gaming Beast', price: '₹59,999', savings: 'Upgrade for ₹20,000', id: 'gaming-beast' }
        ]
    }
};

// DOM Elements
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const revealElements = document.querySelectorAll('.reveal');


// Debounce function for better performance
function debounce(func, wait = 20, immediate = true) {
    let timeout;
    return function() {
        const context = this, args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

// Scroll Animation Function
function revealOnScroll() {
    const windowHeight = window.innerHeight;
    const revealPoint = 150;
    
    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        
        if (elementTop < windowHeight - revealPoint) {
            element.classList.add('active');
        } else {
            element.classList.remove('active');
        }
    });
}

// Add scroll event listener with debounce for better performance
window.addEventListener('scroll', debounce(revealOnScroll));

// Initial check on page load
window.addEventListener('load', revealOnScroll);
const modal = document.getElementById('productModal');
const modalContent = document.getElementById('modalContent');
const contactForm = document.getElementById('contactForm');

// Mobile Navigation Toggle
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Scroll to section function
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Navbar background on scroll - removed redundant code since both conditions set the same background

// Show product details modal
function showProductDetails(productId) {
    const product = products[productId];
    if (!product) return;

    const modalHTML = `
        <div class="modal-product">
            <div class="modal-header">
                <div class="modal-image">
                    <img src="${product.image}" alt="${product.name}" />
                </div>
                <div class="modal-info">
                    <h2>${product.name}</h2>
                    <div class="price">${product.price} <span style="font-size: 0.8em; opacity: 0.7; text-decoration: line-through;">${product.originalPrice}</span></div>
                    <div class="purpose">${product.purpose}</div>
                    <p>${product.description}</p>
                    <button class="contact-btn" onclick="scrollToSection('contact'); closeModal();">
                        <i class="fas fa-shopping-cart"></i>
                        Contact for Purchase
                    </button>
                </div>
            </div>
            
            <h3 style="margin-bottom: 1rem;">Component Specifications</h3>
            <table class="specs-table">
                <thead>
                    <tr>
                        <th>Component</th>
                        <th>Specification</th>
                        <th>Value</th>
                    </tr>
                </thead>
                <tbody>
                    ${product.specs.map(spec => `
                        <tr>
                            <td>${spec.component}</td>
                            <td>${spec.specification}</td>
                            <td>${spec.value}</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>

            <div class="alternatives">
                <h3>Price-Conscious Alternatives</h3>
                ${product.alternatives.map(alt => `
                    <div class="alternative-item">
                        <div class="alternative-info">
                            <h4>${alt.name}</h4>
                            <p>${alt.savings}</p>
                        </div>
                        <div class="alternative-price">
                            <div class="price">${alt.price}</div>
                        </div>
                        <button class="view-alt-btn" onclick="showProductDetails('${alt.id}')">
                            View Details
                        </button>
                    </div>
                `).join('')}
            </div>
        </div>
    `;

    modalContent.innerHTML = modalHTML;
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Close modal
function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.style.display === 'block') {
        closeModal();
    }
});

// Contact form submission
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const submitBtn = this.querySelector('.btn-submit');
    const originalText = submitBtn.innerHTML;
    
    // Show loading state
    submitBtn.innerHTML = '<div class="loading"></div> Sending...';
    submitBtn.disabled = true;
    
    // Simulate form submission (replace with actual form submission logic)
    setTimeout(() => {
        // Reset form
        this.reset();
        
        // Show success message
        submitBtn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
        submitBtn.style.background = 'linear-gradient(135deg, #4caf50 0%, #8bc34a 100%)';
        
        setTimeout(() => {
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
            submitBtn.style.background = 'linear-gradient(135deg, #ff6b9d 0%, #ffa726 100%)';
        }, 3000);
    }, 2000);
});

// Image editing functionality for admin (you can expand this)
function enableImageEditing() {
    const productImages = document.querySelectorAll('.product-image img');
    
    productImages.forEach(img => {
        img.addEventListener('dblclick', function() {
            const newImageUrl = prompt('Enter new image URL:', this.src);
            if (newImageUrl && newImageUrl.trim() !== '') {
                this.src = newImageUrl;
                
                // Update the product data if needed
                const productCard = this.closest('.product-card');
                const productId = this.id.replace('-img', '');
                if (products[productId]) {
                    products[productId].image = newImageUrl;
                }
                
                // Show success message
                this.style.border = '3px solid #4caf50';
                setTimeout(() => {
                    this.style.border = 'none';
                }, 2000);
            }
        });
    });
}

// Initialize image editing (call this function when needed)
// enableImageEditing(); // Uncomment to enable double-click image editing

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for scroll animations
document.addEventListener('DOMContentLoaded', () => {
    const elementsToAnimate = document.querySelectorAll('.product-card, .feature, .contact-item');
    
    elementsToAnimate.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease-out';
        observer.observe(el);
    });
});

// Particle effect for hero section (optional enhancement)
function createParticles() {
    const hero = document.querySelector('.hero');
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'particles-container';
    particlesContainer.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        overflow: hidden;
    `;
    
    // Create floating particles
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: 4px;
            height: 4px;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: float ${3 + Math.random() * 4}s infinite ease-in-out;
            animation-delay: ${Math.random() * 2}s;
        `;
        particlesContainer.appendChild(particle);
    }
    
    hero.appendChild(particlesContainer);
    
    // Add CSS animation for particles
    const style = document.createElement('style');
    style.textContent = `
        @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.3; }
            50% { transform: translateY(-20px) rotate(180deg); opacity: 0.8; }
        }
    `;
    document.head.appendChild(style);
}

// Initialize particles on load
// createParticles(); // Uncomment to enable particle effect

// Search functionality (if you want to add a search feature later)
function searchProducts(query) {
    const searchResults = [];
    const lowercaseQuery = query.toLowerCase();
    
    Object.keys(products).forEach(key => {
        const product = products[key];
        if (
            product.name.toLowerCase().includes(lowercaseQuery) ||
            product.description.toLowerCase().includes(lowercaseQuery) ||
            product.specs.some(spec => 
                spec.component.toLowerCase().includes(lowercaseQuery) ||
                spec.specification.toLowerCase().includes(lowercaseQuery)
            )
        ) {
            searchResults.push({ id: key, ...product });
        }
    });
    
    return searchResults;
}

// Price range filter (for future enhancement)
function filterProductsByPrice(minPrice, maxPrice) {
    const filteredProducts = [];
    
    Object.keys(products).forEach(key => {
        const product = products[key];
        const price = parseFloat(product.price.replace(/[,]/g, '').replace('$', ''));
        
        if (price >= minPrice && price <= maxPrice) {
            filteredProducts.push({ id: key, ...product });
        }
    });
    
    return filteredProducts;
}

// Performance optimization: Lazy loading for images
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading
document.addEventListener('DOMContentLoaded', lazyLoadImages);

// WhatsApp integration
function openWhatsApp(message = "Hi! I'm interested in your PC builds.") {
    const phoneNumber = "7797434543"; // Replace with your actual WhatsApp number
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
}

// Google Forms integration (you'll need to replace with your actual form URL)
function openGoogleForm() {
    const googleFormUrl = "https://forms.google.com/your-form-url"; // Replace with your actual Google Form URL
    window.open(googleFormUrl, '_blank');
}

// Update contact form to integrate with Google Forms
function updateContactFormForGoogleForms() {
    const contactSection = document.querySelector('.contact-form');
    const googleFormButton = document.createElement('button');
    googleFormButton.innerHTML = `
        <i class="fas fa-external-link-alt"></i>
        Fill Google Form
    `;
    googleFormButton.className = 'btn-submit';
    googleFormButton.style.marginTop = '1rem';
    googleFormButton.onclick = openGoogleForm;
    
    contactSection.appendChild(googleFormButton);
}

// Call this function if you want to add Google Form integration
// updateContactFormForGoogleForms(); // Uncomment to add Google Form button

// Product comparison functionality
function compareProducts(productId1, productId2) {
    const product1 = products[productId1];
    const product2 = products[productId2];
    
    if (!product1 || !product2) return null;
    
    return {
        product1: product1,
        product2: product2,
        differences: {
            price: parseFloat(product1.price.replace(/[$,]/g, '')) - parseFloat(product2.price.replace(/[$,]/g, '')),
            specs: product1.specs.map((spec, index) => ({
                component: spec.component,
                product1: spec.specification,
                product2: product2.specs[index] ? product2.specs[index].specification : 'N/A'
            }))
        }
    };
}

// Newsletter subscription (optional feature)
function subscribeNewsletter(email) {
    // Simulate newsletter subscription
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Subscribed ${email} to newsletter`);
            resolve(true);
        }, 1000);
    });
}

// Add newsletter subscription to footer
function addNewsletterSubscription() {
    const footer = document.querySelector('.footer-content');
    const newsletterSection = document.createElement('div');
    newsletterSection.className = 'footer-section';
    newsletterSection.innerHTML = `
        <h4>Stay Updated</h4>
        <p>Get notified about new builds and special offers.</p>
        <div style="display: flex; gap: 0.5rem; margin-top: 1rem;">
            <input 
                type="email" 
                placeholder="Your email" 
                id="newsletter-email"
                style="flex: 1; padding: 10px; border: none; border-radius: 5px; background: rgba(255,255,255,0.1); color: white;"
            />
            <button 
                onclick="handleNewsletterSubscription()"
                style="padding: 10px 20px; background: #ff6b9d; border: none; border-radius: 5px; color: white; cursor: pointer;"
            >
                Subscribe
            </button>
        </div>
    `;
    footer.appendChild(newsletterSection);
}

async function handleNewsletterSubscription() {
    const email = document.getElementById('newsletter-email').value;
    if (!email) return;
    
    try {
        await subscribeNewsletter(email);
        document.getElementById('newsletter-email').value = '';
        alert('Successfully subscribed to newsletter!');
    } catch (error) {
        alert('Error subscribing. Please try again.');
    }
}

// Call this function to add newsletter subscription
// addNewsletterSubscription(); // Uncomment to add newsletter subscription

// Analytics and tracking (replace with your actual analytics code)
function trackProductView(productId) {
    // Google Analytics or other tracking code
    if (typeof gtag !== 'undefined') {
        gtag('event', 'view_item', {
            item_id: productId,
            item_name: products[productId]?.name,
            item_category: 'PC Build',
            value: parseFloat(products[productId]?.price.replace(/[$,]/g, ''))
        });
    }
    
    console.log(`Product viewed: ${productId}`);
}

function trackContactFormSubmission() {
    if (typeof gtag !== 'undefined') {
        gtag('event', 'generate_lead', {
            currency: 'USD',
            value: 1.00
        });
    }
    
    console.log('Contact form submitted');
}

// Update existing functions to include tracking
const originalShowProductDetails = showProductDetails;
showProductDetails = function(productId) {
    trackProductView(productId);
    return originalShowProductDetails(productId);
};

// Admin panel functionality (for managing products)
function createAdminPanel() {
    const adminButton = document.createElement('button');
    adminButton.innerHTML = 'Admin';
    adminButton.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: #333;
        color: white;
        border: none;
        padding: 10px;
        border-radius: 5px;
        cursor: pointer;
        z-index: 1001;
        display: none;
    `;
    
    adminButton.onclick = () => {
        const password = prompt('Enter admin password:');
        if (password === 'admin123') { // Change this to a secure password
            enableImageEditing();
            alert('Image editing enabled! Double-click on any product image to change it.');
        }
    };
    
    document.body.appendChild(adminButton);
    
    // Show admin button on key combination (Ctrl + Alt + A)
    document.addEventListener('keydown', (e) => {
        if (e.ctrlKey && e.altKey && e.key === 'a') {
            adminButton.style.display = 'block';
        }
    });
}

// Initialize admin panel
createAdminPanel();

// Error handling for images
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('error', function() {
            this.src = 'https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=400&h=300&fit=crop'; // Fallback image
            console.log(`Failed to load image: ${this.dataset.originalSrc || this.src}`);
        });
    });
});

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('SORAINFOSERVE website loaded successfully!');
    
    // Add any initialization code here
    // Example: Load user preferences, check for saved cart items, etc.
});

// Export functions for testing or external use
window.SORAINFOSERVE = {
    products,
    showProductDetails,
    closeModal,
    scrollToSection,
    searchProducts,
    filterProductsByPrice,
    compareProducts,
    openWhatsApp,
    trackProductView,
    trackContactFormSubmission
};
