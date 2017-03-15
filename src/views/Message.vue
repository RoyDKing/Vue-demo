<template>
    <div class="container">
        <header class="bar bar-nav">
            <h1 class='title'>下拉刷新</h1>
        </header>
        <div class="buttons-tab">
            <a href="#tab1" class="tab-link active button">消息1</a>
            <a href="#tab2" class="tab-link button">消息2</a>
        </div>
        <div class="content">
            <div class="tabs">
                <div id="tab1" class="tab active">
                    <!-- content应该拥有"pull-to-refresh-content"类,表示启用下拉刷新 -->
                    <div class="content pull-to-refresh-content" data-ptr-distance="55">
                        <!-- 默认的下拉刷新层 -->
                        <div class="pull-to-refresh-layer">
                            <div class="preloader"></div>
                            <div class="pull-to-refresh-arrow"></div>
                        </div>
                        <!-- 下面是正文 -->
                        <div class="card-container">
                            <div class="card">
                                <div class="card-header">tab1</div>
                                <div class="card-content">
                                    <div class="card-content-inner">
                                        这里是第1个card，下拉刷新会出现第2个card。
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="tab2" class="tab">
                    <!-- content应该拥有"pull-to-refresh-content"类,表示启用下拉刷新 -->
                    <div class="content pull-to-refresh-content" data-ptr-distance="55">
                        <!-- 默认的下拉刷新层 -->
                        <div class="pull-to-refresh-layer">
                            <div class="preloader"></div>
                            <div class="pull-to-refresh-arrow"></div>
                        </div>
                        <!-- 下面是正文 -->
                        <div class="card-container">
                            <div class="card">
                                <div class="card-header">tab2</div>
                                <div class="card-content">
                                    <div class="card-content-inner">
                                        这里是第1个card，下拉刷新会出现第2个card。
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<style scoped>
    .buttons-tab{
        z-index: 10;
        top: 2rem
    }
    .card-container{
        position: relative;
        top:2rem;
    }
    .content{
        bottom:2.5rem;
    }
</style>

<script>
    export default {
        mounted () {
            $.init();
            // 添加'refresh'监听器
            $('.pull-to-refresh-content').on('refresh' ,function(e) {
                // 模拟2s的加载过程
                $.showIndicator(); //显示加载指示器
                setTimeout(function() {
                    var cardNumber = $(e.target).find('.card').length + 1;
                    var cardHTML = '<div class="card">' +
                            '<div class="card-header">card'+cardNumber+'</div>' +
                            '<div class="card-content">' +
                            '<div class="card-content-inner">' +
                            '这里是第' + cardNumber + '个card，下拉刷新会出现第' + (cardNumber + 1) + '个card。' +
                            '</div>' +
                            '</div>' +
                            '</div>';

                    $(e.target).find('.card-container').prepend(cardHTML);
                    // 加载完毕需要重置
                    $.pullToRefreshDone('.pull-to-refresh-content');
                    $.hideIndicator();  //关闭加载指示器
                }, 1500);
            });
        }
    }
</script>