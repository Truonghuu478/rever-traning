<!--Bài 157: Cho mảng 1 chiều các số thực, hãy tìm đoạn [a, b] sao cho đoạn này chứa tất cả các giá trị trong mảng-->
<template>
  <form class="form-group card  text-left p-3">
    <label class="font-weight-bold">Bài 157: Cho mảng 1 chiều các số thực, hãy tìm đoạn [a, b] sao cho đoạn này chứa tất cả các giá trị trong mảng</label>
      <div class="form-group w-50">
        <label class="form-label">Nhập phần tử</label>
        <input v-model="n" class="form-control" placeholder="nhập n :"/>
        <p>{{ list }}</p>
      </div>
    <div class="d-flex">
      <button class="btn btn-success my-3 mr-3" type="submit" @click.prevent="add">
        add
      </button>
      <button class="btn btn-info my-3" type="click" @click.prevent="reset">
        reset
      </button>
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
    reset() {
      this.list = []
      this.isSubmit = false
    },
    validate(value, status = 1) {
      if (status) {
        if (isNaN(value) || value === null) {
          alert(`B157 : vui lòng nhập thông tin bằng số thực`)
          return false
        }
      } else {
        if (isNaN(value) || value === null || parseInt(value) !== +value) {
          alert("B157 : vui lòng nhập thông tin bằng số nguyên")
          return false
        }
      }
      return true
    },
    add() {
      if (this.validate(this.n)) {
        this.list.push(+this.n)
        this.n = null
      }
    },
    perform() {
      if (this.list.length) {
        let max,min
        min = max = this.list[0];

        for (let i = 1; i < this.list.length; i++) {
          max = max < this.list[i] ? this.list[i] : max
          min = min > this.list[i] ? this.list[i] : min

        }
        this.results = `Giá trị trong mảng trong khoảng : [${min},${max}]`
        this.isSubmit = true
      }else  alert("Vui lòng nhập thông tin phẩn tử mảng")

    }
  }
}
</script>

