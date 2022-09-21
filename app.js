document.addEventListener('mousemove', function (e) {
    const x = e.pageX
    const y = e.pageY

    const g = Math.floor((x * 256) / window.innerWidth);
    const b = Math.floor((y * 256) / window.innerHeight);
    console.log(`rgb(0,${g},${b})`);

    document.body.style.backgroundColor = `rgb(0,${g},${b})`;
})


