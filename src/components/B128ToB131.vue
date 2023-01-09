<!--Bài 128 + 131: Viết hàm nhập, xuất mảng 1 chiều các số nguyên và số thực-->
<template>
  <form class="form-group card  text-left p-3">
    <label class="font-weight-bold">Bài 128 + 131: Viết hàm nhập, xuất mảng 1 chiều các số nguyên và số thực</label>
    <div class="d-flex">
      <div class="form-group w-50">
        <label class="form-label">Nhập phần tử</label>
        <input v-model="n" class="form-control" placeholder="nhập n :"/>
        <p>Danh sách : {{ list }}</p>
        <div class="my-3">
          <button class="btn btn-success mr-2" type="submit" @click.prevent="add">
            add
          </button>
          <button class="btn btn-success" type="submit" @click.prevent="list = []">
            reset
          </button>
        </div>
      </div>
        <div class="w-50">
          <label>Kiểu dữ liệu của danh sách </label>
          <select v-model="optionType" class="custom-select">
            <option value="0" selected>Số nguyên</option>
            <option value="1">Số thực</option>
          </select>
        </div>
    </div>
  </form>
</template>
<script>
export default {
  data() {
    return {
      n: null,
      optionType:0,
      list: [],
      results: "",
      isSubmit: false
    }
  },
  methods: {
    add() {
      if (isNaN(this.n) || this.n === null) {
        alert("B128 - B131 : Thong tin không họp lệ")
      } else {
        if(!this.optionType && parseInt(this.n) !== +this.n){
          alert("B128 - B131 : vui lòng nhập số nguyên!")
        }else{
        this.list.push(+this.n)
        this.n = null
        }
      }
    },
  },
  watch:{
    optionType(val){
      console.log(val)
      if(!+val){
        this.list=this.list.filter(item => parseInt(item) === + item)
      }
    }
  }
}
</script>