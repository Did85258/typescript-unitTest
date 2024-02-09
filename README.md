# typescript-unitTest
## Setup
1.ติดตั้ง package ที่จำเป็นของ TypeScript และ Jest
```
npm install --save-dev jest @types/jest ts-jest typescript
```
2.ติดตั้ง jest เป็น global package เพื่อความสะดวกในการใช้งาน
```
npm install -g jest
```
3.เพิ่มการกำหนดค่าให้กับ package.json เพื่อให้ jest ทำงานกับ TypeScript
```
{

"jest": {
    "transform": {
      ".(ts|tsx)": "<rootDir>/node_modules/ts-jest/preprocessor.js"
    },
    "testRegex": "(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$",
    "moduleFileExtensions": ["ts", "tsx", "js"]
  }
}
```
## execute
ทดสอบ unit test โดยใช้
