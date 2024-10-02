// Callback function Learning
function first(Callback) {
    for (let i = 1; i <= 20; i++) {
        console.log(i)
    }
    Callback();
}

first(function second() {
    // console.log("Second Function is Called")
    document.write("This is Second Function")
})