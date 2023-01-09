<!--  Bài 94: Viết chương trình in ra tất cả các số lẻ nhỏ hơn 100 trừ các số 5, 7, 93-->
<template>
  <form class="form-group card p-3 text-left" @submit.prevent="submit">
    <label class="font-weight-bold"> Bài 94: Viết chương trình in ra tất cả các số lẻ nhỏ hơn 100 trừ các số 5, 7, 93</label>
    <button class="btn btn-success my-3" type="submit">
      Liệt kê
    </button>
    <p v-show="isSubmit"> Danh sách số lẻ dưới 100 ngoại trừ 5,7,93 : <span class="font-weight-bold">{{list}}</span></p>
  </form>
</template>
<script>
export default {
  data() {
    return {
      list: "",
      isSubmit: false
    }
  },
  methods: {
    submit() {
      const MAX = 100
      let list = ""
      let oddNumbers = [5,7,93]
      for(let i = 1 ; i < MAX; i+= 2){
        if(oddNumbers.indexOf(i) === -1){
          list += " "+i
        }
      }
      this.list = list
      this.isSubmit = true
    }
  }
}
</script>