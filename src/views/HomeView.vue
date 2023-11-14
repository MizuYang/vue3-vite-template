<template>
  <p>{{ result }}</p>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'

// data
const result = ref()

getAjax()

async function getAjax () {
  const config = {
    msthod: 'get',
    url: 'https://randomuser.me/api/',
    data: {}
  }
  try {
    const res = await axios(config)
    console.log(res)
    result.value = res.data.info.seed

    console.log(result.value)
  } catch (err) {
    console.error(err)
  }
}
</script>

<style lang='scss' scope></style>
