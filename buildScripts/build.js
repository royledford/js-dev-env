/*eslint-disable no-console */
import webpack from 'webpack'
import webpackConfig from '../webpack.config.prod'
import chalk from 'chalk'

process.env.NODE_ENV = 'production'

console.log(
  chalk.blue(
    'Generating minified bundle for production. This will take a moment.'
  )
)

webpack(webpackConfig).run((err, stats) => {
  if (err) {
    // fatal error so stop
    console.log(chalk.red(err))
    return 1
  }

  const jsonStats = stats.toJson()

  if (jsonStats.hasErrors) {
    return jsonStats.errors.map(error => console.log(chalk.red(error)))
  }

  if (jsonStats.hasWarnings) {
    console.log(chalk.yellow('Webpack generated the following warnings:'))
    jsonStats.warnings.map(warning => console.log(chalk.yellow(warning)))
  }

  console.log(`Webpack stats: ${stats}`)

  // If here the build was successful
  console.log(chalk.green('App built successfully and written to /dist.'))

  return 0
})
