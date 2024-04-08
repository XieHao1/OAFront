const menu = {
    list() {
        return [
            {
                //管理员
                "backMenu": [
                    {
                        "menu": "企业管理",
                        "child": [
                            {
                                "appFrontIcon": "cuIcon-goods",
                                "buttons": ["新增", "查看", "修改", "删除"],
                                "menu": "部门管理",
                                "menuJump": "列表",
                                "tableName": "bumen"
                            },
                            {
                                "appFrontIcon": "cuIcon-news",
                                // "buttons": ["新增", "查看", "修改", "删除", "员工培训", "发放工资", "详细信息"],
                                "buttons": ["新增", "查看", "修改", "删除"],
                                "menu": "员工管理",
                                "menuJump": "列表",
                                "tableName": "yuangong"
                            }
                        ]
                    }
                    // , {
                    //     "menu": "部门管理",
                    //     "child": [
                    //         {
                    //             "appFrontIcon": "cuIcon-goods",
                    //             "buttons": ["新增", "查看", "修改", "删除"],
                    //             "menu": "部门",
                    //             "menuJump": "列表",
                    //             "tableName": "bumen"
                    //         }
                    //     ]
                    // }
                    , {
                        "menu": "申请事项",
                        "child": [
                            {
                                "appFrontIcon": "cuIcon-medal",
                                "buttons": ["查看", "修改", "删除"],
                                "menu": "考勤管理",
                                "menuJump": "列表",
                                "tableName": "yuangongkaoqin"
                            },
                            {
                                "appFrontIcon": "cuIcon-similar",
                                "buttons": ["查看", "修改", "删除", "审核"],
                                "menu": "请假管理",
                                "menuJump": "列表",
                                "tableName": "qingjiashenqing"
                            },
                            {
                                "appFrontIcon": "cuIcon-brand",
                                "buttons": ["查看", "修改", "删除", "审核"],
                                "menu": "加班管理",
                                "menuJump": "列表",
                                "tableName": "jiabanshenqing"
                            }
                        ]
                    }
                    // , {
                    //     "menu": "请假申请管理",
                    //     "child": [
                    //         {
                    //             "appFrontIcon": "cuIcon-similar",
                    //             "buttons": ["查看", "修改", "删除", "审核"],
                    //             "menu": "请假申请",
                    //             "menuJump": "列表",
                    //             "tableName": "qingjiashenqing"
                    //         }
                    //     ]
                    // }
                    // , {
                    //     "menu": "加班申请管理",
                    //     "child": [
                    //         {
                    //         "appFrontIcon": "cuIcon-brand",
                    //         "buttons": ["查看", "修改", "删除", "审核"],
                    //         "menu": "加班申请",
                    //         "menuJump": "列表",
                    //         "tableName": "jiabanshenqing"
                    //     }
                    //     ]
                    // }
                    // , {
                    //     "menu": "员工工资管理",
                    //     "child": [{
                    //         "appFrontIcon": "cuIcon-skin",
                    //         "buttons": ["新增", "查看", "修改", "删除"],
                    //         "menu": "员工工资",
                    //         "menuJump": "列表",
                    //         "tableName": "yuangonggongzi"
                    //     }]
                    // }
                    // , {
                    //     "menu": "招聘计划管理",
                    //     "child": [{
                    //         "appFrontIcon": "cuIcon-qrcode",
                    //         "buttons": ["查看", "修改", "删除", "审核"],
                    //         "menu": "招聘计划",
                    //         "menuJump": "列表",
                    //         "tableName": "zhaopinjihua"
                    //     }]
                    // }
                    // , {
                    //     "menu": "员工培训管理",
                    //     "child": [{
                    //         "appFrontIcon": "cuIcon-list",
                    //         "buttons": ["查看", "修改", "删除"],
                    //         "menu": "员工培训",
                    //         "menuJump": "列表",
                    //         "tableName": "yuangongpeixun"
                    //     }]
                    // }
                    // , {
                    //     "menu": "部门培训管理",
                    //     "child": [{
                    //         "appFrontIcon": "cuIcon-form",
                    //         "buttons": ["新增", "查看", "修改", "删除"],
                    //         "menu": "部门培训",
                    //         "menuJump": "列表",
                    //         "tableName": "bumenpeixun"
                    //     }]
                    // }
                    // , {
                    //     "menu": "员工详细管理",
                    //     "child": [{
                    //         "appFrontIcon": "cuIcon-goodsnew",
                    //         "buttons": ["查看", "修改", "删除"],
                    //         "menu": "员工详细",
                    //         "menuJump": "列表",
                    //         "tableName": "yuangongxiangxi"
                    //     }],
                    // }
                ]
                ,
                "frontMenu": [],
                "hasBackLogin": "是",
                "hasBackRegister": "否",
                "hasFrontLogin": "否",
                "hasFrontRegister": "否",
                "roleName": "管理员",
                "tableName": "users"
            },
            //员工
            {
                "backMenu": [
                    // {
                    //     "menu": "企业管理",
                    //     "child": [
                    //         {
                    //             "appFrontIcon": "cuIcon-goods",
                    //             "buttons": ["新增", "查看", "修改", "删除"],
                    //             "menu": "部门管理",
                    //             "menuJump": "列表",
                    //             "tableName": "bumen"
                    //         },
                    //         {
                    //             "appFrontIcon": "cuIcon-news",
                    //             "buttons": ["新增", "查看", "修改", "删除"],
                    //             "menu": "员工管理",
                    //             "menuJump": "列表",
                    //             "tableName": "yuangong"
                    //         }
                    //     ]
                    // }
                    // ,
                    {
                        "menu": "申请事项",
                        "child": [
                            {
                                "appFrontIcon": "cuIcon-medal",
                                "buttons": ["新增","查看", "修改", "删除"],
                                "menu": "考勤管理",
                                "menuJump": "列表",
                                "tableName": "yuangongkaoqin"
                            },
                            {
                                "appFrontIcon": "cuIcon-similar",
                                "buttons": ["新增","查看", "修改", "删除"],
                                "menu": "请假管理",
                                "menuJump": "列表",
                                "tableName": "qingjiashenqing"
                            },
                            {
                                "appFrontIcon": "cuIcon-brand",
                                "buttons": ["新增","查看", "修改", "删除"],
                                "menu": "加班管理",
                                "menuJump": "列表",
                                "tableName": "jiabanshenqing"
                            }
                        ]
                    }
                    // {
                    //     "menu": "员工考勤管理",
                    //     "child": [{
                    //         "appFrontIcon": "cuIcon-medal",
                    //         "buttons": ["新增", "查看", "删除"],
                    //         "menu": "员工考勤",
                    //         "menuJump": "列表",
                    //         "tableName": "yuangongkaoqin"
                    //     }]
                    // },
                    // {
                    //     "menu": "请假申请管理",
                    //     "child": [{
                    //         "appFrontIcon": "cuIcon-similar",
                    //         "buttons": ["查看", "新增", "删除"],
                    //         "menu": "请假申请",
                    //         "menuJump": "列表",
                    //         "tableName": "qingjiashenqing"
                    //     }]
                    // },
                    // {
                    //     "menu": "加班申请管理",
                    //     "child": [{
                    //         "appFrontIcon": "cuIcon-brand",
                    //         "buttons": ["查看", "新增", "删除"],
                    //         "menu": "加班申请",
                    //         "menuJump": "列表",
                    //         "tableName": "jiabanshenqing"
                    //     }]
                    // },
                    // {
                    //     "menu": "员工工资管理",
                    //     "child": [{
                    //         "appFrontIcon": "cuIcon-skin",
                    //         "buttons": ["查看"],
                    //         "menu": "员工工资",
                    //         "menuJump": "列表",
                    //         "tableName": "yuangonggongzi"
                    //     }]
                    // },
                    // {
                    //     "menu": "招聘计划管理",
                    //     "child": [{
                    //         "appFrontIcon": "cuIcon-qrcode",
                    //         "buttons": ["新增", "查看", "删除"],
                    //         "menu": "招聘计划",
                    //         "menuJump": "列表",
                    //         "tableName": "zhaopinjihua"
                    //     }]
                    // },
                    // {
                    //     "menu": "员工培训管理",
                    //     "child": [{
                    //         "appFrontIcon": "cuIcon-list",
                    //         "buttons": ["查看"],
                    //         "menu": "员工培训",
                    //         "menuJump": "列表",
                    //         "tableName": "yuangongpeixun"
                    //     }]
                    // },
                    // {
                    //     "menu": "部门培训管理",
                    //     "child": [{
                    //         "appFrontIcon": "cuIcon-form",
                    //         "buttons": ["查看"],
                    //         "menu": "部门培训",
                    //         "menuJump": "列表",
                    //         "tableName": "bumenpeixun"
                    //     }]
                    // },
                    // {
                    //     "menu": "员工详细管理",
                    //     "child": [{
                    //         "appFrontIcon": "cuIcon-goodsnew",
                    //         "buttons": ["查看"],
                    //         "menu": "员工详细",
                    //         "menuJump": "列表",
                    //         "tableName": "yuangongxiangxi"
                    //     }]
                    // }
                ],
                "frontMenu": [],
                "hasBackLogin": "是",
                "hasBackRegister": "否",
                "hasFrontLogin": "是",
                "hasFrontRegister": "是",
                "roleName": "员工",
                "tableName": "yuangong"
            }
        ]
    }
}
export default menu;
