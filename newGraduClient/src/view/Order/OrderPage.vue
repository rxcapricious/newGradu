<template>
    <div class="order-content">
        <div class="content-nav">
            <el-breadcrumb class="breadcrumb" separator="/">
                <el-breadcrumb-item>订单列表</el-breadcrumb-item>
            </el-breadcrumb>
        </div>

        <div class="content-main">
            <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="待付款" name="first"></el-tab-pane>
                <el-tab-pane label="待发货" name="second"></el-tab-pane>
                <el-tab-pane label="待收货" name="third"></el-tab-pane>
                <el-tab-pane label="已收货" name="fourth"></el-tab-pane>
                <el-tab-pane label="已关闭" name="five"></el-tab-pane>
                <el-tab-pane label="全部订单" name="six"></el-tab-pane>
            </el-tabs>
            <div class="filter-box">
                <el-form :inline="true"  class="demo-form-inline">
                    <el-form-item label="订单号">
                        <el-input class="filter-input"  placeholder="请输入订单号"></el-input>
                    </el-form-item>
                    <el-form-item label="收货人">
                        <el-input class="filter-input"  placeholder="请输入收货人"></el-input>
                    </el-form-item>
                    <el-form-item label="快递号">
                        <el-input class="filter-input"  placeholder="请输入快递单号"></el-input>
                    </el-form-item>

                    <el-form-item>
                        <el-button type="primary" @click="onSubmit">查询</el-button>
                    </el-form-item>
                </el-form>
            </div>

            <div class="form-table">
                <div v-for="(item,index) in tableData" :key="index" class="list-wrap">
                    <div class="header">
                        <div class="head-left">
                            <div class="status-text">{{item.order_status_text}}</div>
                            <div class="add-time">下单时间：{{item.add_time}}</div>
                            <div class="pay-time" v-if="item.pay_time">付款时间：{{item.pay_item.actual_pricetime}}</div>
                            <div class="order-id">订单号：{{item.order_id}}</div>
                        </div>

                        <div class="head-right">
                            <div class="goods-num">共{{item.goodsCount}}件商品</div>
                            <div class="price-wrap">当前合计{{item.actual_price}}元（含运费{{item.freight_price}}）</div>
                        </div>
                    </div>

                    <div class="content-wrap">
                        <div class="con-left">
                            <div class="goods-list" v-for="(item1,index) in item.goodsList" :key="index">
                                <img :src="item1.list_pic_url" alt="" class="goods-img">
                                <div class="goods-name">{{item1.goods_name}}</div>
                                <div class="goods-num"><label>数量： </label> {{item1.num}} </div>
                            </div>
                        </div>

                        <div class="user-wrap">
                            <div class="avatar-wrap">
                                <img :src="item.userInfo.avatar" class="avatar-img">
                                <div class="nickname">{{item.userInfo.nickname}}</div>
                            </div>
                            <div class="name">姓名：{{item.userInfo.name}}</div>
                            <div class="mobile">手机：{{item.userInfo.mobile}}</div>
                        </div>

                        <div class="main">
                            <div v-if="item.expressInfo" class="express-info">{{item.expressInfo}}</div>
                            <div style="display:flex; justify-content: flex-start;">
                                <div class="user-name">{{item.consignee}}</div>
                                <div class="user-mobile">{{item.mobile}}</div>
                            </div>

                            <div class="user-address">{{item.full_region}}{{item.address}}</div>
                            <div v-if="item.postscript" class="user-post">留言：{{item.postscript}}</div>
                        </div>

                        <div class="right">
                            <el-button v-if="item.print_status == 1 && item.order_status == 300" class="d-btn" type="primary" @click="Send(item.id)">发货</el-button>
                            <el-button v-if="item.order_status == 101" @click="orderEdit(item)">修改价格</el-button>
                            <el-button v-if="item.order_status == 300 || item.order_status == 301" @click="orderEdit(item)">打印快递单</el-button>  
                            <el-button class="right-detail" type="text"  @click="viewDetail(item.id)">查看详情</el-button>        
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            activeName: 'first',
            loading: false,
            tableData: [
                {
                    actual_price:0.01,
                    add_time:"2019-11-29 13:31:23",
                    address:"测试地址",
                    admin_memo:null,
                    change_price:0.01,
                    city:38,
                    confirm_time:0,
                    consignee:"测试",
                    mobile:'18881209818',
                    country:0,
                    dealdone_time:0,
                    district:422,
                    expressInfo:"",
                    express_value:480,
                    freight_price:0,
                    full_region:"四川省攀枝花市东区",
                    goodsCount:1 ,
                    userInfo: {
                        avatar:'http://yanxuan.nosdn.127.net/149dfa87a7324e184c5526ead81de9ad.png',
                        mobile: '18881209818',
                        name: '201610801018',
                        nickname: '梅梅'
                    },
                    user_id: 1048,
                    pay_status: 2,
                    pay_name: '',
                    pay_id: "4200000432201911295554286798",
                    order_status_text: '待发货',
                    order_status: 300,
                    order_id: '20191005133123894325',
                    order_price: 0.01,
                    goodsList:[
                        {
                           goods_aka: '懒人椅',
                            goods_name: '日式和风懒人沙发',
                            goods_specifition_name_value: '棕色',
                            list_pic_url: "http://yanxuan.nosdn.127.net/149dfa87a7324e184c5526ead81de9ad.png",
                            num: 1,
                            retail_price: 0.01
                        }
                    ]
                }
            ]
        }
    },

    methods: {
        handleClick(tab, event) {
            
        },
        onSubmit() {

        },
        orderEdit() {

        },
        viewDetail(index) {
            this.$router.push({path: '/entrance/order/detail', query: {id: index}})
        },
        listOrders() {
            this.loading = true;
            let params = {};

            switch (activeName) {
                case 'first':
                    params = {};
                    break;
            }

            // 调用接口获取订单数据，根据不同的params参数

        }
    }
}
</script>

<style lang="less" scoped>
.order-content {
    .filter-input {
        width: 200px !important;
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
    .demo-form-inline{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .filter-box {
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }

    .filter-box .box{
        margin-right: 20px;
        margin-bottom: 10px;
    }

    .list-wrap {
        width: 100%;
        border: 1px solid #dfe5ed;
        margin-bottom: 10px;
    }

    .list-wrap .header {
        width: 100%;
        height: 40px;
        background-color: rgba(236, 245, 255, 0.51);
        line-height: 40px;
        color: #1f2d3d;
        font-size: 13px;
        padding: 0 10px;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .header .head-left{
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }

    

    .goods-list {
        display: flex;
        justify-content: flex-start;
        border-bottom: 1px solid #f1f1f1;
        padding: 6px 0;
        align-items: center;
    }

    .goods-list:last-child {
        border-bottom: none;
        padding-bottom: 0;
        
    }

    .goods-list:first-child {
        padding-top: 0;
    }
    .goods-img {
        width: 40px;
        height: 40px;
    }

    .goods-name {
        color: #5e7382;
        font-size: 14px;
        margin: 0 20px 0 10px;
        width: 180px;
    }

    .goods-number {
        color: #ff3456;
        font-size: 14px;
        margin-right: 20px;
    }

    .content-wrap {
        width: 100%;
        display: flex;
        justify-content: flex-start;
        .con-left {
            width: 30%;
            border-right: 1px solid #d1dbe5;
            padding: 20px 10px;
        }
        .user-wrap {
            width: 16%;
            border-right: 1px solid #d1dbe5;
            display: flex;
            flex-direction: column;
            padding: 20px 10px;
        }
        .user-wrap .avatar-wrap{
            display: flex;
            justify-content: flex-start;
            align-items: center;
            margin-bottom: 10px;
        }
        .user-wrap .avatar-wrap .avatar-img {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            margin-right: 10px;
        }
         .user-wrap .avatar-wrap .nickname {
            font-size: 14px;
        }
        .user-wrap .name {
            width: 100%;
            font-size: 14px;
        }
        .user-wrap .mobile {
            width: 100%;
            font-size: 14px;
        }
        .main {
            width: 36%;
            border-right: 1px solid #d1dbe5;
            padding: 20px 10px;
        }
        .right {
            width: 12%;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
        }
    }


    .list-wrap .header {
        width: 100%;
        height: 40px;
        background-color: rgba(236, 245, 255, 0.51);
        line-height: 40px;
        color: #1f2d3d;
        font-size: 13px;
        padding: 0 10px;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .head-right {
            display: flex;
            justify-content: flex-end;
            align-items: center;
            .goods-num {
                margin-right: 20px;
            }
        }

        .head-left {
            display: flex;
            justify-content: flex-start;
            align-items: center;
        }

        .status-text,.add-time,.pay-time {
            margin-right: 12px;
        }
    }

    .user-name {
        color: #000000;
        font-size: 14px;
        margin-right: 10px;
        line-height: 20px;
    }

    .user-mobile {
        color: #000000;
        font-size: 14px;
        line-height: 20px;
        margin-right: 20px;
    }

    .user-address {
        color: #333;
        font-size: 13px;
        line-height: 20px;
        margin-top: 10px;
        display: flex;
        justify-content: flex-start;
    }

    .user-post {
        color: #333;
        font-size: 14px;
        line-height: 20px;
        margin-top: 4px;
        background-color: #fbf7c5;
        padding: 10px;
    }

    

    
}
</style>