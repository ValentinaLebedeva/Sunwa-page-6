/****** page documents chosing tabs ********/

const tabButtonsDocuments = document.querySelectorAll(".tab-link");
const tabColumn = document.querySelector(".tab-column");
const documentItems = document.querySelectorAll(".documents-item");

tabColumn.addEventListener("click", choseTab);

function choseTab(e) {
    tabButtonsDocuments.forEach(function (item) {
        item.classList.remove("tab-link-active");
    });

    if (e.target.dataset.tab) {
        e.target.classList.add("tab-link-active");
    }
    /* filter documents by tab */
    documentItems.forEach(function (item) {
        item.classList.remove("hidden")
        if (e.target.dataset.tab != item.dataset.tab) {
            item.classList.add("hidden")
        }
    })
}
