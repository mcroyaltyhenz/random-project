document.addEventListener('DOMContentLoaded', function() {
    const colorBox = document.getElementById('color-box');
    const changeColorBtn = document.getElementById('change-color-btn');
    
    // Function to generate random hex color
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
    
    // Change color when button is clicked
    changeColorBtn.addEventListener('click', function() {
        const randomColor = getRandomColor();
        colorBox.style.backgroundColor = randomColor;
    });
    
    // Bonus: Change color every 2 seconds automatically
    // setInterval(function() {
    //     const randomColor = getRandomColor();
    //     colorBox.style.backgroundColor = randomColor;
    // }, 2000);
});
