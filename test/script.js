const tabs = [...document.querySelectorAll('.tab')]

tabs.forEach(tab => tab.addEventListener('click', tabAnimation))

 function tabAnimation (e)
 {
    /**
     * on recupere tous les tab  contents
     * @return {Object}
     */
    const tabContent = [...document.querySelectorAll('.tab-content')]

    /**
     * on recupere le button qui contient la classe  active  ous  forme d  index 
     * @return {BinaryData}
     */
    const indexRemove = tabs.findIndex(tab => 
        tab.classList.contains('active-tab')
    )

    /**
     * on  retire la classe active  sur le button
     * ainsi que le son content
     */
    tabs[indexRemove].classList.remove('active-tab')
    tabs[indexRemove].setAttribute('aria-selected', 'false')
    tabs[indexRemove].setAttribute('tabindex', '1')
    tabs[indexRemove].classList.remove('active-tab')
    tabContent[indexRemove].classList.remove('active-tab-content')

    /**
     * on  recupere l' index du tab   courant  grace au paraletre  d evenement {e}
     * et on  ajoute la classe active-tab iansi que contener
     */
    const indexShaow = tabs.indexOf(e.target)

    tabs[indexShaow].classList.add('active-tab')
    tabs[indexShaow].setAttribute('tabIndex','0')
    tabs[indexShaow].setAttribute('aria-selected','true')
    tabContent[indexShaow].classList.add('active-tab-content')


 }