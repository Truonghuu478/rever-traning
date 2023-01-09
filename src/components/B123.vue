<!--Bài 123: Viết hàm tìm 1 vị trí mà giá trị tại vị trí đó là giá trị nhỏ nhất trong mảng 1 chiều các số nguyên-->
<template>
  <form class="form-group card  text-left p-3">
    <label class="font-weight-bold">Bài 123: Viết hàm tìm 1 vị trí mà giá trị tại vị trí đó là giá trị nhỏ nhất trong
      mảng 1 chiều các số nguyên</label>
    <div class="d-flex ">
      <div class="form-group w-50">
        <label class="form-label">Nhập n</label>
        <input v-model="n" class="form-control" placeholder="nhập n :"/>
        <p>{{list}}</p>
        <button class="btn btn-success my-3" type="submit" @click.prevent="add">
          add
        </button>
      </div>
    </div>
    <button class="btn btn-success my-3" type="click" @click.prevent="perform">
      Tìm
    </button>
    <p v-show="isSubmit"> Kết quả :vị trí của giá trị nhỏ nhất trong mảng là vị trí thứ <span
        class="font-weight-bold">{{ min }}</span> -> phẩn tử :  <span
        class="font-weight-bold">{{list[min]}}</span></p>
  </form>
</template>
<script>
export default {
  data() {
    return {
      n: null,
      list: [],
      min: null,
      isSubmit: false
    }
  },
  methods: {
    add() {
      if(isNaN(this.n) ||this.n === null){
        alert("B123 : vui lòng nhập thông tin n bằng số")
      } else {
        this.list.push(this.n)
        this.n = null
      }
    },
    perform() {
      let min = 0
      for (let i = 0; i < this.list.length; i++) {
        if (this.list[min] > this.list[i]) {
          min = i
        }
      }
      this.min = min
      this.isSubmit = true

    }
  }
}
</script>