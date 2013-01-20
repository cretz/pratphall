///<reference path='all.d.ts' />

declare module Pct {

    interface CompileTimeOnly { }
    interface Ambient extends CompileTimeOnly { }
    interface OldStyleNamespace extends CompileTimeOnly { }

    interface Indexable extends CompileTimeOnly {
        [index: string]: any;
        [index: number]: any;
    }

    interface PhpAssocArray extends Array, Indexable, CompileTimeOnly {
        forEach?(callbackfn: (value: any, index: any) => void): void;
    }

    interface PhpResource { }

    interface WithInvoke {
        __invoke(...args: any[]): any;
    }

    function declare(directive: string, value: any, block?: () => void): bool;

    function isInstance(obj: any, check: any): bool;

    function typeName(obj: any): string;

    function newAssocArray(obj?: Object): PhpAssocArray;
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