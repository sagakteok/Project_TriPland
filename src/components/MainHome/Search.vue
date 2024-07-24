<template>
  <div>
    <v-text-field color="#7000FF" bg-color="#F3EDF7" prepend-inner-icon="mdi-magnify" label="여행지나 서비스를 검색해보세요" variant="solo" clearable rounded :style="SearchStyle()"/>
  </div>
</template>

<script>
export default {
  methods: {
    SearchStyle(){
      return{
        marginTop: '20px',
      }
    }
  }
}

</script>
