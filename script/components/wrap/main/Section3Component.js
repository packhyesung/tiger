export default{
    props:[],
    template:`
    <section id="section3">
        <div class="content">
        <h2>ALL&nbsp;<span>TIGER</span></h2>
        </div>
        <div class="img-box">
            <li v-for="item in 이미지박스"><a href="#"><img class="img1" :src="item.이미지" alt=""></a></li>
        </div>
        <div class="img-box2">
            <li v-for="item in 이미지박스2"><a href="#"><img class="img4" :src="item.이미지2" alt=""></a></li>
        </div>
        <div class="img-box3">
            <li v-for="item in 이미지박스3"><a href="#"><img class="img7" :src="item.이미지3" alt=""></a></li>
            <li><iframe width="560" height="315" src="https://www.youtube.com/embed/ZEPS5Bm3iqc?si=3HKJrNLXDnR07tDo"
                title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></li>
        </div>
    </section>    
    `,
    data() {
        return {
            이미지박스: [
                {이미지:'./img/s3이미지1.jpg'},
                {이미지:'./img/s3이미지2.jpg'},
                {이미지:'./img/s3이미지3.jpg'}
            ],
            이미지박스2: [
                {이미지2:'./img/섹션3이미지4.png'},
                {이미지2:'./img/섹션3이미지5.png'},
                {이미지2:'./img/섹션3이미지6.png'}
            ],
            이미지박스3: [
                {이미지3:'./img/섹션3이미지7.png'},
                {이미지3:'./img/섹션3이미지8.png'}
            ]
        }
    },
}