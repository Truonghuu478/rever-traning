<!--Bài 108:  Viết hàm tính S = x^y-->
<template>
  <form class="form-group card text-left p-3" @submit.prevent="submit">
    <label class="font-weight-bold"> Bài 108:  Viết hàm tính S = x^y</label>
    <div class="d-flex ">
      <div class="form-group w-50">
        <label class="form-label">Nhập x :</label>
        <input v-model="x" class="form-control" placeholder="Nhập x :"/>
      </div>
      <div class="form-group w-50">
        <label class="form-label">Nhập y :</label>
        <input v-model="y" class="form-control" placeholder="Nhập y :"/>
      </div>
    </div>
    <button class="btn btn-success my-3" type="submit">
      Tính
    </button>
    <p v-show="isSubmit">Kết quả : S =   <span class="font-weight-bold">{{ s }}</span></p>
  </form>
</template>
<script>
export default {
  data() {
    return {
      y: null,
      x: null,
      s: 0,
      isSubmit: false
    }
  },
  methods: {
    submit() {
      let y = parseInt(this.y)
      let x = parseInt(this.x)
      if (isNaN(y) || isNaN(x)) {
        alert("Bài 108 : vui lòng nhập n,x bằng số ")
      }else{
        this.s = Math.pow(x,y)
        this.isSubmit = true
      }
    }
  }
}
</script>