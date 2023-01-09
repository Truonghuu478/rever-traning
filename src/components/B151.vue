<!--Bài 151: Hãy tìm số nguyên tố lớn nhất trong mảng 1 chiều các số nguyên. Nếu mảng không có số nguyên tố thì trả về -1-->
<template>
  <form class="form-group card  text-left p-3">
    <label class="font-weight-bold">Bài 151: Hãy tìm số nguyên tố lớn nhất trong mảng 1 chiều các số nguyên. Nếu mảng
      không có số nguyên tố thì trả về -1</label>
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
    isSNT(n) {
      if (n < 2) {
        return false
      } else if (n > 2) {
        if (n % 2 === 0)  return false
        for (let i = 2; i <= Math.sqrt(n); i++) {
          if (n % i === 0) return false
        }
      }
      return true
    },
    add() {
      if (isNaN(this.n) || this.n === null || parseInt(this.n) !== +this.n) {
        alert("B151 : Vui lòng nhập thông tin n bằng số nguyên")
      } else {
        this.list.push(+this.n)
        this.n = null
      }
    },
    perform() {
      let result = -1
      for (let i = 0; i < this.list.length; i++) {
        if (this.isSNT(this.list[i])) {
          if(!this.list[result] || this.list[i] > this.list[result])
          result = i
        }
      }
      this.results = result !== -1 ? "Số nguyên tố lớn nhất trong mảng là : " + this.list[result] : " Mảng không có số nguyên tố"
      this.isSubmit = true
    }
  }
}
</script>
