<!--Bài 133: Viết hàm liệt kê các vị trí mà giá trị tại đó là giá trị âm trong mảng 1 chiều các số thực-->
<template>
  <form class="form-group card  text-left p-3">
    <label class="font-weight-bold">Bài 133: Viết hàm liệt kê các vị trí mà giá trị tại đó là giá trị âm trong mảng 1
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
      Liệt kê
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
        alert("B123 : vui lòng nhập thông tin n bằng số")
      } else {
        this.list.push(+this.n)
        this.n = null
      }
    },
    perform() {
      let results = ""
      for (let i = 0; i < this.list.length; i++) {
        if (this.list[i] < 0) {
          results += " " + i
        }
      }
      this.results = results
      this.isSubmit = true
    }
  }
}
</script>