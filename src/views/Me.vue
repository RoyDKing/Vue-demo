<template>
    <div class="container">
        <!--标题-->
        <header class="bar bar-nav">
            <h1 class="title">我</h1>
        </header>
		<div class="content">
			<!--背景图和头像-->
			<div class="bg-img">
                <img src="../assets/img/bg.jpg" alt="背景图" width="100%">
				<div class="wrap">
					<div class="phone"><img src="../assets/img/me.jpg" width="90"></div>
				</div>
			</div>
			<!--list-->
            <div class="list-block">
                <ul v-for="list in lists">
                    <router-link class="item-content item-link" v-bind:to="list.path" replace:true>
                        <div class="item-media"><i class="icon" v-bind:class="list.iconClass"></i></div>
                        <div class="item-inner">
                            <div class="item-title">{{list.msg}}</div>
                        </div>
                    </router-link>
                </ul>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .bg-img{
        position: relative;
    }
    .phone img{
        position: absolute;
        right: 2rem;
        bottom: -1.5rem;
        border-radius: 50%;
    }
    .content{
        bottom: 2.5rem;
    }
    .list-block ul{
        margin-bottom: 1rem;
    }
</style>

<script>
    export default {
        data () {
            return {
                lists: [
                    {path:"/me/profile",iconClass:"icon-card",msg:"个人资料"},
                    {path:"/me/dongtai",iconClass:"icon-browser",msg:"我的动态"},
                    {path:"/me/message",iconClass:"icon-emoji",msg:"我的消息"},
                    {path:"/me/collection",iconClass:"icon-star",msg:"我的收藏"}
                ],
            }
        }
    }
</script>


