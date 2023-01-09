
<!--Bài 89: Viết chương trình tính tổng các giá trị lẻ nguyên dương nhỏ hơn n-->
<template>
  <form class="form-group card p-3 text-left" @submit.prevent="submit">
    <label class="font-weight-bold">Bài 89: Viết chương trình tính tổng các giá trị lẻ nguyên dương nhỏ hơn n</label>
    <div class="d-flex align-items-center">
      <div  class="form-group w-50  text-left">
        <label class="form-label">Nhập n : </label>
        <input  v-model="n" class="form-control" placeholder="Nhập n :"/>
      </div>
    </div>
    <button class="btn btn-success my-3" type="submit">
      Tính
    </button>
    <p class="p-3" v-show="isSubmit">S({{n}}) = <span class="font-weight-bold">{{list.slice(0,200)}}</span>  {{list.length > 200 ? "..." :"" }} = <span class="font-weight-bold">{{s}} </span> </p>
  </form>
</template>
<script >
export default {
  data(){
    return {
      n:null,
      list:"",
      s: 0,
      isSubmit:false
    }
  },
  methods:{
    submit(){
      let n = parseInt(this.n)
      let list = ""
      let s = 0
      if(isNaN(n)){
        alert("B89 : vui lòng nhập n bằng số và  n > 0")
      }else{
        // eslint-disable-next-line no-constant-condition
        for(let i = 1; i <= n;i +=2){
          s += i
          list += i === 1? " "+i : " + "+i
        }
        this.s = s
        this.list = list
      this.isSubmit = true
      }
    }
  }
}
</script>