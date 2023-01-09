
<!--Bài 79: Hãy đếm số lượng chữ số của số nguyên dương n-->
<template>
  <form class="form-group text-left card p-3 " @submit.prevent="submit">
    <label class="font-weight-bold"> B79 : Hãy đếm số lượng chữ số của số nguyên dương n</label>
    <input  v-model="n" class="form-control" placeholder="Nhập n :"  />
    <button class="btn btn-success my-3" type="submit">
      Liệt kê
    </button>
    <p v-show="isSubmit">Có <span class="font-weight-bold">{{count}}</span> chữ số của số  {{n}}</p>
  </form>
</template>
<script >
export default {
  data(){
    return {
      n: null,
      count : 0,
      isSubmit:false
    }
  },
  methods:{
    submit(){
      let value = parseInt(this.n)
      if(isNaN(value) || value < 1 ){
        alert("Bài 79 : vui lòng nhập n bằng số và n > 0")
      }else{
        let count = 0
        for (let i= value; i !== 0; i = Math.floor(i/10)){
            count ++
        }
        this.count = count
        this.isSubmit = true
      }
    }
  }
}
</script>