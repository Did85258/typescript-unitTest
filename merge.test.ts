import {merge} from "./merge";
test("merge test", () =>{
    const collection_1 = [1, 3, 5, 6 , 10];
    const collection_2 = [2, 4, 6, 8];
    const collection_3 = [10, 7, 0];
    const expected = [0,1, 2, 3, 4, 5, 6, 6, 7, 8, 10, 10];
    expect(merge(collection_1, collection_2, collection_3)).toEqual(expected);
});