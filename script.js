const mainText = document.getElementById("main-text");
text1 = "CONGRATULATIONS CHI, YOU HAVE BEEN CHOSEN TO FLY INTO SPACE"
text2 = "ARE YOU READY FOR THE TRIP?"
const audio = document.getElementById("audio")
const btn = document.querySelectorAll(".btn")
audio.autoplay = false
const phase1 = () => {
    //CONGRATULATIONS CHI, YOU HAVE BEEN CHOSEN TO FLY INTO SPACE
    document.querySelector(".btn-container").style.display = "none";
    for (let i = 0; i <= text1.length; i++) {
        setTimeout(()=>{
            mainText.innerHTML = text1.substring(0,i);
        }, i * 40)
    }
}

const phase2 = () => {
    //ask and choose 2pills
    mainText.innerHTML = text2;
    document.querySelector(".btn-container").style.display = "flex";
}

setTimeout(phase1, 0);
setTimeout(phase2, 5000);
