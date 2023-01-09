
<!-- Bài 80 : Tính S(n) = x + x^2/1 + 2 + x^3/1 + 2 + 3 + … + x^n/1 + 2 + 3 + …. + N-->
<template>
  <form class="form-group card p-3 text-left" @submit.prevent="submit">
    <label class="font-weight-bold"> B80 : Tính S(n) = x + x^2/1 + 2 + x^3/1 + 2 + 3 + … + x^n/1 + 2 + 3 + …. + n</label>
    <div class="d-flex ">
      <div  class="form-group w-50 text-left">
        <label class="form-label">Nhập n :</label>
      <input  v-model="n" class="form-control" placeholder="Nhập n :"  />
      </div>
      <div class="form-group w-50 text-left">
        <label class="form-label">Nhập x :</label>
      <input  v-model="x"  class="form-control" placeholder="Nhập x :"  />

      </div>
    </div>
    <button class="btn btn-success my-3" type="submit">
      Tính
    </button>
    <p v-show="isSubmit">S({{n}}) = <span class="font-weight-bold">{{s}}</span></p>
  </form>
</template>
<script >
export default {
  data(){
    return {
      n: null,
      s : 0,
      x : null,
      isSubmit:false
    }
  },
  methods:{
    submit(){
      let value = parseInt(this.n)
      if(isNaN(value) || value < 1 ){
        alert("Bài 80 : vui lòng nhập n bằng số và n > 0")
      }else{
        let s = 0
        let z = 0
        for (let i= value; i !== 0; i = Math.floor(i/10)){
          // x^n/1 + 2 + 3
          z += i
          s += Math.pow(this.x || 0,i)/z
        }
        this.s = Math.floor(s)
        this.isSubmit = true
      }
    }
  }
}
</script>