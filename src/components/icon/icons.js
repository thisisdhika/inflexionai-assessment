const genIcon = (name) => ({
  ['tid-' + name]: () => import(`./svgs/${name}.svg`),
})

export const svgIcons = Object.assign(
  {},
  genIcon('box'),
  genIcon('adobe-xd'),
  genIcon('apple'),
  genIcon('atlassian'),
  genIcon('build'),
  genIcon('card'),
  genIcon('checkmark'),
  genIcon('document'),
  genIcon('facebook'),
  genIcon('google'),
  genIcon('help'),
  genIcon('home'),
  genIcon('jira'),
  genIcon('key'),
  genIcon('more'),
  genIcon('notifications'),
  genIcon('rocket'),
  genIcon('search'),
  genIcon('settings'),
  genIcon('slack'),
  genIcon('spotify'),
  genIcon('stats'),
  genIcon('user-alt'),
  genIcon('user'),
  genIcon('vandelay-ind')
)

export default svgIcons
