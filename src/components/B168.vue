<template>
  <form class="form-group card text-left p-3">
    <label class="font-weight-bold">Bài 168: Cho mảng 1 chiều các số nguyên. Hãy viết hàm tìm giá trị lớn nhất trong mảng có dạng 5^k. Nếu mảng khong tồn tại giá trị 5^k thì hàm sẽ trả về 0</label>
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
      if (this.validate(this.n, "B198",0)) {
        this.list.push(+this.n);
        this.n = null;
      }
    },
    KTDang5k(n){
        if(n <= 1){
            return true
        }
         while(n > 1){
            if(n % 5 !== 0)  
                return false
            n = parseInt(`${n / 5}`);
        }
    },
    perform() {
      if (!this.list.length) {
        alert("Thông tin không hợp lệ");
        return;
      }
      let result = 0

      for (let i = 0; i < this.list.length; i++) {
          if (this.KTDang5k(this.list[i])) {
              if(!result || this.list[i] > result){
                result =this.list[i]
              }
          }
        }
      this.results = result ? "Mảng có các giá trị 5^k lớn nhất là : " + result : "Mảng không có giá trị thoả điều kiện"

      this.isSubmit = true;
    },
  },
};
</script>
