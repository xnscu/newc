---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "新概念英语4"
  text: ""
---
<script setup>
import { useData } from 'vitepress';

const { theme } = useData();
const sidebar = theme.value.sidebar;
console.log(sidebar[0].items)
</script>
# 目录

<ul>
  <li v-for="item in sidebar[0].items" :key="item.text">
    <a :href="item.link">{{ item.text }}</a>
  </li>
</ul>