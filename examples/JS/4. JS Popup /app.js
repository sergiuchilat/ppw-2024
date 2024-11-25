document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('openPopupButton').addEventListener('click', function(e) {
        document.getElementById('popup').style.display = 'block';
        document.getElementById('overlay').style.display = 'block';
    });

    document.getElementById('closePopupButton').addEventListener('click', function(e) {
        document.getElementById('popup').style.display = 'none';
        document.getElementById('overlay').style.display = 'none';
    })

    document.getElementById('overlay').addEventListener('click', function(e) {
        document.getElementById('popup').style.display = 'none';
        document.getElementById('overlay').style.display = 'none';
    });
});