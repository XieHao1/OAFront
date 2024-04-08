const base = {
    get() {
        return {
            url : "http://localhost:8080/springboot30n9o/",
            name: "springboot30n9o",
            // 退出到首页链接
            indexUrl: ''
        };
    },
    getProjectName(){
        return {
            projectName: "E点OA"
        } 
    }
}
export default base
