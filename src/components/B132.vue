<!--Bài 132: Viết hàm liệt kê các giá trị chẵn trong mảng 1 chiều các số nguyên-->
<template>
  <form class="form-group card  text-left p-3">
    <label class="font-weight-bold">Bài 132: Viết hàm liệt kê các giá trị chẵn trong mảng 1 chiều các số nguyên</label>
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
    <p v-show="isSubmit"> Kết quả : {{ results }}</p>
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
      this.results += this.list.filter(item => item % 2 === 0)
      this.isSubmit = true
    }
  }
}
</script>