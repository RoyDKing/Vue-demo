<template>
    <div class="profile">
        <div class="bar bar-nav">
            <h1 class='title'>我的消息</h1>
            <a class="icon icon-left" href="#/me"></a>
        </div>
        <div class="content">{{msg}}</div>
    </div>
</template>

<style scoped>

</style>
<script>
    export default {
        mounted (){
            $.init();
        },
        data (){
            return {
                msg:'这里应该有些消息列表',
            }
        }
    }
</script>