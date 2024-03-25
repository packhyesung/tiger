export default{
    props:[],
    template:`
        <header id="header">
            <div class="top">
                <ul>
                    <li>
                        <a href="">로그인</a>
                        <i>|</i>
                        <a href="">회원가입</a>
                        <i>|</i>
                        <a class="popup-open" href="#"><span>팀스토어</span></a>
                    </li>
                </ul>
            </div>
            <div class="bottom">
                <nav id="nav">
                    <ul>
                        <li class="col">
                            <a href="#" class="nav-btn">TIGERS</a>
                            <div class="sub nav1">
                                <div class="sub-container">
                                    <ul>
                                        <li>
                                            <ul>
                                                <li v-for="item in tiger"><a href="#">{{item.서브메뉴}}</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li class="col">
                            <a href="#" class="nav-btn">PLAYERS</a>
                            <div class="sub nav2">
                                <div class="sub-container">
                                    <ul>
                                        <li>
                                            <ul>
                                                <li v-for="item in players"><a href="#">{{item.서브메뉴}}</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li class="col">
                            <a href="#" class="nav-btn">CONTENTS</a>
                            <div class="sub nav3">
                                <div class="sub-container">
                                    <ul>
                                        <li>
                                            <ul>
                                                <li v-for="item in contents"><a href="#">{{item.서브메뉴}}</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li class="col">
                            <a href="#" class="nav-btn">CAME</a>
                            <div class="sub nav4 d1">
                                <div class="sub-container">
                                    <ul>
                                        <li>
                                            <ul>
                                                <li v-for="item in came"><a href="#">{{item.서브메뉴}}</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li class="col">
                            <a href="#" class="nav-btn">TICKET</a>
                            <div class="sub nav5 d2">
                                <div class="sub-container">
                                    <ul>
                                        <li>
                                            <ul>
                                                <li v-for="item in ticket"><a href="#">{{item.서브메뉴}}</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li class="col">
                            <a href="#" class="nav-btn">MEMBERSHIP</a>
                            <div class="sub nav6 d3">
                                <div class="sub-container">
                                    <ul>
                                        <li>
                                            <ul>
                                                <li v-for="item in membership"><a href="#">{{item.서브메뉴}}</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>    
    `,
    data() {
        return {
            tiger: [
                { 서브메뉴: '인사말' },
                { 서브메뉴: '구단소개' },
                { 서브메뉴: '기아 챔피언스 필드' },
                { 서브메뉴: '기아 챌린저스 필드' },
                { 서브메뉴: 'CI' },
                { 서브메뉴: '역사관' },
                { 서브메뉴: '응원단' },
                { 서브메뉴: '스폰서' },
            ],
            players: [
                {서브메뉴:'코칭스태프'},
                {서브메뉴:'투수'},
                {서브메뉴:'포수'},
                {서브메뉴:'내야수'},
                {서브메뉴:'외야수'},
                {서브메뉴:'군입대선수'},
                {서브메뉴:'엔트리현황'},
            ],
            contents: [
                {서브메뉴:'공지사항'},
                {서브메뉴:'보도자료'},
                {서브메뉴:'타이거즈 뉴스'},
                {서브메뉴:'타이거즈 포토'},
                {서브메뉴:'타이거즈 TV'},
                {서브메뉴:'구단SNS'},
                {서브메뉴:'지난 콘텐츠 보기'},
            ],
            came: [
                {서브메뉴:'경기일정/결과'},
                {서브메뉴:'Tiger Baseball'},
                {서브메뉴:'STATS'},
            ],
            ticket: [
                {서브메뉴:'티켓 안내 및 예매'},
                {서브메뉴:'시즌권 안내'},
                {서브메뉴:'스카이박스 시즌권 안내'},
            ],
            membership: [
                {서브메뉴:'포인트 제도 안내'},
                {서브메뉴:'호랑이 사랑방'},
                {서브메뉴:'FAQ'},
                {서브메뉴:'1:1문의'},
            ]
        }
    }
}