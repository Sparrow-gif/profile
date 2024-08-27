
        // Detect scroll and add class to navbar
        window.addEventListener('scroll', function() {
            var navbar = document.querySelector('.navbar');
            if (window.scrollY > 10) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    
    // Add event listener to all nav-link elements
    document.querySelectorAll('.nav-link').forEach(function (link) {
        link.addEventListener('click', function () {
            // Remove active class from all nav-link elements
            document.querySelectorAll('.nav-link').forEach(function (navLink) {
                navLink.classList.remove('active');
            });
            // Add active class to the clicked nav-link
            this.classList.add('active');
        });
    });
    


    document.getElementById('darkModeToggle').addEventListener('change', function() {
            document.body.classList.toggle('dark-mode', this.checked);
            document.querySelector('.author-header').classList.toggle('dark-mode', this.checked);
        });



        document.getElementById('alertBtn').addEventListener('click', function() {
            Swal.fire({
                title: 'Download successfull',
                text: '',
                icon: 'success',
                confirmButtonText: 'Ok'
            });
        });
    


        document.addEventListener("scroll", function() {
    const navbar = document.getElementById("navbar");
    if (window.scrollY > 30) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

    
        document.addEventListener('DOMContentLoaded', function () {
            const skillBars = document.querySelectorAll('.skill-bar-fill');
            const observerOptions = {
                threshold: 0.5
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const skillBar = entry.target;
                        const percentageLabel = skillBar.previousElementSibling;
                        skillBar.style.width = skillBar.getAttribute('data-width');
                        percentageLabel.style.opacity = 1;
                        observer.unobserve(skillBar);
                    }
                });
            }, observerOptions);

            skillBars.forEach(bar => {
                observer.observe(bar);
            });
        });
    