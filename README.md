Модуль для работы с МСК в proj4.js

### Пример
```ts
import proj4 from "proj4";
import { get } from "./src";
console.log(proj4("WGS84", get("MSK55z2").proj, [73.356141837, 54.985876655]).toString())
```