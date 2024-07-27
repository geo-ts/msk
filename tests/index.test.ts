import { test, expect } from "bun:test"
import proj4 from "proj4"
import { get } from "../src"


test("Московская СК", () => {
    let result = proj4("WGS84", get("MSKMGGT").proj, [73.356141837, 54.985876655])
    expect(result[0]).toBe(2235485.7161981184)
    expect(result[1]).toBe(529596.847294432)
})

test("МСК-1964 Санкт-Петербург", () => {
    let result = proj4("WGS84", get("MSK1964sp").proj, [73.356141837, 54.985876655])
    expect(result[0]).toBe(2758110.547569399)
    expect(result[1]).toBe(437976.91988677345)
})

test("МСК-55", () => {
    let result = proj4("WGS84", get("MSK55z2").proj, [73.356141837, 54.985876655])
    expect(result[0]).toBe(2161894.502199385)
    expect(result[1]).toBe(483672.32940373477)
})