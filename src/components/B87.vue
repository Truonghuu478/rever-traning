
<!--Bài 87: Tìm số nguyên dương n nhỏ nhất sao cho 1 + 2 + … + n > 10000-->
<template>
  <form class="form-group card p-3 text-left" @submit.prevent="submit">
    <label class="font-weight-bold">Bài 87: Tìm số nguyên dương n nhỏ nhất sao cho 1 + 2 + … + n > 10000</label>
    <div class="d-flex align-items-center">
      <div class="form-group">
        <span class="p-3" v-show="isSubmit"> Số n là : <span class="font-weight-bold">{{n}}</span> </span>
      </div>
    </div>
    <button class="btn btn-success my-3" type="submit">
      Tìm
    </button>
  </form>
</template>
<script >
export default {
  data(){
    return {
      n:null,
      isSubmit:false
    }
  },
  methods:{
    submit(){
        let s = 0
      let i =0;
      // eslint-disable-next-line no-constant-condition
        while(s < 10000){
           s+=++i
        }
        this.n =i
        this.isSubmit = true

    }
  }
}
</script>