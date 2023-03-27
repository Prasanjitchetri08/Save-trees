var img = document.getElementById('myImage');
let currentImgIdx = 1;
const images = [ 
    'https://ih1.redbubble.net/image.231015622.5015/poster,840x830,f8f8f8-pad,1000x1000,f8f8f8.u1.jpg',
    'https://hindisahayta.in/wp-content/uploads/2020/08/Save-tree-3.jpg',
    'https://hindisahayta.in/wp-content/uploads/2020/08/Save-tree-3.jpg',
    'https://tse4.mm.bing.net/th?id=OIP.YMo_DngL6eFh6NnsuRiyaQHaFj&pid=Api&P=0',
]; 

function changeImage(){
    let inputVal = document.getElementById("inputId").value;
    if(currentImgIdx >= images.length){
        currentImgIdx = 0;
    }
    img.src = images[currentImgIdx];
    currentImgIdx++;
    document.getElementById("inputId").value = " ";
    document.getElementById("heading").innerHTML= "<h3>" + inputVal + "</h3>";
}