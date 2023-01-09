export default{
    methods: {
        validate(value, nameComponent="",status = 1) {
            if (status) {
                if (isNaN(value) || value === null) {
                    alert(`${nameComponent} : vui lòng nhập thông tin bằng số thực`)
                    return false
                }
            } else {
                if (isNaN(value) || value === null || parseInt(value) !== +value) {
                    alert(`${nameComponent} : vui lòng nhập thông tin bằng số nguyên`)
                    return false
                }
            }
            return true
        },
        }
}