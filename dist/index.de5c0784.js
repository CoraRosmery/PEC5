//link nace una madre//
document.addEventListener("DOMContentLoaded", function() {
    const lazyLink = document.getElementById("lazyLink");
    lazyLink.addEventListener("click", function() {
        const href = this.getAttribute("data-href");
        window.location.href = href;
    });
});

//# sourceMappingURL=index.de5c0784.js.map
