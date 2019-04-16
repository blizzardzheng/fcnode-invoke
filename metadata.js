module.exports = {
  "name": "helloworld-ts-node",
  "description": "基于ts的 helloworld node invoke 最佳实践",
  "userPrompt": [
    {
        "type": "input",
        "name": "projectName",
        "message": "Please input projectName?",
        "default": "{{ projectName }}"
    },
    {
      "type": "input",
      "name": "author",
      "message": "Please input author?"
    }
  ],
  "vars": {                             // ⑧ 隐式变量
      "baz": "{{ projectName }}"
  },
  // "copyOnlyPaths": [ "**/test" ]                        //   ⑨ 设置某些目录和文件不需要渲染，只是简单的拷贝 
}