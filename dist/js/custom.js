document.addEventListener('DOMContentLoaded',()=> {
    const hero_p = document.getElementById('hero-p');

    const welcome = "Welcome to my page :)";
    const introduction = "I am Christian Lester Blanco Cayabyab, I am an experienced software developer."
    const experience = "I have experience working on different kinds of organizations, from small businesses, startups, medical and banks. Solving problems and providing IT solutions.";

    var typewriter = new Typewriter(hero_p, {
        loop: true
    });

    typewriter.typeString(welcome)
        .pauseFor(1000)
        .deleteAll()
        .typeString(introduction)
        .pauseFor(1000)
        .deleteAll()
        .typeString(experience)
        .start();
    
});

