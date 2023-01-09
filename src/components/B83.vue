
<!--Bài 83: Viết chương trình nhập 2 số thực, kiểm tra xem chúng có cùng dấu hay không-->
<template>
  <form class="form-group card p-3 text-left" @submit.prevent="submit">
    <label class="font-weight-bold">Bài 83: Viết chương trình nhập 2 số thực, kiểm tra xem chúng có cùng dấu hay không</label>
    <div class="d-flex ">
      <div  class="form-group text-left w-50">
        <label class="form-label">Nhập a :</label>
        <input  v-model="a" class="form-control" placeholder="Nhập a :"  />
      </div>
      <div class="form-group text-left w-50">
        <label class="form-label">Nhập b :</label>
        <input  v-model="b"  class="form-control" placeholder="Nhập b :"  />
      </div>
    </div>
    <button class="btn btn-success my-3" type="submit">
      Kiểm tra
    </button>
    <p v-show="isSubmit"> a và b  <span class="font-weight-bold">{{result?'Cùng':'Khác'}} </span>dấu </p>
  </form>
</template>
<script >
export default {
  data(){
    return {
      a: null,
      b : null,
      result : true,
      isSubmit:false
    }
  },
  methods:{
    submit(){
      let a = parseFloat(this.a)
      let b = parseFloat(this.b)

      if(isNaN(a) || isNaN(b)){
        alert("Bài 83 : vui lòng nhập a,b bằng số thực !")
      }else if( a * -1 > 0 && b * -1 > 0){
          this.result = false
      }
          this.isSubmit = true
    }
  }
}
</script>