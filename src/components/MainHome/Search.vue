<template>
  <div>
    <v-text-field prepend-inner-icon="mdi-magnify" label="여행지나 서비스를 검색해보세요" variant="outlined" rounded :style="SearchStyle()"/>
  </div>
</template>

<script>
export default {
  methods: {
    SearchStyle(){
      return{
        marginTop: '20px',
        color: '#7000FF',
        shadow: '0px 0px 2px #000000'
      }
    }
  }
}

</script>
