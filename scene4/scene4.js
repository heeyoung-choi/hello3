const mainText = document.getElementById("main-text");
text1 = "Well done, we have received your application and it is currently being evaluated, the results will appear in"
// const btn = document.querySelectorAll(".btn")
const count = document.getElementById("count");
console.log(text1.length)
const phase1 = () => {
    for (let i = 0; i <= text1.length; i++) {
        setTimeout(()=>{
            mainText.innerHTML = text1.substring(0,i);
        }, i * 40)
    }
}
const phase2 = () => {
    let k = 0
    for (let C = 1; C <= 10; C ++)
    {   
       { setTimeout(()=> {
            count.innerHTML = (10 - C).toString();
            console.log("k=" + k + " c=" + C)
        }, 1000 * C)
    }
        
    }
}
setTimeout(phase1, 0);
setTimeout(phase2, 0);
setTimeout(()=> {
    window.location.replace("https://bit.ly/flyingintospace");
}, 10000)
