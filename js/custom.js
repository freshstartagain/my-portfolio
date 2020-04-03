document.addEventListener('DOMContentLoaded',()=> {
    
    function set_copyright(){
        let year = new Date().getFullYear();
        const copyright_text = document.getElementById('copyright_text');

        copyright_text.innerText = `Copyright ${year}. All rights reserved.`;
    }

    function set_scroll(){
        var scroll = new SmoothScroll('.navigation a[href*="#"]', {
            speed: 800,
            speedAsDuration: true
        });
    }
    
    set_copyright();
    set_scroll();

    
});

