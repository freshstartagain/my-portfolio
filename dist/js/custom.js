document.addEventListener('DOMContentLoaded',()=> {
    
    function set_copyright()
    {
        let year = new Date().getFullYear();
        const copyright_text = document.getElementById('copyright_text');

        copyright_text.innerText = `Copyright ${year}. All rights reserved.`;
    }

    function set_scroll()
    {
        var scroll = new SmoothScroll('.navigation a[href*="#"]', {
            speed: 800,
            speedAsDuration: true
        });
    }

    function set_reveal_scroll()
    {
        let tools = document.querySelector('#tools');
        let services = document.querySelector('#services');
        let about = document.querySelector('#about');

        var slideRight = {
            distance: '150%',
            origin: 'right',
            duration: 1000,
            useDelay: 'always',
            easing: 'ease-in-out',
        };

        var slideLeft = {
            distance: '150%',
            origin: 'left',
            duration: 1000,
            useDelay: 'always',
            easing: 'ease-in-out',
        };

        var slideUp = {
            distance: '150%',
            origin: 'bottom',
            duration: 1000,
            useDelay: 'always',
            easing: 'ease-in-out',
        };
        
        ScrollReveal().reveal(tools, slideRight);
        ScrollReveal().reveal(services, slideLeft);
        ScrollReveal().reveal(about, slideUp);


    }
    
    set_copyright();
    set_scroll();
    set_reveal_scroll();

    
});

