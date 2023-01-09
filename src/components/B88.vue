<!--Bài 88: Hãy sử dụng vòng lặp for để xuất tất cả các ký tự từ A đến Z-->
<template>
  <form class="form-group card p-3 text-left" @submit.prevent="submit">
    <label class="font-weight-bold">Bài 88: Hãy sử dụng vòng lặp for để xuất tất cả các ký tự từ A đến Z</label>
    <div class="d-flex align-items-center">
      <div class="form-group border">
        <span class="p-5 " v-show="isSubmit">danh sách chuỗi kí tự :  <span class="font-weight-bold">{{list}}</span> </span>
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
      let list = ""
      // eslint-disable-next-line no-constant-condition
      for(let i = 65; i <= 90;i++){
        list += String.fromCharCode(i) + " "
      }
      this.list = list
      this.isSubmit = true

    }
  }
}
</script>