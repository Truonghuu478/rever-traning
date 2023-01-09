<!--Bài 109: Viết chương trình in bảng cửu chương ra màn hình-->
<template>
  <form class="form-group card text-left p-3" @submit.prevent="submit">
    <label class="font-weight-bold">Bài 109: Viết chương trình in bảng cửu chương ra màn hình</label>
    <button class="btn btn-success my-3" type="submit">
      Tính
    </button>
    <p v-show="isSubmit">Kết quả : <span class="font-weight-bold">{{ results }}</span></p>
  </form>
</template>
<script>
export default {
  data() {
    return {
      y: null,
      x: null,
      results: "",
      isSubmit: false
    }
  },
  methods: {
    submit() {
      let results = ""
     for (let i = 2 ; i <=9;i++){
       for (let j = 1; j <=10;j++){
         results += `${i} x ${j} = ${i*j} ||`
         if(j === 10){
           results += `<br/>`
         }
       }
     }
     this.results = results
     this.isSubmit = true
    }
  }
}
</script>