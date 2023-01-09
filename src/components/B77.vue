<!--Bài 77: Viết chương trình tính tổng của dãy số sau: S(n) = 1 + 2 + 3 + … + n-->
<template>
  <form class="form-group card text-left p-3" @submit.prevent="submit">
    <label class="font-weight-bold"> B77 : Viết chương trình tính tổng của dãy số sau: S(n) = 1 + 2 + 3 + … + n</label>
    <input  v-model="n" class="form-control" placeholder="Nhập n :"  />
    <button class="btn btn-success my-3" type="submit">
      Tính
    </button>
    <p v-show="isSubmit">S(n) = {{listS.slice(0,100)}} {{listS.length > 100 ? "..." : ""}} = <span class="font-weight-bold">{{s}}</span></p>
  </form>
</template>
<script >
export default {
data(){
  return {
    n: null,
    s : 0,
    listS : '',
    isSubmit:false
  }
},
  methods:{
  submit(){
    let value = parseInt(this.n)
    if(isNaN(value) || value < 1 ){
      alert("Bài 77 : vui lòng nhập n bằng số và n > 0")
    }else{
      let s = 1
      let listS ="1"
      for (let i= 1; i <= value; i++){
        // start tính tổng b77
        listS += " + " +i
        s +=i
        // end tính tổng b77
      }
      this.s = s
      this.listS = listS
      this.isSubmit = true
    }
    }
  }
}
</script>