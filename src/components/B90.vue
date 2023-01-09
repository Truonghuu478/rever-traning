
<!-- Bài 90: Viết chương trình tìm số nguyên dương m lớn nhất sao cho 1 + 2 + … + m lớn hơn n-->
<template>
  <form class="form-group card p-3 text-left" @submit.prevent="submit">
    <label class="font-weight-bold">Bài 90: Viết chương trình tìm số nguyên dương m lớn nhất sao cho 1 + 2 + … + m lớn hơn n </label>
    <div class="d-flex align-items-center">
      <div  class="form-group w-50  text-left">
        <label class="form-label">Nhập n : </label>
        <input  v-model="n" class="form-control" placeholder="Nhập n :"/>
      </div>
    </div>
    <button class="btn btn-success my-3" type="submit">
      Tính
    </button>
    <p class="p-3" v-show="isSubmit">Số nguyên dương m lớn nhất là : {{m}} </p>
  </form>
</template>
<script >
export default {
  data(){
    return {
      n:null,
      s: 0,
      m : 0,
      isSubmit:false
    }
  },
  methods:{
    submit(){
      let n = parseInt(this.n)
      if(isNaN(n) || n < 0){
        alert("B90 : vui lòng nhập n bằng số và  n > 0")
      }else{
        let s = 0
        let m = 0
        while (s + m < n){
          s += ++m
        }
        this.s = s
        this.m = m
        this.isSubmit = true
      }
    }
  }
}
</script>