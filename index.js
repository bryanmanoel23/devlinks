function test() {
    const test = document.getElementById('test')
    if(test.classList.contains('light')){
        test.classList.remove('light')
        const img = document.getElementById('img')
        img.src = "./assets/assets/fotor_2023-9-16_10_46_28-fotor-20230916104721.png"
    }else{
    test.classList.add("light")
    const img = document.getElementById('img')
    img.src = "./assets/assets/fotor_2023-9-19_15_56_44-fotor-20230919155726.png"
    }
}

