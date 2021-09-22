<template>
    <div class="traffic-light">
        <div class="light red" :class="path === '/red' ? 'active' : ''"></div>
        <div class="light yellow" :class="path === '/yellow' ? 'active' : ''"></div>
        <div class="light green" :class="path === '/green' ? 'active' : ''"></div>
    </div>
</template>
<script>
  export default {
    props: ['path'],
  }
</script>
