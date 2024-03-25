import HeaderComponent from "./wrap/HeaderComponent.js"
import MainComponent from "./wrap/MainComponent.js"
import FooterComponent from "./wrap/FooterComponent.js"
import BannerComponent from "./wrap/BannerComponent.js"
import ModalComponent from "./wrap/ModalComponent.js"


export default {
    props:[],
    template:`
    <div id="wrap">
        <header-component />
        <main-component />
        <footer-component />
        <banner-component />
        <modal-component />
    </div>
    `,
    components:{
        'header-component':HeaderComponent,
        'main-component': MainComponent,
        'footer-component':FooterComponent,
        'banner-component':BannerComponent,
        'modal-component':ModalComponent,
    }
    
}