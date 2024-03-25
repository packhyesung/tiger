export default{
    props:[],
    template:`
    <section id="section2">
        <div class="slide-container">
            <div class="slide-content">
                <h3>HOT&nbsp;<span>ISSUE</span></h3>
                <div class="slide-wrap">
                    <li class="slide slide4"><a href="#"></a><span></span></li>
                    <li v-for="item,idx in slide" :class="['slide', 'slide'+(idx+1)]"><a href="#"></a><span></span></li>
                    <li class="slide slide1"><a href="#"></a><span></span></li>
                    <li class="slide slide2"><a href="#"></a><span></span></li>
                </div>
            </div>
        </div>
    </section>   
    `, data() {
        return {
            slide: [
                {},
                {},
                {},
                {},
            ],
        }
    }
}