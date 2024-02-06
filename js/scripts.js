const toggleTheme = document.getElementById('toggle-theme');
const toggleIcon = document.getElementById('toggle-icon');
const toggleText = document.getElementById('toggle-text');
const toggleColors = document.getElementById('toggle-colors');
const rootStyle = document.documentElement.style;

toggleTheme.addEventListener('click', ()=>{
    document.body.classList.toggle('dark');
    if(toggleIcon.src.includes('moon.svg')){
        toggleIcon.src = "assets/sun.svg";
        toggleText.textContent = "Light mode";
    }else{
        toggleIcon.src = "assets/moon.svg";
        toggleText.textContent = "Dark mode";
    }
})

toggleColors.addEventListener('click', (e)=>{
    console.log(rootStyle);
    rootStyle.setProperty('--prmiary-color', e.target.dataset.color);
    console.log(rootStyle);
})