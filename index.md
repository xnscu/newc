---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "新概念英语4"
  text: ""
---
<script setup>
import { useData } from 'vitepress';

const { theme, site } = useData();
const sidebar = theme.value.sidebar;
const getLink = (link) => {
  if (!link) return '#';
  const base = site.value.base
   return base !== '/' || !base ? `${base}${link}`: link;
};
console.log({ theme, site })
</script>
# 目录

<ul>
  <li v-for="item in sidebar[0].items" :key="item.text">
    <a :href="getLink(item.link)">{{ item.text }}</a>
  </li>
</ul>