<!--Bài 99: Viết chương trình nhập vào 3 số thực. Hãy in 3 số ấy ra màn hình theo thứ tự tang dần mà chỉ dùng tối đa 1 biến phụ-->
<template>
  <form class="form-group card p-3 text-left" @submit.prevent="submit">
    <label class="font-weight-bold">Bài 99: Viết chương trình nhập vào 3 số thực. Hãy in 3 số ấy ra màn hình theo thứ tự
      tang dần mà chỉ dùng tối đa 1 biến phụ</label>
    <div class="d-flex ">
      <div class="form-group w-50">
        <label class="form-label">Nhập a :</label>
        <input v-model="a" class="form-control" placeholder="Nhập a :"/>
      </div>
      <div class="form-group w-50  text-left">
        <label class="form-label">Nhập b :</label>
        <input v-model="b" class="form-control" placeholder="Nhập b :"/>
      </div>
      <div class="form-group w-50  text-left">
        <label class="form-label">Nhập c :</label>
        <input v-model="c" class="form-control" placeholder="Nhập c :"/>
      </div>
    </div>
    <button class="btn btn-success my-3" type="submit">
      Thưc hiện
    </button>
    <p v-show="isSubmit"> Kết quả : <span class="font-weight-bold">{{ results }}</span></p>
  </form>
</template>
<script>
export default {
  data() {
    return {
      a: null,
      b: null,
      c: null,
      results: "",
      isSubmit: false
    }
  },
  methods: {
    submit() {
      let a = parseFloat(this.a)
      let b = parseFloat(this.b)
      let c = parseFloat(this.c)
      if (isNaN(a) || isNaN(b) || isNaN(c)) {
        alert("B100 : Vui lòng nhập a,b,c bằng số thực !")
      } else {
        let temp
        if (a > b) {
          temp = a
          a = b
          b = temp
        }
        if (a > c) {
          temp = a
          a = c
          c = temp
        }
        if (b > c) {
          temp = b
          b = c
          c = temp
        }
        this.results = 'a = ' + a + ' b =  ' + b + ' c = ' + c
        this.isSubmit = true
      }
    }
  }
}
</script>