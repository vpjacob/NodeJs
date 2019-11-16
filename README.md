# NodeJs

1. nest new server
2. nest g app admin 创建子应用admin。
3. 启动 nest start -w admin
4. nest g lib db  创建个独立2个app的数据库
5. xl_close_port -p 3000
6. npm i -s nestjs-typegoose @typegoose/typegoose
7. nest g mo -p admin users 在admin 子项目添加user模型
8. nest g co -p admin users 在admin 子项目中添加控制器