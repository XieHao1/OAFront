<template>
  <div>
    <el-form
        class="detail-form-content"
        ref="ruleForm"
        :model="ruleForm"
        label-width="80px"
        style="background: transparent;"
    >
      <el-row>
        <el-col :span="12">
          <el-form-item v-if="flag=='yuangong'" label="员工工号" prop="yuangonggonghao">
            <el-input v-model="ruleForm.yuangonggonghao" readonly placeholder="员工工号" clearable></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item v-if="flag=='yuangong'" label="员工姓名" prop="yuangongxingming">
            <el-input v-model="ruleForm.yuangongxingming" placeholder="员工姓名" clearable></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item v-if="flag=='yuangong'" label="部门" prop="bumen">
            <el-select v-model="ruleForm.bumen" :disabled="true" placeholder="请选择部门">
              <el-option
                  v-for="(item,index) in yuangongbumenOptions"
                  v-bind:key="index"
                  :label="item"
                  :value="item">
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item v-if="flag=='yuangong'" label="职位" prop="zhiwei">
            <el-input v-model="ruleForm.zhiwei" readonly placeholder="职位" clearable></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item v-if="flag=='yuangong'" label="性别" prop="xingbie">
            <el-select v-model="ruleForm.xingbie" placeholder="请选择性别">
              <el-option
                  v-for="(item,index) in yuangongxingbieOptions"
                  v-bind:key="index"
                  :label="item"
                  :value="item">
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item v-if="flag=='yuangong'" label="年龄" prop="nianling">
            <el-input v-model="ruleForm.nianling" placeholder="年龄" clearable></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item v-if="flag=='yuangong'" label="员工手机" prop="yuangongshouji">
            <el-input v-model="ruleForm.yuangongshouji" placeholder="员工手机" clearable></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-form-item v-if="flag=='yuangong'" label="照片" prop="zhaopian">
            <file-upload
                tip="点击上传照片"
                action="file/upload"
                :limit="3"
                :multiple="true"
                :fileUrls="ruleForm.zhaopian?ruleForm.zhaopian:''"
                @change="yuangongzhaopianUploadChange"
            ></file-upload>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item v-if="flag=='yuangong'" label="基本工资" prop="jibengongzi">
            <el-input v-model="ruleForm.jibengongzi" readonly placeholder="基本工资" clearable></el-input>
          </el-form-item>
        </el-col>
        <el-form-item v-if="flag=='users'" label="用户名" prop="username">
          <el-input v-model="ruleForm.username"
                    placeholder="用户名"></el-input>
        </el-form-item>
        <el-col :span="24">
          <el-form-item>
            <el-button type="primary" @click="onUpdateHandler">修 改</el-button>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>
<script>
// 数字，邮件，手机，url，身份证校验
import {isNumber, isIntNumer, isEmail, isMobile, isPhone, isURL, checkIdCard} from "@/utils/validate";

export default {
  data() {
    return {
      ruleForm: {},
      flag: '',
      usersFlag: false,
      yuangongbumenOptions: [],
      yuangongxingbieOptions: [],
    };
  },
  mounted() {
    var table = this.$storage.get("sessionTable");
    this.flag = table;
    this.$http({
      url: `${this.$storage.get("sessionTable")}/session`,
      method: "get"
    }).then(({data}) => {
      if (data && data.code === 0) {
        this.ruleForm = data.data;
      } else {
        this.$message.error(data.msg);
      }
    });
    this.$http({
      url: `option/bumen/bumen`,
      method: "get"
    }).then(({data}) => {
      if (data && data.code === 0) {
        this.yuangongbumenOptions = data.data;
      } else {
        this.$message.error(data.msg);
      }
    });
    this.yuangongxingbieOptions = "男,女".split(',')
  },
  methods: {
    yuangongzhaopianUploadChange(fileUrls) {
      this.ruleForm.zhaopian = fileUrls;
    },
    onUpdateHandler() {
      if ((!this.ruleForm.yuangonggonghao) && 'yuangong' == this.flag) {
        this.$message.error('员工工号不能为空');
        return
      }
      if ((!this.ruleForm.mima) && 'yuangong' == this.flag) {
        this.$message.error('密码不能为空');
        return
      }
      if ('yuangong' == this.flag && this.ruleForm.yuangongshouji && (!isMobile(this.ruleForm.yuangongshouji))) {
        this.$message.error(`员工手机应输入手机格式`);
        return
      }
      if (this.ruleForm.zhaopian != null) {
        this.ruleForm.zhaopian = this.ruleForm.zhaopian.replace(new RegExp(this.$base.url, "g"), "");
      }
      if ('yuangong' == this.flag && this.ruleForm.jibengongzi && (!isNumber(this.ruleForm.jibengongzi))) {
        this.$message.error(`基本工资应输入数字`);
        return
      }
      if ('users' == this.flag && this.ruleForm.username.trim().length < 1) {
        this.$message.error(`用户名不能为空`);
        return
      }
      this.$http({
        url: `${this.$storage.get("sessionTable")}/update`,
        method: "post",
        data: this.ruleForm
      }).then(({data}) => {
        if (data && data.code === 0) {
          this.$message({
            message: "修改信息成功",
            type: "success",
            duration: 1500,
            onClose: () => {
            }
          });
        } else {
          this.$message.error(data.msg);
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
</style>
