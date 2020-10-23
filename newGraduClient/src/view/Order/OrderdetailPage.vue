<template>
    <div class="order-detail">
        <div class="content-nav">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/entrance/order' }">订单管理</el-breadcrumb-item>
                <el-breadcrumb-item>订单详情</el-breadcrumb-item>
            </el-breadcrumb>
        </div>

        <div class="content-main">
            <div class="order-status">
                <span>待发货</span>
                <el-button type="primary">变更状态</el-button>
            </div>

            <div class="main-tabs">
                <el-tabs v-model="activeName" @tab-click="handleClick">
                    <el-tab-pane label="订单信息" name="orderInfo">
                        <div class="main-table">
                            <div class="table-tip">买家信息：</div>
                            <el-table :data="tableData" border style="width: 100%">
                                <el-table-column prop="date"  label="用户id" width="180"> </el-table-column>
                                <el-table-column prop="name" label="昵称" width="180"> </el-table-column>
                                <el-table-column prop="address" label="头像"> </el-table-column>
                                <el-table-column prop="address" label="客户名"> </el-table-column>
                                <el-table-column prop="address" label="客户手机号"> </el-table-column>
                                <el-table-column prop="address" label="客户地址"> </el-table-column>
                                <el-table-column prop="address" label="买家备注"> </el-table-column>

                                <el-table-column fixed="right" label="操作" width="100">
                                    <template slot-scope="scope">
                                        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                                        <el-button type="text" size="small">编辑</el-button>
                                    </template>
                                </el-table-column>
                            </el-table>

                            <div class="table-tip">货物信息：</div>
                            <el-table :data="tableData" border style="width: 100%">
                                <el-table-column prop="date"  label="商品SKU" width="180"> </el-table-column>
                                <el-table-column prop="name" label="商品图" width="180"> </el-table-column>
                                <el-table-column prop="address" label="商品名"> </el-table-column>
                                <el-table-column prop="address" label="型号"> </el-table-column>
                                <el-table-column prop="address" label="售价"> </el-table-column>
                                <el-table-column prop="address" label="购买数量"> </el-table-column>
                                <el-table-column prop="address" label="小计"> </el-table-column>

                                <el-table-column fixed="right" label="操作" width="100">
                                    <template slot-scope="scope">
                                        <el-button type="text" size="small">编辑</el-button>
                                        <el-button @click="handleClick(scope.row)" type="danger" size="small">删除</el-button>
                                    </template>
                                </el-table-column>
                            </el-table>

                            <div class="price">
                                <div>优惠：</div>
                                <div>合计：</div>
                                <div>改价前：</div>
                                <div>涨价金额：</div>
                            </div>

                            <div class="msg">
                                <div class="item">
                                    <div>订单ID：</div>
                                    <div>1330</div>
                                </div>
                                <div class="item">
                                    <div>订单号：</div>
                                    <div>20191005170626623520</div>
                                </div>
                                <div class="item">
                                    <div>加入时间：</div>
                                    <div>2019-11-29 17:06:26</div>
                                </div>
                                <div class="item">
                                    <div>付款时间：</div>
                                    <div>2019-11-29 17:06:31</div>
                                </div>
                    
                            </div>
                        </div>
                    </el-tab-pane>
                    <el-tab-pane label="物流信息" name="kuaidiInfo">
                        啦啦啦~
                    </el-tab-pane>
                </el-tabs>


                 
            </div>

           
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            activeName: 'orderInfo',
            tableData: [
                {
                    date: '123',
                    name: '111',
                    address: '四川省成都市',
                }
            ]
        }
    },

    methods: {
        handleClick() {

        },
    }
}
</script>

<style lang="less" scoped>
.order-detail {
    .content-nav {
        margin-bottom: 20px;
    }
    .content-main {
        // background-color: #fff;
        .order-status {
            height: 100px;
            line-height: 100px;
            background: #fff;
            padding: 0 30px;
            box-sizing: border-box;
            margin-bottom: 10px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        button {
            color: #F56C6C;
            background: #fef0f0;
            border-color: #fbc4c4;
        }

        .main-tabs {
            // height: 400px;
            padding: 10px 30px;
            background-color: #fff;
        }

        .table-tip {
            text-align: left;
            margin: 15px 0 10px 0;
        } 

        .price {
            margin-top: 10px;
            border: 1px solid #f1f1f1;
            padding: 20px;
            div {
                text-align: left;
            }
        }

        .msg {
            // display: flex;
            margin-top: 10px;
            border-top: 1px solid #f1f1f1;
            padding: 10px;
        }

        .item {
            font-size: 14px;
            color: #5e7382;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            margin-bottom: 10px;
        }

    }
}
</style>