import testReducer from "../helpers/testReducer"
import reducer from "./turn"

describe("턴 리듀서", () => {
  test.each`
    action                   | state        | expected
    ${{}}                    | ${undefined} | ${null}
    ${{ type: "start" }}     | ${null}      | ${0}
    ${{ type: "finish" }}    | ${5}         | ${null}
    ${{ type: "bust" }}      | ${0}         | ${1}
    ${{ type: "stay" }}      | ${0}         | ${1}
    ${{ type: "double" }}    | ${0}         | ${1}
    ${{ type: "surrender" }} | ${0}         | ${1}
  `("$action.type", testReducer(reducer))
})
