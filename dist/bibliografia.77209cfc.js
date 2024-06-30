document.addEventListener("DOMContentLoaded", function() {
    const lazyLinks = document.querySelectorAll(".lazyLink");
    lazyLinks.forEach((link)=>{
        link.addEventListener("click", function() {
            const href = this.getAttribute("data-href");
            window.location.href = href;
        });
    });
});

//# sourceMappingURL=bibliografia.77209cfc.js.map
