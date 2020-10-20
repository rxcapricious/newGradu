<template>
    <div class="wel-content">
        <div class="content-nav">
            <el-breadcrumb class="breadcrumb" separator="/">
                <el-breadcrumb-item>后台主页</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="content-main clearfix">
            <div class="notice">
                <div class="l">本演示后台数据为演示数据，可以随意操作，系统每5分钟重置一次</div>
                <div class="r"></div>
            </div>
            <div class="header">
                <el-row :gutter="12">
                    <el-col :span="8">
                        <el-card class="cardItem itemRed"  shadow="never">
                        <a href="">
                            <h1>34</h1>
                            <div>惶惶不可终日</div>
                        </a>
                        </el-card>
                    </el-col>
                    <el-col :span="8">
                        <el-card class="cardItem itemGreen" shadow="never">
                         <a href="">
                            <h1>34</h1>
                            <div>惶惶不可终日</div>
                        </a>
                        </el-card>
                    </el-col>
                    <el-col :span="8">
                        <el-card class="cardItem itemGray" shadow="never">
                         <a href="">
                            <h1>34</h1>
                            <div>惶惶不可终日</div>
                        </a>
                        </el-card>
                    </el-col>
                </el-row>
            </div>

            <div class="main">
                <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
                    <el-tab-pane label="今天" name="first"></el-tab-pane>
                    <el-tab-pane label="昨天" name="second"></el-tab-pane>
                    <el-tab-pane label="最近7天" name="third"></el-tab-pane>
                    <el-tab-pane label="最近30天" name="fourth"></el-tab-pane>
                </el-tabs>
                <div class="tab-content">
                  <el-row :gutter="12">
                    <el-col :span="8">
                        <el-card class="cardItem2">
                            <div slot="header">
                                <span style="line-height:36px">顾客</span>
                                <el-popover>
                                    啦啦啦！！！
                                </el-popover>
                            </div>
                            <div class="text item">
                                <span>新增</span>
                                <h3 style="flost: right;">2</h3>
                            </div>
                            <div class="text item">
                                <span>老顾客</span>
                                <h3 style="flost: right;">2</h3>
                            </div>
                        </el-card>
                     </el-col>

                     <el-col :span="8">
                         <el-card class="cardItem2">
                            <div slot="header">
                                <span style="line-height:36px">下单</span>
                            </div>
                            <div class="text item">
                                <span>加入购物车</span>
                                <h3 style="flost: right;">2</h3>
                            </div>
                            <div class="text item">
                                <span>提交订单数/金额</span>
                                <h3 style="flost: right;">2</h3>
                            </div>
                        </el-card>
                     </el-col>

                    <el-col :span="8">
                        <el-card class="cardItem2">
                            <div slot="header">
                                <span style="line-height:36px">支付</span>
                            </div>
                            <div class="text item">
                                <span>成交订单数</span>
                                <h3 style="flost: right;">2</h3>
                            </div>
                            <div class="text item">
                                <span>成交金额</span>
                                <h3 style="flost: right;">2</h3>
                            </div>
                        </el-card>
                     </el-col>
                  </el-row>
                </div>

                <div class="line"></div>

                <div class="block-4">
                    <el-card class="box-card">
                        <div class="text item">
                            <span>客单价</span>
                            <p style="float: right;">222</p>
                        </div>
                        <p class="tips">成交金额/成交订单数</p>
                    </el-card>

                     <el-card class="box-card">
                        <div class="text item">
                            <span>下单转化率</span>
                            <p style="float: right;">222</p>
                        </div>
                        <p class="tips">下单人数/访问人数</p>
                    </el-card>

                    <el-card class="box-card">
                        <div class="text item">
                            <span>下单-支付转化率</span>
                            <p style="float: right;">222</p>
                        </div>
                        <p class="tips">支付人数/下单人数</p>
                    </el-card>

                    <el-card class="box-card">
                        <div class="text item">
                            <span>支付转化率</span>
                            <p style="float: right;">222</p>
                        </div>
                        <p class="tips">支付人数/访问人数</p>
                    </el-card>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="less" scoped>
.wel-content {
    a {
        text-decoration: none;
        color: black;
    }
    .notice{
        width: 100%;
        height: 60px;
        padding: 30px;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        background: #ffecd5;
        margin-bottom: 20px;
        font-size: 16px;
        border-radius: 6px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .content-nav {
        height: 40px;
        background: #f5f7fa;
        margin: 0 0 10px;
        display: flex;
    }
    .content-nav .breadcrumb {
        height: 40px;
        line-height: 40px;
        flex: 1;
        color: #8492a6;
    }
    .content-main {
        padding: 20px;
        background: #fff;
    }
    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }

    .clearfix:after {
        clear: both
    }
    .header {
        margin-bottom: 30px;
    }
    .cardItem {
        text-align: left;
        margin: 0 20px 14px 0;
        h1 {
            color: #fff;
            margin-bottom: 10px;
        }
        div {
            color: #fff;
            margin-bottom: 10px;
        }
    }


    .itemRed {
        background-color: #e64242;
    }
    .itemGreen {
        background-color: #11b95c;
    }
    .itemGray {
        background-color: #1f2d3d;
    }


    .cardItem2 {
        text-align: left;
        margin: 0 20px 14px 0;
    }
    .text {
        font-size: 14px;
        padding: 10px 0;
        display: flex;
        justify-content: space-between;
    }


    .line {
        margin: 20px 0;
        border-top: 1px solid #d1dbe5;
    }
    .box-card {
        width: 32%;
        float: left;
        margin: 0 20px 14px 0;
    }
    .tips {
        color: #8c939d;
        font-size: 13px;
        text-align: left;
    }
}
</style>