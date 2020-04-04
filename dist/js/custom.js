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
            useDelay: 'always',
            reset: true,
        };

        var slideLeft = {
            distance: '150%',
            origin: 'left',
            useDelay: 'always',
            reset: true,
        };

        var slideUp = {
            distance: '150%',
            origin: 'bottom',
            useDelay: 'always',
            reset: true,
        };
        
        ScrollReveal().reveal(tools, slideRight);
        ScrollReveal().reveal(services, slideLeft);
        ScrollReveal().reveal(about, slideUp);


    }
    
    set_copyright();
    set_scroll();
    set_reveal_scroll();

    
});

