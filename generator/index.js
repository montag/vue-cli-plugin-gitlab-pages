module.exports = (api, options, rootOptions) => {

  // write new ci script entries
  if (options.enableLinting) {
    api.extendPackage({
      scripts: {
        'ci:lint': 'vue-cli-service lint --no-fix --max-warnings 0'
      }
    })
  }

  // write out ci config with options
  api.render('./template/gitlab', {
    ...options
  })

  //write out vueConfig with options
  if (options.writeVueConfig) {
    api.render('./template/vueConfig', {
      ...options
    })
  }
}