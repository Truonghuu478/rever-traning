<!--Bài 139: Tìm vị trí số hoàn thiện cuối cùng trong mảng 1 chiều các số nguyên. Nếu mảng không có số hoàn thiện thì trả về giá trị  -1-->
<template>
  <form class="form-group card  text-left p-3">
    <label class="font-weight-bold">Bài 139: Tìm vị trí số hoàn thiện cuối cùng trong mảng 1 chiều các số nguyên. Nếu
      mảng không có số hoàn thiện thì trả về giá trị -1</label>
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
    checkSHT(n) {
      let s = 0
      for (let i = 1; i < n; i++) {
        if (n % i === 0) {
          s += i
        }
      }
      return s === n
    },
    add() {
      if (isNaN(this.n) || this.n === null || parseInt(this.n) !== +this.n) {
        alert("B139 : vui lòng nhập thông tin n bằng số nguyên")
      } else {
        this.list.push(+this.n)
        this.n = null
      }
    },
    perform() {
      let perfectNumberLastIdx = -1
      for (let i = 0; i < this.list.length; i++) {
        if (this.checkSHT(this.list[i])) {
          perfectNumberLastIdx = i
        }
      }
      this.results = perfectNumberLastIdx !== -1 ? "Mảng có giá trị số hoàn thiện cuối cùng ở vị trí " + perfectNumberLastIdx : " Mảng không có số hoàn thiện"
      this.isSubmit = true
    }
  }
}
</script>
