<template>
  <div>
    <h1>限时购页 {{$route.query.userId}}</h1>
    <h1>限时购页</h1>
  </div>
</template>

<script>
export default {
  created () {
    console.log(this.$route.query)
  }
}
</script>
