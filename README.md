# scaffold-test
node.js：整个脚手架工具的根本组成部分，推荐使用最新的版本。
es6：新版本的node.js对于es6的支持度已经非常高，使用es6能够极大地提升开发效率和开发感受。
commander：TJ大神开发的工具，能够更好地组织和处理命令行的输入。
co：TJ大神开发的异步流程控制工具，用更舒服的方式写异步代码。
co-prompt：还是TJ大神的作品……传统的命令行只能单行一次性地输入所有参数和选项，使用这个工具可以自动提供提示信息，并且分步接收用户的输入，体验类似npm init时的一步一步输入参数的过程。

npm link命令可以将一个任意位置的npm包链接到全局执行环境，从而在任意位置使用命令行都可以直接运行该npm包。
在package.json文件里面添加一个字段，表示本npm包的可执行文件位于bin/foo
"bin": "bin/foo"
