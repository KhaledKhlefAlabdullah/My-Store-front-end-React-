import { ReactComponent as Sun } from "../../assets/images/swap_color_icon/Sun.svg";
import { ReactComponent as Moon } from "../../assets/images/swap_color_icon/Moon.svg";
import "../../assets/styles/app_bar_components_style/swap_color.css";

export default function Swap_Color_Mode(props) {
    // get function by props object to change logo theme
    const setLogoMode=props.changeLogoColor;
    // set dark mode theme on the app
    const setDarkMode=()=>{
        document.querySelector('body').setAttribute('data-theme', 'dark');
        // In order to preserve the color scheme after refreshing the page
        localStorage.setItem('selectedTheme','dark');
        // set logo theme as dark
        setLogoMode('dark');
    }
    // set light mode theme on the app
    const setLightMode=()=>{
        document.querySelector('body').setAttribute('data-theme', 'light');
        // In order to preserve the color scheme after refreshing the page
        localStorage.setItem('selectedTheme','light');
        // set logo theme as light
        setLogoMode('light');
    }
    // check the selected theme to select icon theme
    const selectedTheme = localStorage.getItem('selectedTheme');
    // change the color theme depending on selected theme
    if(selectedTheme === "dark"){
        setDarkMode();
    }else{
        setLightMode();
    }
    // this function change the color theme depending on switch button chacking
    const toggleTheme = e =>{
        if(e.target.checked)
            setDarkMode();
        else
            setLightMode();
    }

    return (
        <div className='dark_mode'>
            <input
                className='dark_mode_input'
                type='checkbox'
                id='darkmode-toggle'
                // caled functio to switch color theme
                onChange={toggleTheme}
                // make the default check the dark them and dark icon
                defaultChecked={selectedTheme}
            />           
            <label className='dark_mode_label' for='darkmode-toggle'>
                <Sun />
                <Moon />
            </label>
        </div>
    );
};


