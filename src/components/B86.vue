
<!--Bài 86: Tính S(n) = 1^3 + 2^3 + … + N^3-->
<template>
  <form class="form-group card p-3 text-left" @submit.prevent="submit">
    <label class="font-weight-bold">Bài 86: Tính S(n) = 1^3 + 2^3 + … + N^3</label>
    <div class="d-flex align-items-center">
      <div  class="form-group w-50  text-left">
        <label class="form-label">Nhập n : </label>
        <input  v-model="n" class="form-control" placeholder="Nhập n :"/>
      </div>
      <div class="form-group">
        <span class="p-3" v-show="isSubmit"> Tính S({{n}}) = <span class="font-weight-bold">{{s}}</span> </span>
      </div>
    </div>
    <button class="btn btn-success my-3" type="submit">
      Tính
    </button>
  </form>
</template>
<script >
export default {
  data(){
    return {
      n:null,
      s:0,
      isSubmit:false
    }
  },
  methods:{
    submit(){
      let n = +this.n
      if(isNaN(n) ){
        alert("Bài 86 : vui lòng nhập n bằng số !")
      }else {
        let s = 0
        for (let i = 1; i <= n; i++){
            s += Math.pow(i,3)
        }
        this.s = s
        this.isSubmit = true
      }
    }
  }
}
</script>