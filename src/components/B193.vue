<template>
  <form class="form-group card text-left p-3">
    <label class="font-weight-bold">Bài 193: Cho mảng 1 chiều các số nguyên. Hãy viết hàm liệt kê các giá trị trong mảng có dạng 3^k. Nếu mảng không có giá trị đó thì trả về 0</label>
    <div class="d-flex">
      <div class="form-group w-50">
        <label class="form-label">Nhập phần tử</label>
        <input v-model="n" class="form-control" placeholder="nhập n :" />
        <p>{{ list }}</p>
      </div>
    </div>

    <div class="d-flex">
      <button
        class="btn btn-success my-3 mr-3"
        type="submit"
        @click.prevent="add">
        add
      </button>
      <button class="btn btn-info my-3" type="click" @click.prevent="reset">
        reset
      </button>
    </div>
    <button class="btn btn-success my-3" type="click" @click.prevent="perform">
      Tìm
    </button>
    <p v-show="isSubmit">
      Kết quả : <span class="font-weight-bold">{{ results }}</span>
    </p>
  </form>
</template>
<script>
import ValidateMixin from "../validate.mixin";

export default {
  mixins: [ValidateMixin],
  data() {
    return {
      n: null,
      list: [],
      results: "",
      isSubmit: false,
    };
  },
  methods: {
    reset() {
      this.list = [];
      this.isSubmit = false;
    },
    add() {
      if (this.validate(this.n, "B193",0)) {
        this.list.push(+this.n);
        this.n = null;
      }
    },
    KTDang3k(n){
        if(n <2){
            return true
        }
         while(n > 1){
            if(n % 3 !== 0)  
                return false
            n = parseInt(`${n / 3}`);
        }
    },
    perform() {
      if (!this.list.length) {
        alert("Thông tin không hợp lệ");
        return;
      }
      let results = ""

      for (let i = 0; i < this.list.length; i++) {
          if (this.KTDang3k(this.list[i])) {
            result += " " + this.list[i]
          }
        }
      this.results = results ? "Mảng có các giá trị 3^k là : " + results : "Mảng không có giá trị thoả điều kiện"

      this.isSubmit = true;
    },
  },
};
</script>
