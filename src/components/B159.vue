<!--Bài 159: Cho mảng 1 chiều các số thực, hãy tìm giá trị đầu tiên lớn hơn giá trị 2003. Nếu mảng không có giá trị thỏa điều kiện trên thì trả về  -1-->
<template>
  <form class="form-group card  text-left p-3">
    <label class="font-weight-bold">Bài 159: Cho mảng 1 chiều các số thực, hãy tìm giá trị đầu tiên lớn hơn giá trị 2003. Nếu mảng không có giá trị thỏa điều kiện trên thì trả về  -1</label>
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
          alert(`B159 : vui lòng nhập thông tin bằng số thực`)
          return false
        }
      } else {
        if (isNaN(value) || value === null || parseInt(value) !== +value) {
          alert("B159 : vui lòng nhập thông tin bằng số nguyên")
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
        const max= 2003
        let result = -1

        for (let i = 0; i < this.list.length; i++) {
          if(this.list[i] > max){
            result = i
            break
          }
        }
        this.results = result !== -1?`Giá trị đầu tiên trong mảng lớn hơn ${max} là : ${this.list[result]}`:"Mảng không có giá trị nào lớn hơn" + max
        this.isSubmit = true
      } else alert("Vui lòng nhập thông tin phẩn tử mảng")

    }
  }
}
</script>