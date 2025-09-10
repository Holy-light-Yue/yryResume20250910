// 鼠标移动特效
const body = document.querySelector('body');
body.addEventListener('mousemove', (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    body.style.backgroundPosition = `${x * 100}% ${y * 100}%`;
});

console.log('简历页面加载完成');