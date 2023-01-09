
<!--Bài 78: Liệt kê tất cả các ước số của số nguyên dương n-->
<template>
  <form class="form-group card text-left p-3" @submit.prevent="submit">
    <label class="font-weight-bold"> B78 : Liệt kê tất cả các ước số của số nguyên dương n</label>
    <input  v-model="n" class="form-control" placeholder="Nhập n :"  />
    <button class="btn btn-success my-3" type="submit">
      Liệt kê
    </button>
    <p v-show="isSubmit">Danh sách ước số của {{n}} là :  {{lstUocSo}}  </p>
  </form>
</template>
<script >
export default {
  data(){
    return {
      n: null,
      lstUocSo : '',
      isSubmit:false
    }
  },
  methods:{
    submit(){
      let value = parseInt(this.n)
      if( isNaN(value) || value < 1 ){
        alert("B 78 : Vui lòng nhập n bằng số và  n > 0")
      }else{
        let lstUocSo = ""
        for (let i= 1; i <= value; i++){
          if(value % i === 0){
            lstUocSo += " "+i
          }
        }
        this.lstUocSo = lstUocSo
        this.isSubmit = true
      }
    }
  }
}
</script>