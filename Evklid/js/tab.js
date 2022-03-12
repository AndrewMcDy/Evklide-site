document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.tabs__btn').forEach(function (tabsBtn) {
        tabsBtn.addEventListener('click', function (event) {
            const path = event.currentTarget.dataset.path

            document.querySelectorAll('.tabs__btn').forEach(function (tabsBtn) {
                tabsBtn.classList.remove('tabs__btn-active')
            })

            event.currentTarget.classList.add('tabs__btn-active')

            document.querySelectorAll('.tabs__content').forEach(function (tabContent) {
                tabContent.classList.remove('tabs__content-active')
            })
            document.querySelector(`[data-target="${path}"]`).classList.add('tabs__content-active')
        })
    })
})