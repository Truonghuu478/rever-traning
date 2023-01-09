<!--Bài 137: Tìm 1 vị trí mà giá trị tại vị trí đó là giá trị nhỏ nhất trong mảng 1 chiều các số thực-->
<template>
  <form class="form-group card  text-left p-3">
    <label class="font-weight-bold">Bài 137: Tìm 1 vị trí mà giá trị tại vị trí đó là giá trị nhỏ nhất trong mảng 1
      chiều các số thực</label>
    <div class="d-flex ">
      <div class="form-group w-50">
        <label class="form-label">Nhập phần tử</label>
        <input v-model="n" class="form-control" placeholder="nhập n :"/>
        <p>{{ list }}</p>
        <button class="btn btn-success my-3" type="submit" @click.prevent="add">
          add
        </button>
      </div>
    </div>
    <button class="btn btn-success my-3" type="click" @click.prevent="perform">
      Tìm
    </button>
    <p v-show="isSubmit"> Kết quả : <span class="font-weight-bold">{{ results }}</span></p>
  </form>
</template>
<script>
export default {
  data() {
    return {
      n: null,
      list: [],
      results: "",
      isSubmit: false
    }
  },
  methods: {
    add() {
      if (isNaN(this.n) || this.n === null) {
        alert("B137 : vui lòng nhập thông tin n bằng số")
      } else {
        this.list.push(+this.n)
        this.n = null
      }
    },
    perform() {
      let minIdx = 0
      for (let i = 1; i < this.list.length; i++) {
        if (this.list[minIdx] > this.list[i]) {
          minIdx = i
          break
        }
      }
      this.results = "Vị trí của giá trị nhỏ nhất trong mảng là : " + minIdx
      this.isSubmit = true
    }
  }
}
</script>
