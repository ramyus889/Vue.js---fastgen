<script setup>
const items = [
  {
    id: 1,
    title: 'MySQL',
    image: '/integrate/mySQL.svg',
    text: 'An open-source relational database management system that enables efficient storage ...',
    link: '/mysql'
  },
  {
    id: 2,
    title: 'PostgreSQL',
    image: '/integrate/postgres.svg',
    text: 'An advanced open-source relational database management system known for ',
    link: '/PostgreSQL'
  },
  {
    id: 3,
    title: 'MongoDB',
    image: '/integrate/MongoDB.svg',
    text: 'A NoSQL document database that stores data in flexible, JSON-like documents.',
    link: '/MongoDB'
  },
  {
    id: 4,
    title: 'MariaDB',
    image: '/integrate/MariaDB.svg',
    text: 'A community-driven open-source fork of MySQL with enhanced features and ...',
    link: '/MariaDB'
  },
  {
    id: 5,
    title: 'TiDB',
    image: '/integrate/TiDB.svg',
    text: 'A distributed SQL database that supports both SQL and NoSQL workloads with horizontal ...',
    link: '/TiDB'
  },
  {
    id: 6,
    title: 'Redis',
    image: '/integrate/redis.svg',
    text: 'An in-memory data structure store often used as a database, cache, and message broker.',
    link: '/Redis'
  },
  {
    id: 7,
    title: 'Appwrite',
    image: '/integrate/appwrite.svg',
    text: 'An open-source backend server platform that provides authentication, database, and...',
    link: '/Appwrite'
  },
  {
    id: 8,
    title: 'Oracle DB',
    image: '/integrate/oracledb.svg',
    text: 'A high-performance, scalable relational database management system that ...',
    link: '/Oracle'
  }
];
</script>
<template>
  <div class="font-bold text-[20px] mt-[100px] mb-[30px]">Database Integrations</div>
  <div class="grid grid-cols-4 gap-7">
    <div v-for="item in items" :key="item.id" class="">
      <div class="px-[32px] py-[32px] bg-[#FAFBFC] opacity-80 rounded-[16px] flex flex-col gap-3">
        <div class=""><img :src="item.image" alt="" /></div>
        <div class="text-[#1D2129] font-semibold text-[18px]">{{ item.title }}</div>
        <div class="text-[#1D2129]">{{ item.text }}</div>
        <RouterLink :to="item.link" class="text-[#654aec] underline">Learn more →</RouterLink>
      </div>
    </div>
  </div>
</template>
