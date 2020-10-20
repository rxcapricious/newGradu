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
            <div class="main-form">
                <el-form :inline="true"  class="demo-form-inline">
                    <el-form-item label="订单号">
                        <el-input  placeholder="请输入订单号"></el-input>
                    </el-form-item>
                    <el-form-item label="收货人">
                        <el-input  placeholder="请输入收货人"></el-input>
                    </el-form-item>
                    <el-form-item label="快递号">
                        <el-input  placeholder="请输入快递单号"></el-input>
                    </el-form-item>

                    <el-form-item>
                        <el-button type="primary" @click="onSubmit">查询</el-button>
                    </el-form-item>
                </el-form>
            </div>

            <div class="form-table">
                
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="less" scoped>
.order-content {
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
}
</style>