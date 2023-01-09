<!--Bài 91: In tất cả các số nguyên dương lẻ nhỏ hơn 100-->
<template>
  <form class="form-group card p-3 text-left" @submit.prevent="submit">
    <label class="font-weight-bold">Bài 91: In tất cả các số nguyên dương lẻ nhỏ hơn 100</label>
    <div class="d-flex align-items-center">
      <div class="form-group border">
        <span class="p-5 " v-show="isSubmit">Danh sách số nguyên dương lẻ nhỏ hơn 100:  <span class="font-weight-bold">{{list}}</span> </span>
      </div>
    </div>
    <button class="btn btn-success my-3" type="submit">
      Xuất
    </button>
  </form>
</template>
<script >
export default {
  data(){
    return {
      list:"",
      isSubmit:false
    }
  },
  methods:{
    submit(){
      const MAX = 100
      let list = ""
      // eslint-disable-next-line no-constant-condition
      for(let i = 1; i < MAX;i += 2){
        list += " "+i
      }
      this.list = list
      this.isSubmit = true

    }
  }
}
</script>