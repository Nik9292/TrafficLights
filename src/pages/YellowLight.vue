<template>
    <traffic-lights :path="path"/>
</template>
<script>
import TrafficLights from '../components/TrafficLights.vue';
export default {
    components: {
        TrafficLights
    },
    data() {
        return {
            name: '/yellow',
            path: '',
        }
    },
    mounted() {
        if(this.$route.path == this.name) {
            this.path = this.name;
        }
    }
}
</script>