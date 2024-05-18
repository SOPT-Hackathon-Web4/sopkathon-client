// 공통으로 사용되는 Type 있다면 여기에 정의
export type NonEmptyArray<T> = readonly [T, ...T[]];
