<template>
    <div class="common-layout">
      <el-container>
        <el-header>Header</el-header>
        <el-container>
          <el-aside width="200px">
            <el-menu
                class="el-menu-vertical-demo"
            >
                <el-sub-menu :index="index+ ''" v-for="(sub,index ) in asyncRoutes" :key="index">
                    <template #title>
                        <span>{{ sub.meta.title }}</span>
                    </template>
                    <el-menu-item :index="index+ '-'+Iindex" v-for="(item,Iindex ) in sub.children" :key="Iindex">
                       <router-link :to="item.path" custom v-slot="{navigate}">
                            <span @click="navigate">{{ item.meta.title }}</span>
                       </router-link>
                    </el-menu-item>
                </el-sub-menu>
            </el-menu>
          </el-aside>

          <el-main>
            <!-- 业务页面的路由出口 -->
            <router-view></router-view>
          </el-main>
        </el-container>
      </el-container>
    </div>
</template>

<script setup>
    import {asyncRoutes} from '@/router/index.js'
    console.log(asyncRoutes)
    
</script>