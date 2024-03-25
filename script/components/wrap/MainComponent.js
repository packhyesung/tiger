import Section1Component from "./main/Section1Component.js"
import Section2Component from "./main/Section2Component.js"
import Section3Component from "./main/Section3Component.js"

export default{
    props:[],
    template:`
        <main id="main">
            <section1-component />
            <section2-component />
            <section3-component />
        </main>
    `,
    components:{
        'section1-component' : Section1Component,
        'section2-component' : Section2Component,
        'section3-component' : Section3Component
    }
}