
import { defineConfig } from 'rspress/config';

export default defineConfig({
  // 文档根目录
  root: 'docs',
  // base:'/Blog',
  icon:'https://lf3-static.bytednsdoc.com/obj/eden-cn/rjhwzy/ljhwZthlaukjlkulzlp/rspress/rspress-navbar-logo-0904.png',
  logo: {
    light:
      'https://lf3-static.bytednsdoc.com/obj/eden-cn/rjhwzy/ljhwZthlaukjlkulzlp/rspress/rspress-navbar-logo-0904.png',
    dark: 'https://lf3-static.bytednsdoc.com/obj/eden-cn/rjhwzy/ljhwZthlaukjlkulzlp/rspress/rspress-navbar-logo-dark-0904.png',
  },
  themeConfig: {
    enableContentAnimation: true,
    footer: {
      message: 'From Yuhang Zi       Happy for living',
    },
    
    socialLinks: [
      {
        icon: 'github',
        mode: 'link',
        content: 'https://github.com/Tomaolala/Blog',
      },
      {
        icon: 'discord',
        mode: 'link',
        content: 'https://github.com/Tomaolala/Blog',
      },
    ]}

});


