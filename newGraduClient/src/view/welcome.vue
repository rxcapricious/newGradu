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
                        <el-card shadow="never">
                        总是显示
                        </el-card>
                    </el-col>
                    <el-col :span="8">
                        <el-card shadow="never">
                        鼠标悬浮时显示
                        </el-card>
                    </el-col>
                    <el-col :span="8">
                        <el-card shadow="never">
                        从不显示
                        </el-card>
                    </el-col>
                </el-row>
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
}
</style>