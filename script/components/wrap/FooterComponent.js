export default{
    props:[],
    template:`
        <footer id="footer">
            <div class="sns-img">
                <a href=""><img src="./img/footer.jpg" alt=""></a>

                    <div class="sns-logo">
                        <a v-for="item in sns" href=""><img :src="item.푸터이미지" alt=""></a>
                    </div>

                    <div class="footer-logo">
                        <h3>All about<span>KIA Tigers</span></h3>
                        <a href="#"><img src="./img/footer.logo.png" alt=""></a>
                    </div>
            </div>
            <div class="footer-center">
                <address>사업등록번호 : 409-81-02844 대표자 : 최준영 주소 : 광주광역시 북구 서림로 10 광주-기아 챔피언스 필드 내 2층 KIA타이거즈 사무실<br>
                    전화 : 070-7686-8000 팩스 : 062-525-5350 이메일 : kiatigers@kiatigers.co.kr<br>
                    Copyright © 2020 KIA TIGERS. All rights reserved.
                </address>
            </div>
        </footer>    
    `,
    data() {
        return {
            sns: [
                { 푸터이미지:'./img/fsns1.png'},
                { 푸터이미지:'./img/fsns2.png'},
                { 푸터이미지:'./img/fsns3.png'},
            ],
        }
    }
}