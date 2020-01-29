<template>
  <div class="main container">
    <WinnerPicker />
    <small class="freepik"><a href="https://www.freepik.com/" target="_blank">Image source - www.freepik.com</a></small>
  </div>
</template>

<script>
import WinnerPicker from '@/components/WinnerPicker.vue'

export default {
  name: "Home",
  components: {
    WinnerPicker
  }
};
</script>

<style>

.freepik {
  position:absolute;
  right: 0;
  bottom: 0;
}
.freepik a {
  color: #999;
}
   
</style>
