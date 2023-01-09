
<!-- Bài 82: Viết chương trình tìm số lớn nhất trong 3 số thực a, b, c-->
<template>
  <form class="form-group card p-3 text-left" @submit.prevent="submit">
    <label class="font-weight-bold"> Bài 82: Viết chương trình tìm số lớn nhất trong 3 số thực a, b, c</label>
    <div class="d-flex ">
      <div  class="form-group w-50">
        <label class="form-label">Nhập a :</label>
        <input  v-model="a" class="form-control" placeholder="Nhập n :"  />
      </div>
      <div class="form-group w-50  text-left">
        <label class="form-label">Nhập b :</label>
        <input  v-model="b"  class="form-control" placeholder="Nhập x :"  />
      </div>
      <div class="form-group w-50  text-left">
        <label class="form-label">Nhập c :</label>
        <input  v-model="c"  class="form-control" placeholder="Nhập x :"  />
      </div>
    </div>
    <button class="btn btn-success my-3" type="submit">
      Kiểm tra
    </button>
    <p v-show="isSubmit">Max =  <span class="font-weight-bold">{{max}}</span></p>
  </form>
</template>
<script >
export default {
  data(){
    return {
      a: null,
      b : null,
      c : null,
      max : null,
      isSubmit:false
    }
  },
  methods:{
    submit(){
      let a = parseInt(this.a)
      let b = parseInt(this.b)
      let c = parseInt(this.c)
      console.log(a,b,c)
      if(isNaN(a) || isNaN(b) || isNaN(c) ){
        alert("Bài 82 : vui lòng nhập a,b,c bằng số !")
      }else{
        let max = a
        if(max < b ) max = b
        if(max < c ) max = c
        this.max  = max
        this.isSubmit = true
      }
    }
  }
}
</script>