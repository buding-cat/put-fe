// 检测本地语言设置并在必要时设置默认值
function checkAndSetLanguage() {
  // 检查语言设置是否已存在
  const languageSetting = localStorage.getItem('__AURORA__Language');

  // 如果语言设置不存在（null 或 undefined）
  if (!languageSetting) {
    // 设置默认语言为中文
    localStorage.setItem('__AURORA__Language', '{"value":"zhCN","expire":null}');
    console.log('已设置默认语言为中文 (zhCN)');
  } else {
    console.log('语言设置已存在，保持不变');
  }
}

// 执行检查
checkAndSetLanguage();

function isDarkMode() {
  var themeMedia = window.matchMedia('(prefers-color-scheme: dark)')
  var isDark = false
  var localMode = JSON.parse(localStorage.getItem('__AURORA__Darkmode') || '{}').value

  if (localMode !== undefined) {
    isDark = localMode === 'dark'
  } else if (EnvConfig.appTheme === 'dark') {
    isDark = true
  } else if (EnvConfig.appTheme === 'auto') {
    isDark = themeMedia.matches
  }
  return isDark
}

