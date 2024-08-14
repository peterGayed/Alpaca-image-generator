document.querySelectorAll('.mainButtons').forEach(button => {
    button.addEventListener('click', function(event) {
        hideAllDivs()
        let buttonId = event.target.id;
        let myDiv = document.getElementById(`d${buttonId}`);
        if (myDiv.style.display === 'none' || myDiv.style.display === '') {
            myDiv.style.display = 'flex'; 
        } else {
            myDiv.style.display = 'none'; 
        }
    });
});
function hideAllDivs() {
    document.querySelectorAll('.style').forEach(div => {
        div.style.display = 'none';
    });
}
document.querySelectorAll('.hbuttons').forEach(button => {
    button.addEventListener('click',function(event){
        let buttonId = event.target.id;
        let imgId = buttonId.substring(1).toLowerCase();
        let hair = document.getElementById('hair').src=`Images/hair/${imgId}.png`;
    })

}) 
document.querySelectorAll('.ebuttons').forEach(button => {
    button.addEventListener('click',function(event){
        let buttonId = event.target.id;
        let imgId = buttonId.substring(1).toLowerCase();
        let eyes = document.getElementById('eyes').src=`Images/eyes/${imgId}.png`;
    })
}) 
document.querySelectorAll('.eabuttons').forEach(button => {
    button.addEventListener('click',function(event){
        let buttonId = event.target.id;
        let imgId = buttonId.substring(2).toLowerCase();
        document.getElementById('ears').src=`Images/ears/${imgId}.png`;
    })
}) 
document.querySelectorAll('.nbuttons').forEach(button => {
    button.addEventListener('click',function(event){
        let buttonId = event.target.id;
        let imgId = buttonId.substring(1).toLowerCase();
        document.getElementById('neck').src=`Images/neck/${imgId}.png`;
    })
}) 
document.querySelectorAll('.mbuttons').forEach(button => {
    button.addEventListener('click',function(event){
        let buttonId = event.target.id;
        let imgId = buttonId.substring(1).toLowerCase();
        document.getElementById('mouth').src=`Images/mouth/${imgId}.png`;
    })
}) 
document.querySelectorAll('.lbuttons').forEach(button => {
    button.addEventListener('click',function(event){
        let buttonId = event.target.id;
        let imgId = buttonId.substring(1).toLowerCase();
        document.getElementById('leg').src=`Images/leg/${imgId}.png`;
    })
}) 
document.querySelectorAll('.abuttons').forEach(button => {
    button.addEventListener('click',function(event){
        let buttonId = event.target.id;
        let imgId = buttonId.substring(1).toLowerCase();
        document.getElementById('accessories').src=`Images/accessories/${imgId}.png`;
    })
}) 
document.querySelectorAll('.bbuttons').forEach(button => {
    button.addEventListener('click',function(event){
        let buttonColor = event.target.src;
        document.getElementById('imgContainer').style.backgroundImage = `url('${buttonColor}')`;
        
    })
}) 
// Function to randomize features
function randomizeFeatures() {
    // Array of feature categories
    const categories = ['hair', 'eyes', 'ears', 'neck', 'mouth', 'leg', 'nose', 'accessories'];

    categories.forEach(category => {
        const featureElements = document.querySelectorAll(`#db${capitalizeFirstLetter(category)} .btn`);
        const randomFeature = featureElements[Math.floor(Math.random() * featureElements.length)];
        randomFeature.click();
    });

    // Randomize background color
    const backgroundColors = document.querySelectorAll('#dbBackground .btnColor img');
    const randomBackgroundImg = backgroundColors[Math.floor(Math.random() * backgroundColors.length)].src;
    document.getElementById('imgContainer').style.backgroundImage = `url('${randomBackgroundImg}')`;
}
// Helper function to capitalize the first letter
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
async function downloadImage() {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const imgContainer = document.getElementById('imgContainer');
    
    const style = getComputedStyle(imgContainer);
    const backgroundImage = style.backgroundImage;

    // Set canvas dimensions to match the image container
    canvas.width = imgContainer.offsetWidth;
    canvas.height = imgContainer.offsetHeight;

    // Draw the background image first if it exists
    if (backgroundImage !== 'none') {
        const img = new Image();
        img.crossOrigin = 'anonymous';
        img.src = backgroundImage.slice(5, -2); // Remove the url("...") wrapping
        await img.decode(); // Wait for the image to load

        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    }

    // Define the correct drawing order based on z-index
    const drawingOrder = [
        'neck',         // Backmost
        'leg',
        'ears',
        'nose',
        'hair',  
        'eyes',       // Foremost
        'mouth',
        'accessories'
    ];

    // Draw each image in the correct order
    drawingOrder.forEach(id => {
        const image = document.getElementById(id);
        if (image) {
            ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
        }
    });

    // Download the final image
    const link = document.createElement('a');
    link.download = 'alpaca.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
}
document.querySelector('.btnMain.px-3.py-1.m-2.mx-3').addEventListener('click', downloadImage);
document.querySelector('.btnMain.px-3.py-1.mx-3').addEventListener('click', randomizeFeatures);


