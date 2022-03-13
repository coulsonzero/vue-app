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

Qusetion:
字符串使用单引号，不能使用双引号
语句末尾不需要加分号
对象末项不需要加逗号

Solution:
项目根目录加一个.prettierrc.json的配置文件

```json
{
 "singleQuote": true,
    "semi": false,
    "trailingComma": "none"
}
```

[Vue warn]: Unknown custom element: <chart> - did you register the component correctly? For recursive components, make sure to provide the "name" option

Solution:
> 注册组件关键字components写错导致无法使用

Question:
error  Missing space before function parentheses
> () 前少了一个空格！

```js
data () {
    return {}
}
```

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
// echarts4.8
// import echarts from 'echarts'
// echarts5.0
import * as  echarts from 'echarts'

Vue.prototype.$echarts = echarts
```


问题：引入Echarts出现 “init of undefined“ 的解决方案:
问题原因：Echarts5.0的引入方式和Echarts4的引入方式不一样
解决方法：
1、降版本，引入Echarts4的版
```sh
npm uninstall echarts --save
npm install echarts@4.8.0 --save
npm run serve
```
2.使用Echarts5的版本
```js
import * as echarts from 'echarts'
Vue.prototype.$echarts = echarts
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



