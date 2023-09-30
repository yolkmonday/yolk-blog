export default defineAppConfig({
  alpine: {
    title: 'Yolk',
    description: 'Tulisan ',
    image: {
      src: '/social-card-preview.png',
      alt: 'An image showcasing my project.',
      width: 400,
      height: 300
    },
    header: {
      position: 'right', // possible value are : | 'left' | 'center' | 'right'
      logo: {
        path: '/logo.svg', // path of the logo
        pathDark: '/logo-dark.svg', // path of the logo in dark mode, leave this empty if you want to use the same logo
        alt: 'yolk' // alt of the logo
      }
    },
    footer: {
      credits: {
        enabled: true, // possible value are : true | false
        repository: 'https://www.github.com/yolkmonday' // our github repository
      },
      navigation: true, // possible value are : true | false
      alignment: 'center', // possible value are : 'none' | 'left' | 'center' | 'right'
      message: 'Get in touch' // string that will be displayed in the footer (leave empty or delete to disable)
    },
    socials: {
      instagram: 'yolkmonday',
    },
    form: {
      successMessage: 'Message sent. Thank you!'
    }
  }
})
