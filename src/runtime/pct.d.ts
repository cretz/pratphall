///<reference path='all.ts' />

declare module Pct {

    interface PhpAssocArray {
        [index: string]: any;
        [index: number]: any;
        forEach?(callbackfn: (value: any, index: any) => void): void;
    }
    interface PhpResource { }

    interface CompileTimeOnly { }
    interface Ambient extends CompileTimeOnly { }

    interface WithInvoke {
        __invoke(...args: any[]): any;
    }

    function declare(directive: string, value: any, block?: () => void): bool;

    function isInstance(obj: any, check: any): bool;

    function newAssocArray(obj: Object): PhpAssocArray;
    function toArray(array: PhpAssocArray): any[];
    function toAssocArray(array: any[]): PhpAssocArray;
    function unionArray(...arrays: any[][]): any[];
    function unionArray(...arrays: PhpAssocArray[]): PhpAssocArray;
    function unionArray(...arrays: any[]): PhpAssocArray;

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

    function const(value: number): number;
    function const(value: string): string;
    var __LINE__: number;
    var __FILE__: string;
    var __DIR__: string;
    var __FUNCTION__: string;
    var __CLASS__: string;
    var __TRAIT__: string;
    var __METHOD__: string;
    var __NAMESPACE__: string;

    function clone(value: any): any;

    interface TryCatch {
        try: () => any;
        catch?: { (e: Exception): any; };
        finally?: () => any;
    }

    interface TryCatches {
        try: () => any;
        catch: { (e: Exception): any; }[];
        finally?: () => any;
    }

    function try(val: TryCatch);
    function try(val: TryCatches);

}