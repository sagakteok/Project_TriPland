<template>
  <div>
    <v-text-field label="여행지나 서비스를 검색해보세요" variant="outlined" rounded :style="SearchStyle()"/>
  </div>
</template>

<script>
export default {
  methods: {
    SearchStyle(){
      return{
        marginTop: '20px',
        color: '#7000FF'
      }
    }
  }
}

</script>
