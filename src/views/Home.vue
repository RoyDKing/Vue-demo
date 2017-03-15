<template>
    <div class="container">
       <!-- 轮播 -->
       <div class="swiper-container" data-space-between='10'>
           <div class="swiper-wrapper">
               <div v-for="slide in slides" class="swiper-slide"><img class="slideImg" v-bind:src="slide.src" v-bind:alt="slide.alt"></div>
           </div>
           <div class="swiper-pagination"></div>
       </div>
       <!--选项卡三按钮-->
       <div class="buttons-tab">
           <a href="#tab1" class="tab-link active button">动态</a>
           <a href="#tab2" class="tab-link button">专栏</a>
           <a href="#tab3" class="tab-link button">收藏</a>
       </div>
       <div class="content">
        <!--选项卡-->
            <div class="tabs">
                <!--选项卡1：动态-->
                <div id="tab1" class="tab active">
                    <div class="card-container">
                        <div v-for="dongTai in dongTais" class="card">
                            <div class="card-content">
                                <div class="card-media">
                                    <img class="pull-left" src="../assets/img/0.jpg" width="44">
                                    <div class="card-media-body">
                                        <div class="media-name">{{dongTai.name}}</div>
                                        <div class="media-time color-gray">{{dongTai.date}}</div>
                                    </div>
                                    <div class="clear"></div>
                                </div>
                                <div class="card-content-inner">
                                    <p>{{dongTai.msg}}</p>
                                </div>
                            </div>
                            <div class="card-footer">
                                <a href="#" class="link">赞</a>
                                <a href="#" class="link">更多</a>
                            </div>
                        </div>
                    </div>
                </div>
                <!--选项卡2：文章-->
                <div id="tab2" class="tab">
                    <div class="card-container">
                        <div v-for="article in articles" class="card facebook-card">
                            <div class="card-header no-border">
                                <div class="facebook-avatar"><img v-bind:src="article.src" width="44" height="44"></div>
                                <div class="facebook-name">{{article.name}}</div>
                                <div class="facebook-date">{{article.date}}</div>
                            </div>
                            <div class="card-content-inner">
                                <h2 class="text-left">{{article.title}}</h2>
                                <div class="article-con">{{article.msg}}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <!--选项卡3：收藏-->
                <div id="tab3" class="tab">
                    <div class="card-container">
                        <div v-for="col in cols" class="card">
                            <div class="card-header">{{col.title}}</div>
                            <div class="card-content">
                                <div class="card-content-inner">{{col.msg}}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    @import '../assets/css/swiper-3.4.1.min.css';
    .swiper-container{
        height: 7rem;
        position: relative;
        z-index:10;
    }
    .content{
        top:9rem;
        bottom:2.5rem;
    }
    .slideImg{
        width : 100%;
    }
    .buttons-tab{
        z-index: 10;
    }
    .card-container{
        position: relative;
    }
    .card-media{
        padding: 0.5rem 0.5rem 0 0.5rem;
    }
    .clear{
        clear:both
    }
    .media-name{
        padding-top:0.1rem;
        font-weight: bolder;
    }
    .card-media-body{
        margin-left: 2.5rem;
    }
    h2{
        margin-top: 0;
    }
    .article-con{
        text-indent: 2em;
        /*多行文本省略*/
        overflow : hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }
</style>

<script>
    export default {
        mounted () {
            var mySwiper = new Swiper('.swiper-container', {
                autoplay: 3000,//可选选项，自动滑动
                loop : true,    //环路开启
                pagination : '.swiper-pagination',  //显示分页器
                paginationClickable :true,          //点击分页器控制swiper
                autoplayDisableOnInteraction : false,   //用户操作swiper后仍然自动播放
                observer:true,//修改swiper自己或子元素时，自动初始化swiper
                observeParents:true,//修改swiper的父元素时，自动初始化swiper
            });
            this.$http.get('home.json').then((response) => {
                this.slides = response.body.slides;
                this.dongTais = response.body.dongTais;
                this.articles = response.body.articles;
                this.cols = response.body.cols
            }, (response) =>{
                console.log("未请求到文件")
            });
        },
        data () {
            return {
                slides:[],
                dongTais:[],
                articles:[],
                cols: []
            }
        },
    }
</script>