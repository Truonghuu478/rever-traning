<!--Bài 126: Viết hàm tính tổng các giá trị âm trong mảng 1 chiều các số thực-->
<template>
  <form class="form-group card  text-left p-3">
    <label class="font-weight-bold">Bài 126: Viết hàm tính tổng các giá trị âm trong mảng 1 chiều các số thự</label>
    <div class="d-flex ">
      <div class="form-group w-50">
        <label class="form-label">Nhập phần tử</label>
        <input v-model="n" class="form-control" placeholder="nhập n :"/>
        <p>{{list}}</p>
        <button class="btn btn-success my-3" type="submit" @click.prevent="add">
          Tính
        </button>
      </div>
    </div>
    <button class="btn btn-success my-3" type="click" @click.prevent="perform">
      Tìm
    </button>
    <p v-show="isSubmit"> Kết quả : s = <span class="font-weight-bold">{{s}}</span> </p>
  </form>
</template>
<script>
export default {
  data() {
    return {
      n: null,
      list: [],
      s : 0,
      isSubmit: false
    }
  },
  methods: {
    add() {
      if(isNaN(this.n) ||this.n === null){
        alert("B126 : vui lòng nhập thông tin n bằng số")
      } else {
        this.list.push(+this.n)
        this.n = null
      }
    },
    perform() {
      let  s = 0
      for (let i = 0; i < this.list.length; i++) {
        if ( i < 0) {
          s += this.list[i]
        }
      }
      this.s = s
      this.isSubmit = true
    }
  }
}
</script>