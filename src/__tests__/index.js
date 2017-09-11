import tape from "tape"

import utils from "./utils"
import postcssplus from ".."

tape("postcss-cssplus is a postcss plugin", (t) => {
  t.ok(
    typeof postcssplus.process === "function",
    "should have the postcss process() function available"
  )

  t.end()
})

tape("cssplus regression test", (t) => {
  const input = utils.readFixture("regression")
  const expected = utils.readFixture("regression.expected")
  const actual = postcssplus({ browsers: "IE 6" }).process(input).css.trim()

  utils.write(utils.fixturePath("regression.actual"), actual)

  t.equal(
    actual,
    expected.trim(),
    "should pass the regression"
  )

  t.end()
})
