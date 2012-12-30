///<reference path='all.ts' />

declare module Pct {

    interface PhpAssocArray {
        forEach?(callbackfn: (value: any, index: any) => void): void;
    }
    interface PhpResource { }

    interface Ambient { }

    function newAssocArray(obj: Object): PhpAssocArray;
    function toArray(array: PhpAssocArray): any[];
    function toAssocArray(array: any[]): PhpAssocArray;

    function castInt(value: any): number;
    function castBool(value: any): bool;
    function castFloat(value: any): number;
    function castString(value: any): string;
    function castArray(value: any): any[];
    function castAssocArray(value: any): PhpAssocArray;
    function castObject(value: any): Object;
    function castUnset(value: any): undefined;
    function castBinary(value: any): string;

    function isFalse(value: any): bool;
    function isNotFalse(value: any): bool;

    function swallowErrors(value: any): any;
}