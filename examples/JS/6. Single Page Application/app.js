document.addEventListener('DOMContentLoaded', function() {
    
    document.getElementById('section1-select').addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector('section').style.display = 'none';
        document.getElementById('section1').style.display = 'block';
    });
    
    document.getElementById('section2-select').addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector('section').style.display = 'none';
        document.getElementById('section2').style.display = 'block';
    });

    document.getElementById('section3-select').addEventListener('click', function(e) {
        e.preventDefault(); 
        document.querySelector('section').style.display = 'none';   
        document.getElementById('section3').style.display = 'block';
    });
});
