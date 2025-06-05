document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    hamburger.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });
});

// 响应式菜单样式
const style = document.createElement('style');
style.innerHTML = `
@media (max-width: 600px) {
    .nav-menu.active {
        display: flex !important;
        flex-direction: column;
        position: absolute;
        top: 60px;
        left: 0;
        width: 100%;
        background: #fff;
        box-shadow: 0 2px 8px rgba(0,0,0,0.04);
        z-index: 99;
    }
    .nav-item {
        margin: 1rem 0;
        text-align: center;
    }
}`;
document.head.appendChild(style);
