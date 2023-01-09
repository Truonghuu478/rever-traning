<template>
  <form class="form-group card text-left p-3">
    <label class="font-weight-bold">Bài 181: Cho mảng 1 chiều các số nguyên. Hãy viết hàm liệt kê các giá trị chẵn có ít nhất 1 lân cận cũng là giá trị chẵn</label>
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
        @click.prevent="add"
      >
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
      if (this.validate(this.n, "B181", 0)) {
        this.list.push(+this.n);
        this.n = null;
      }
    },
    perform() {
      if (!this.list.length) {
        alert("Thông tin không hợp lệ");
        return;
      }
        let result = "";
        for (let i = 0; i < this.list.length; i++) {
            let valueAfter = !isNaN(this.list[i-1]) ? this.list[i-1] : -1
            let valueBefore = !isNaN(this.list[i+1]) ? this.list[i+1] : -1
          if (this.list[i] % 2 === 0 && (valueAfter % 2 === 0 || valueBefore % 2 === 0)) {
            result += " " + i;
          }
        }
        this.results = result ? `Danh sách giá trị thoả điều kiện là :` + result : `Danh sách không có giá trị thoả điều kiện`;
        this.isSubmit = true;
      
    },
  },
};
</script>
