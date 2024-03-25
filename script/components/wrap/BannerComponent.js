export default{
    props:[],
    template:`
        <div class="banner">
            <ul>
                <li><a v-for="item in 배너" :href="item.기아포탈"><img :src="item.기아" alt=""></a></li>
            </ul>
        </div>    
    `,
    data() {
        return {
            배너:[
            {기아포탈:'https://tigers.co.kr/',기아:'./img/KIA.png'},
            {기아포탈:'https://www.samsunglions.com/',기아:'./img/SAM.png'},
            {기아포탈:'https://www.doosanbears.com/',기아:'./img/DOS.png'},
            {기아포탈: 'https://www.hanwhaeagles.co.kr/index.do',기아: './img/HAN.png'},
            {기아포탈:'https://tigers.co.kr/',기아:'./img/KIUM.png'},
            {기아포탈:'https://tigers.co.kr/',기아:'./img/KT.png'},
            {기아포탈:'https://tigers.co.kr/',기아:'./img/LG.png'},
            {기아포탈:'https://tigers.co.kr/',기아:'./img/LOT.png'},
            {기아포탈:'https://tigers.co.kr/',기아:'./img/NC.png'},
            {기아포탈: 'https://tigers.co.kr/',기아: './img/SSG.png' },
            ]
        }
    }
}