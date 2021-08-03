mainText = document.getElementById("main-text")
text1 = "Oops... Wait a minute. You have to pass a training before taking off."
text2 = "You need to take this seriously and be honest with yourself or else you won’t be allowed to go, do you understand?"

const phase1 = () => {
    document.getElementById("btn-container").style.display = "none"
    for (let i = 0; i <= text1.length; i++) {
        setTimeout(()=>{
            mainText.innerHTML = text1.substring(0,i);
        }, i * 40)
    }
}
const phase2 = () => {
    document.getElementById("btn-container").style.display = "inline-block"
    mainText.innerHTML = text2
}
setTimeout(phase1, 0)
setTimeout(phase2, 4000)