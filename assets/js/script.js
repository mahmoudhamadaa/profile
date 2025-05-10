 // Loading Screen
        window.addEventListener('load', () => {
            const loadingScreen = document.getElementById('loading-screen');
            loadingScreen.style.opacity = '0';
            setTimeout(() => {
                loadingScreen.style.display = 'none';
            }, 500);
        });

        // Navbar Scroll Effect
        window.addEventListener('scroll', () => {
            const navbar = document.getElementById('navbar');
            if (window.scrollY > 50) {
                navbar.classList.add('bg-white', 'shadow-lg');
            } else {
                navbar.classList.remove('bg-white', 'shadow-lg');
            }
        });

        // Progress Bars Animation
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.width = entry.target.dataset.width + '%';
                }
            });
        });

        document.querySelectorAll('.progress-bar').forEach((bar) => {
            observer.observe(bar);
        });

        // Smooth Scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        // Mobile Menu
        const mobileMenuBtn = document.querySelector('nav button');
        const mobileMenu = document.querySelector('nav div.hidden');
        
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            mobileMenu.classList.toggle('flex');
            mobileMenu.classList.toggle('flex-col');
            mobileMenu.classList.toggle('absolute');
            mobileMenu.classList.toggle('top-full');
            mobileMenu.classList.toggle('right-0');
            mobileMenu.classList.toggle('w-full');
            mobileMenu.classList.toggle('bg-white');
            mobileMenu.classList.toggle('p-4');
        });

        // Contact Form
        document.getElementById('contact-form').addEventListener('submit', (e) => {
            e.preventDefault();
            // Add your form submission logic here
            alert('شكراً لتواصلك! سيتم الرد عليك قريباً.');
        });