<!--Bài 161: Cho mảng 1 chiều các số nguyên, hãy tìm giá trị đầu tiên nằm trong khoảng [x, y] cho trước. Nếu mảng không có giá trị thỏa điều kiện trên thì trả về -1-->
<template>
  <form class="form-group card  text-left p-3">
    <label class="font-weight-bold">Bài 161: Cho mảng 1 chiều các số nguyên, hãy tìm giá trị đầu tiên nằm trong khoảng
      [x, y] cho trước. Nếu mảng không có giá trị thỏa điều kiện trên thì trả về -1</label>

    <div class="d-flex">
      <div class="form-group w-50">
        <label class="form-label">Nhập phần tử</label>
        <input v-model="n" class="form-control" placeholder="nhập n :"/>
        <p>{{ list }}</p>
      </div>
      <div class="form-group w-50 d-flex">
        <div class="form-group w-50">
          <label class="form-label">Nhập x</label>
          <input v-model="x" type="number" class="form-control" placeholder="nhập x :"/>
        </div>
        <div class="form-group w-50">
          <label class="form-label">Nhập y</label>
          <input v-model="y" type="number" class="form-control" placeholder="nhập y :"/>
        </div>
      </div>
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
      x: null,
      y: null,
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
          alert(`B161 : vui lòng nhập thông tin bằng số thực`)
          return false
        }
      } else {
        if (isNaN(value) || value === null || parseInt(value) !== +value) {
          alert("B161 : vui lòng nhập thông tin bằng số nguyên")
          return false
        }
      }
      return true
    },
    add() {
      if (this.validate(this.n, 0)) {
        this.list.push(+this.n)
        this.n = null
      }
    },
    perform() {
      if (this.list.length && this.validate(this.x) && this.validate(this.y)) {
        if (+this.x > +this.y) {
          alert("Khoảng [x,y] không hợp lệ, vui lòng nhập lại !")
        } else {
          let result = -1
          for (let i = 0; i < this.list.length; i++) {
            if (this.list[i] <= this.y && this.list[i] >= this.x) {
              result = this.list[i]
              break
            }
          }
          this.results = result === -1 ? `Mảng không có giá trị  thỏa điều kiện [ ${this.x},${this.y} ]` : `Giá trị đầu tiên nằm trong khoảng [${this.x},${this.y}] là : ${result}`
          this.isSubmit = true
        }
      }

    }
  }
}
</script>