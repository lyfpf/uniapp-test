module.exports = {
  prompts: [
    {
      type: 'input',
      name: 'key',
      message: '百度统计key',
    }
  ],
  actions: [
    {
      type: 'add',
      files: '**',
    }
  ]
}