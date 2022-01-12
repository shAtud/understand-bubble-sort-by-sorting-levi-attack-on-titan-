const canvas = document.querySelector('canvas');
canvas.width = 1366;
canvas.height = 625;
const {width,height} = canvas;
ctx = canvas.getContext('2d');


const FPS = 20;
const arr = []
const N = 40;
const space = 10;
const w = (width- space*(N+1))/N ;

for(let i=0;i<N;i++){
    const h = Math.random()*(height -70 -50) +50;
    arr.push({
        x:i*w +space*(i+1),
        y:height-h,
        w:w,
        h,
        color:'white'
        
    })
}

var i = 0;
var j = 0;

 

 
const animate = ()=>{
    ctx.clearRect(0,0,width,height);
    //updating
    const rect = arr[j];
   
    if(arr[j].h > arr[j+1].h ){
        for(let k =0;k<j;k++){
            arr[k].color = 'white';
        }
        arr[j].color = 'red';
        let tmp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = tmp;
        //x remains the same
        tmp = arr[j].x;
        arr[j].x = arr[j+1].x;
        arr[j+1].x = tmp;

        

    }
    j++;
    if(i<arr.length){
        if(j>=arr.length-1-i){
      
            i++;
            j = 0;
            for(let k=arr.length-i;k<arr.length;k++){
                console.log(k)
                arr[k].color = 'white'
            }
        };

    }else{
        alert('sort ended ')
        window.location.reload();

    }
   
    //drawing
    for(let i=0;i<arr.length;i++){
        const rect = arr[i];
        ctx.fillStyle = rect.color;
        ctx.fillRect(rect.x,rect.y,rect.w,rect.h);

    }
   
    setTimeout(()=>{
        requestAnimationFrame(animate);
    },1000/FPS)
}

animate()