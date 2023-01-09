
<!-- Bài 92: Tìm ước số chung lớn nhất của 2 số nguyên dương-->
<template>
  <form class="form-group card p-3 text-left" @submit.prevent="submit">
    <label class="font-weight-bold"> Bài 92: Tìm ước số chung lớn nhất của 2 số nguyên dương</label>
    <div class="d-flex ">
      <div  class="form-group w-50">
        <label class="form-label">Nhập a :</label>
        <input  v-model="a" class="form-control" placeholder="Nhập a :"  />
      </div>
      <div class="form-group w-50  text-left">
        <label class="form-label">Nhập b :</label>
        <input  v-model="b"  class="form-control" placeholder="Nhập b :"  />
      </div>
    </div>
    <button class="btn btn-success my-3" type="submit">
      Kiểm tra
    </button>
    <p v-show="isSubmit">Ước số lớn nhất của {{a}} và {{b}} là <span class="font-weight-bold">{{uscll}}</span></p>
  </form>
</template>
<script >
export default {
  data(){
    return {
      a: null,
      b : null,
      uscll : null,
      isSubmit:false
    }
  },
  methods:{
    submit(){
      let a = parseInt(this.a)
      let b = parseInt(this.b)

      if(isNaN(a) || isNaN(b)  ){
        alert("Bài 92 : vui lòng nhập a,b bằng số !")
      }else{
        for (let i  =1 ; a !== b;i++){
          if(a > b){
            a = a-b
          }else{
            b = b -a
          }
        }
        this.uscll  = a
        this.isSubmit = true
      }
    }
  }
}
</script>