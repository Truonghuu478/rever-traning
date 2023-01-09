<!--Bài 136: Tìm số chẵn cuối cùng trong mảng 1 chiều các số nguyên. Nếu mảng không có giá trị chẵn thì trả về -1-->
<template>
  <form class="form-group card  text-left p-3">
    <label class="font-weight-bold">Bài 136: Tìm số chẵn cuối cùng trong mảng 1 chiều các số nguyên. Nếu mảng không có giá trị chẵn thì trả về -1</label>
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
      if (isNaN(this.n) || this.n === null || parseInt(this.n) !== +this.n) {
        alert("B136 : vui lòng nhập thông tin n bằng số nguyên")
      } else {
        this.list.push(+this.n)
        this.n = null
      }
    },
    perform() {
      let evenIdx = -1
      for (let i = 0; i < this.list.length; i++) {
        if (this.list[i] % 2 === 0 ) {
          evenIdx = i
        }
      }
      this.results = evenIdx === -1 ? "Mảng không có giá trị chẵn":"Giá trị chẵn cuối cùng là là : "+ this.list[evenIdx]
      this.isSubmit = true
    }
  }
}
</script>
