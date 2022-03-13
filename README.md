# Vue3 使用指南

## 快速开始

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

### 1.创建vue3项目

```sh
vue create vue-app-01
```

### 2.运行vue项目

```sh
cd vue-app-01

npm run vue-app-01
# OR
yarn serve
```


## 常见问题:

Question: 组件间有空白
Solution: 组件间不要留逗号等

Question: scss需安装

vue启动端口
> vue run serve 指定临时启动端口

```sh
# 临时端口低于1024都为1024
npm run vue-app-01 -- --port 9000
```