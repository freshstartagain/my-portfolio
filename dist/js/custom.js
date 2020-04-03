document.addEventListener('DOMContentLoaded',()=> {
   
    let year = new Date().getFullYear();

    console.log(year);
    
    const copyright_text = document.getElementById('copyright_text');

    copyright_text.innerText = `Copyright ${year}. All rights reserved.`;


});

