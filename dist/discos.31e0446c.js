//link externos discos//
document.addEventListener("DOMContentLoaded", function() {
    const lazyLinks = document.querySelectorAll(".lazyLink");
    lazyLinks.forEach((link)=>{
        link.addEventListener("click", function() {
            const href = this.getAttribute("data-href");
            window.location.href = href;
        });
    });
});

//# sourceMappingURL=discos.31e0446c.js.map
