
<!--Bài 84: Viết chương trình giải và biện luận phương trình bậc nhất ax + b = 0-->
<template>
  <form class="form-group card p-3 text-left" @submit.prevent="submit">
    <label class="font-weight-bold">Bài 84: Viết chương trình giải và biện luận phương trình bậc nhất ax + b = 0</label>
    <div class="d-flex ">
      <div  class="form-group w-50  text-left">
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
    <p v-show="isSubmit">{{conclude}} </p>
  </form>
</template>
<script >
export default {
  data(){
    return {
      a: null,
      b : null,
      conclude:"",
      isSubmit:false
    }
  },
  methods:{
    submit(){
      let a = parseFloat(this.a)
      let b = parseFloat(this.b)

      if(isNaN(a) || isNaN(b)){
        alert("Bài 84 : vui lòng nhập a,b bằng số  !")
      }else if(a === 0){
        if( b === 0){
        this.conclude = "Phương trình vô số nghiệm"
        }else {
          this.conclude = "Phương trình vô nghiệm"
        }
      }else{
      let x = (-b/a).toFixed(2)
        this.conclude = "Phương trình có một nghiệm duy nhất x = "+x
      }
      this.isSubmit = true
    }
  }
}
</script>