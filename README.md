# Vue3 使用指南

## 快速开始


### 1.安装vue-cli脚手架

[vue-cli](https://cli.vuejs.org/zh/guide/installation.html)

1.安装vue-cli

```sh
npm install -g @vue/cli
# OR
yarn global add @vue/cli
```

2.检查

```sh
vue --version
```

### 2.创建并启动vue项目

```sh
vue create vue-app-01
cd vue-app-01
npm run vue-app-01
# OR yarn serve
```

## 常见问题:

Question: 组件间有空白
Solution: 组件间不要留逗号等

Question: scss需安装
import 引用的包需要放在头部

error: 'error  Newline required at end of file but not found'
> 增加一个空行即可！


字符串使用单引号，不能使用双引号
语句末尾不需要加分号
对象末项不需要加逗号


* vue临时启动端口

> vue run serve 指定临时启动端口

```sh
# 临时端口低于1024都为1024
npm run vue-app-01 -- --port 9000
```

* echarts

```sh
npm install echarts --save

# 查看echarts版本
# npm ls echarts

# 卸载echarts
# npm uninstall echarts
```

```js
// main.js全局引用echarts
import Echarts from 'echarts'

Vue.prototype.$echarts = Echarts
```

* axios

> 安装

```sh
npm install axios
```

> 封装挂载

```js
// main.js全局引用axios
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3030/api/'
Vue.prototype.$http = axios
```

> 使用



